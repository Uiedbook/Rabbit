import { Rabbit } from "./rabbit";

// creating a rabbit instance
const BigFatRabbit = new Rabbit();

BigFatRabbit.installTool("Bold", {
  text: "Bold Button",
  tooling({ selectedElement, selection, range }) {
    console.log(selection, selectedElement);
    if (selectedElement) {
      if (selection) {
        if (selection === selectedElement.innerText) {
          if (selectedElement?.style.fontWeight === "bold") {
            selectedElement!.style.fontWeight = "unset";
          } else {
            selectedElement!.style.fontWeight = "bold";
          }
        } else {
          const span = document.createElement("span");
          span.innerText = selection;
          span.style.fontWeight = "bold";
          range!.deleteContents();
          range!.insertNode(span);
        }
      }
    }
  },
});

BigFatRabbit.installTool("Color", {
  text: "Color Button",
  tooling({ selectedElement, selection, range }) {
    console.log(selection, selectedElement);
    const input = document.createElement("input");
    input.type = "color";
    input.addEventListener("change", (e) => {
      const color = (e.target! as HTMLInputElement).value;
      if (selectedElement) {
        if (selection) {
          if (selection === selectedElement.innerText) {
            if (selectedElement?.style.color === color) {
              selectedElement!.style.color = "unset";
            } else {
              selectedElement!.style.color = color;
            }
          } else {
            const span = document.createElement("span");
            span.innerText = selection;
            span.style.color = color;
            range!.deleteContents();
            range!.insertNode(span);
          }
        }
      }
    });
    input.click();
  },
});

BigFatRabbit.installTool("Image", {
  text: "Inset image",
  tooling({ selectedElement, selection, range }) {
    console.log(selection, selectedElement);
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.click();
    input.addEventListener("change", (e) => {
      const file = (e.target! as any).files[0];
      if (file && file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const img = document.createElement("img");
          img.src = e.target!.result as string;
          range!.insertNode(img);
        };
        reader.readAsDataURL(file);
      }
    });
    input.click();
  },
});

BigFatRabbit.installOn("pub");
