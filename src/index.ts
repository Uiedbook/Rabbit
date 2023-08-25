import { Rabbit } from "./rabbit";

import link from "./icons/link.png";
import txt from "./icons/txt.png";
import color from "./icons/color.png";
import add from "./icons/add.png";
import bg from "./icons/bg.png";
import center from "./icons/center.png";
import heading from "./icons/heading.png";
import img_icon from "./icons/img.png";
import x_icon from "./icons/x.png";
import { div, input, span, img, button, reference } from "cradova";

const Gre = new reference();

// import link from "./icons/link.png";

// creating a rabbit instance
const BigFatRabbit = new Rabbit();

BigFatRabbit.installTool("Bold", {
  image: heading,
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

BigFatRabbit.installTool("Italic", {
  image: txt,
  tooling({ selectedElement, selection, range }) {
    console.log(selection, selectedElement);
    if (selectedElement) {
      if (selection) {
        if (selection === selectedElement.innerText) {
          if (selectedElement?.style.fontStyle === "italic") {
            selectedElement!.style.fontStyle = "unset";
          } else {
            selectedElement!.style.fontStyle = "italic";
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
  image: color,
  tooling({ selectedElement, selection, range }) {
    // console.log(selection, selectedElement);
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
BigFatRabbit.installTool("BackgroundColor", {
  image: bg,
  tooling({ selectedElement, selection, range }) {
    // console.log(selection, selectedElement);
    const input = document.createElement("input");
    input.type = "color";
    input.addEventListener("change", (e) => {
      const color = (e.target! as HTMLInputElement).value;
      if (selectedElement) {
        if (selection) {
          if (selection === selectedElement.innerText) {
            if (selectedElement?.style.backgroundColor === color) {
              selectedElement!.style.backgroundColor = "unset";
            } else {
              selectedElement!.style.backgroundColor = color;
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
  image: img_icon,
  tooling({ selectedElement, selection, range }) {
    // console.log({ selection, selectedElement });
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
          if (selectedElement) {
            selectedElement?.insertAdjacentElement("afterend", img);
          } else {
            BigFatRabbit._el.appendChild(img);
          }
        };
        reader.readAsDataURL(file);
      }
    });
  },
});

BigFatRabbit.installTool("Asset", {
  image: add,
  tooling() {
    console.log("asset");
  },
});

BigFatRabbit.installTool("Link", {
  image: link,
  tooling({ selectedElement, selection, range }) {
    BigFatRabbit.showModal("link", { selectedElement, selection, range });
  },
});

BigFatRabbit.installTool("Alignment", {
  image: center,
  tooling({ selectedElement, selection, range }) {
    // console.log(selection, selectedElement);
    if (selection) {
      const alignedContainer = document.createElement("div");
      alignedContainer.style.textAlign = "center";
      alignedContainer.appendChild(range!.extractContents());
      range!.insertNode(alignedContainer);
    }
  },
});

BigFatRabbit.installAction("paste", (e: any) => {
  e.preventDefault();
  const clipboardData =
    e.clipboardData ||
    (window as unknown as { clipboardData: object }).clipboardData;
  const text = clipboardData.getData("text/plain");
  const file = clipboardData.files[0];

  if (file && file.type.startsWith("image/")) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = document.createElement("img");
      img.src = e.target!.result as string;
      if (BigFatRabbit.selectedElement) {
        BigFatRabbit.selectedElement?.insertAdjacentElement("afterend", img);
      } else {
        BigFatRabbit._el!.appendChild(img);
      }
      // console.log({ sel: BigFatRabbit.selectedElement });
    };
    reader.readAsDataURL(file);
  }
  console.log({ text });
  if (text) {
    const p = document.createElement("p");
    p.innerText = (text as string).replace(/\n/g, "");
    if (BigFatRabbit.selectedElement) {
      BigFatRabbit.selectedElement?.insertAdjacentElement("afterend", p);
    } else {
      BigFatRabbit._el!.appendChild(p);
    }
  }

  // console.log({ pastedText, pastedImg });
  // document.execCommand("insertHTML", false, pastedText);
});

BigFatRabbit.installModalTool("link", ({ selection, range }: any) => {
  return div(
    { className: "flex-y mw" },
    div(
      { className: "flex-x mw flex-cx" },
      span,
      img({
        style: { width: "24px" },
        src: x_icon,
        onclick() {
          BigFatRabbit.hideModal();
        },
      })
    ),
    input({ placeholder: "input link here", reference: Gre.bindAs("link") }),
    button("Done", {
      onclick() {
        const url = Gre.link.value;
        if (url) {
          const link = document.createElement("a");
          link.href = url;
          link.textContent = selection;
          range!.deleteContents();
          range!.insertNode(link);
        }
        BigFatRabbit.hideModal();
      },
    })
  );
});
BigFatRabbit.installOn("pub");
