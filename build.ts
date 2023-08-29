import fs from "node:fs";
import path from "node:path";

const rg = (str: string) => {
  const slashes = str.split("/");
  // @ts-ignore
  const link = "/rabbit_assets/" + slashes.at(-1).split(`\"`)[0];
  const name = slashes[0].split(" ")[1];
  return [name, link];
};
const replacer = (input: string) => {
  const lines = input.split("\n").filter((line) => line.trim().length > 0);
  const images: string[][] = [];
  try {
    // finding images name and link;
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (line.includes("./icons/")) {
        images.push(rg(line));
        lines.splice(i, 1);
        i -= 1;
        input = lines.join("\n");
      }
    }
    if (!images.length) {
      return input;
    }
    // inputting as image placeholders
    for (let i = 0; i < images.length; i++) {
      const img = images[i];
      // @ts-ignore
      input = input.replaceAll(`: ${img[0]},`, `: "${img[1]}",`);
    }
  } catch (error) {
    throw new Error(" unable parse line ");
  }
  return input;
};

function ensureDirectoryExistence(filePath) {
  const dirname = path.dirname(filePath);
  if (fs.existsSync(dirname)) {
    return true;
  }
  ensureDirectoryExistence(dirname);
  fs.mkdirSync(dirname);
}

function processFiles(srcDir = "./src", destDir = "./lib") {
  // validating existence
  const srcPath = path.join(srcDir, srcDir);
  if (fs.existsSync(srcPath)) {
    throw new Error("input dir does'nt exist");
  }
  const destPath = path.join(destDir, destDir);
  ensureDirectoryExistence(destPath);
  // walking dir tree
  let CssFile = { destPath: null, fileContent: null };
  fs.readdirSync(srcDir, { withFileTypes: true }).forEach((entry) => {
    const srcPath = path.join(srcDir, entry.name);
    const destPath = path.join(destDir, entry.name);
    if (entry.isDirectory()) {
      processFiles(srcPath, destPath);
    } else {
      let fileContent = fs.readFileSync(srcPath, "utf-8");

      if (entry.isFile() && entry.name === "style.css") {
        const minifiedCSS = minifyCSS(fileContent);
        // @ts-ignore
        CssFile.fileContent = CssFile.fileContent.replace("{css}", minifiedCSS);
        fs.writeFileSync(CssFile.destPath, CssFile.fileContent);
      }

      if (entry.isFile() && [".js", ".ts"].includes(path.extname(entry.name))) {
        if (entry.name === "css.ts") {
          CssFile.destPath = destPath;
          CssFile.fileContent = fileContent;
        }
        fileContent = replacer(fileContent);
      }

      fs.writeFileSync(destPath, fileContent);
    }
  });
}
processFiles();
function minifyCSS(css) {
  return css
    .replace(/\s+/g, " ")
    .replace(/\/\*.*?\*\//g, "")
    .replace(/(\s*:\s*)/g, ":")
    .replace(/(\s*;\s*)/g, ";")
    .replace(/;}/g, "}")
    .trim();
}
console.log("Files processed and written to the destination directory.");
