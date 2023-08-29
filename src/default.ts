import link from "./icons/link.png";
import txt from "./icons/txt.png";
import color from "./icons/color.png";
import add from "./icons/add.png";
import bg from "./icons/bg.png";
import left from "./icons/left.png";
import center from "./icons/center.png";
import centerb from "./icons/senter.png";
import right from "./icons/right.png";
import heading from "./icons/heading.png";
import img_icon from "./icons/img.png";
import x_icon from "./icons/x.png";
import { El_ref, me, u } from "./tools";
import { Rabbit } from "./rabbit";

const ref = new El_ref();

export const default_RabbitSetup = (Rabbit: Rabbit) => {
  Rabbit.installTool("Bold", {
    image: heading,
    tooling({ selectedElement }) {
      Rabbit.showModal("text-setting", selectedElement);
    },
  });

  // Rabbit.installTool("Italic", {
  //   image: txt,
  //   tooling({ selectedElement, selection, range }) {
  //     //   console.log(selection, selectedElement);
  //     if (selectedElement) {
  //       if (selection) {
  //         if (selection === selectedElement.innerText) {
  //           if (selectedElement?.style.fontStyle === "italic") {
  //             selectedElement!.style.fontStyle = "unset";
  //           } else {
  //             selectedElement!.style.fontStyle = "italic";
  //           }
  //         } else {
  //           const span = document.createElement("span");
  //           span.innerText = selection;
  //           span.style.fontWeight = "bold";
  //           range!.deleteContents();
  //           range!.insertNode(span);
  //         }
  //       }
  //     }
  //   },
  // });

  // Rabbit.installTool("Color", {
  //   image: color,
  //   tooling({ selectedElement, selection, range }) {
  //     // console.log(selection, selectedElement);
  //     const input = document.createElement("input");
  //     input.type = "color";
  //     input.addEventListener("change", (e) => {
  //       const color = (e.target! as HTMLInputElement).value;
  //       if (selectedElement) {
  //         if (selection) {
  //           if (selection === selectedElement.innerText) {
  //             if (selectedElement?.style.color === color) {
  //               selectedElement!.style.color = "unset";
  //             } else {
  //               selectedElement!.style.color = color;
  //             }
  //           } else {
  //             const span = document.createElement("span");
  //             span.innerText = selection;
  //             span.style.color = color;
  //             range!.deleteContents();
  //             range!.insertNode(span);
  //           }
  //         }
  //       }
  //     });
  //     input.click();
  //   },
  // });

  Rabbit.installTool("BackgroundColor", {
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

  Rabbit.installTool("Image", {
    image: img_icon,
    tooling({ selectedElement }) {
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
              Rabbit._el!.appendChild(img);
            }
          };
          reader.readAsDataURL(file);
        }
      });
    },
  });

  Rabbit.installTool("Asset", {
    image: add,
    tooling() {
      Rabbit.showModal("assets");
    },
  });

  Rabbit.installTool("Link", {
    image: link,
    tooling({ selectedElement, selection, range }) {
      Rabbit.showModal("link", { selectedElement, selection, range });
    },
  });

  // Rabbit.installTool("Alignment", {
  //   image: center,
  //   tooling({ selection, range }) {
  //     // console.log(selection, selectedElement);
  //     if (selection) {
  //       const alignedContainer = document.createElement("div");
  //       alignedContainer.style.textAlign = "center";
  //       alignedContainer.appendChild(range!.extractContents());
  //       range!.insertNode(alignedContainer);
  //     }
  //   },
  // });

  Rabbit.installAction("paste", (e: any) => {
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
        if (Rabbit.selectedElement) {
          Rabbit.selectedElement?.insertAdjacentElement("afterend", img);
        } else {
          Rabbit._el!.appendChild(img);
        }
        // console.log({ sel: Rabbit.selectedElement });
      };
      reader.readAsDataURL(file);
    }
    // console.log({ text });
    if (text) {
      const p = document.createElement("p");
      p.innerText = (text as string).replace(/\n/g, "");
      if (Rabbit.selectedElement) {
        Rabbit.selectedElement?.insertAdjacentElement("afterend", p);
      } else {
        Rabbit._el!.appendChild(p);
      }
    }
    Rabbit._el?.focus();
    // console.log({ pastedText, pastedImg });
    // document.execCommand("insertHTML", false, pastedText);
  });
  Rabbit.installAction("click", async (e: any) => {
    const element = e.target as HTMLElement;
    if (element.tagName === "IMG") {
      Rabbit.showModal("image-tool", element);
    }
  });

  Rabbit.installModalTool("link", [
    ({ selection, range }) => {
      if (!Rabbit.selection) {
        return;
      }
      return me(
        "div",
        { className: "flex-y mw" },
        me(
          "div",
          { className: "flex-x mw flex-cx" },
          me("span"),
          me("img", {
            style: { width: "24px" },
            src: x_icon,
            onclick() {
              Rabbit.hideModal();
            },
          })
        ),
        me("input", { placeholder: "input link here", id: "link-input" }),
        me(
          "button",
          {
            className: "btn",
            onclick() {
              const url = u<HTMLInputElement>("#link-input")!.value;
              if (url) {
                const link = document.createElement("a");
                link.href = url;
                link.textContent = selection;
                range!.deleteContents();
                range!.insertNode(link);
              }
              Rabbit.hideModal();
            },
          },
          "Done"
        )
      );
    },
  ]);

  Rabbit.installModalTool("assets", [
    () => {
      return me(
        "div",
        { className: "flex-y mw" },
        me(
          "div",
          { className: "flex-x mw flex-cx" },
          me("span"),
          me("img", {
            style: { width: "24px" },
            src: x_icon,
            onclick() {
              Rabbit.hideModal();
            },
          })
        ),
        me("input", { placeholder: "input link here", id: "link-input" }),
        me(
          "button",
          {
            className: "btn",
            onclick() {
              Rabbit.hideModal();
            },
          },
          "Done"
        )
      );
    },
  ]);

  Rabbit.installModalTool("image-tool", [
    (image) => {
      const wv = image.style.width.slice(0, -2);
      const hv = image.style.height.slice(0, -2);
      return me(
        "div",
        { className: "flex-y mw" },
        me(
          "div",
          { className: "flex-x mw flex-cx" },
          me("span"),
          me("img", {
            style: { width: "17px" },
            src: x_icon,
            onclick() {
              Rabbit.hideModal();
            },
          })
        ),
        me("span", "select width"),
        me(
          "div",
          me<HTMLInputElement>("input", {
            type: "range",
            min: "100",
            max: "500",
            step: "50",
            value: wv,
            onchange() {
              // @ts-ignore
              const value = this.value;
              ref.E("wv-span")!.innerText = value + " px";
              image.style.width = value + "px";
            },
          }),
          me("span", { ref: ref.setAs("wv-span") }, wv ? wv + "px" : "300px")
        ),
        me("span", "select height"),
        me(
          "div",
          me<HTMLInputElement>("input", {
            type: "range",
            min: "100",
            max: "500",
            step: "50",
            value: hv,
            onchange() {
              // @ts-ignore
              const value = this.value;
              ref.E("hv-span")!.innerText = value + " px";
              image.style.height = value + "px";
              // console.log();
            },
          }),
          me("span", { ref: ref.setAs("hv-span") }, hv ? hv + "px" : "300px")
        ),
        me(
          "div",
          {
            className: "",
          },
          me("img", {
            style: { width: "2.7rem" },
            src: left,
            onclick() {
              image.style.margin = "0px";
              image.style.alignSelf = "flex-start";
              Rabbit.hideModal();
            },
          }),
          me("img", {
            style: { width: "2.7rem" },
            src: centerb,
            onclick() {
              image.style.alignSelf = "inset";
              image.style.margin = "0px auto";
              Rabbit.hideModal();
            },
          }),
          me("img", {
            style: { width: "2.7rem" },
            src: right,
            onclick() {
              image.style.margin = "0px";
              image.style.alignSelf = "flex-end";
              Rabbit.hideModal();
            },
          })
        )
      );
    },
  ]);

  Rabbit.installModalTool("text-setting", [
    (element) => {
      console.log(element);
      return me(
        "div",
        { className: "flex-y mw" },
        me(
          "div",
          { className: "flex-x mw flex-cx" },
          me("span"),
          me("img", {
            style: { width: "17px" },
            src: x_icon,
            onclick() {
              Rabbit.hideModal();
            },
          })
        ),
        me(
          "div",
          { className: "flex-y" },
          me(
            "h3",
            {
              onclick() {
                element.style.fontWeight = "bold";
              },
            },
            "Bold"
          ),
          me(
            "h3",
            {
              onclick() {
                element.style.fontSize = "30px";
                element.style.fontStyle = "bold";
              },
            },
            "Main Header"
          ),
          me(
            "h3",
            {
              onclick() {
                element.style.fontSize = "22px";
                element.style.fontStyle = "bold";
              },
            },
            "Small Header"
          ),
          me(
            "h3",
            {
              onclick() {
                element.style.fontSize = "16px";
              },
            },
            "Normal"
          ),
          me(
            "h3",
            {
              onclick() {
                element.style.fontStyle = "italic";
              },
            },
            "Italic"
          ),
          me(
            "h3",
            {
              onclick() {
                element.style.textDecoration = "underline";
              },
            },
            "Underline"
          ),
          me(
            "h3",
            {
              onclick() {
                element.style.textDecoration = "line-through";
              },
            },
            "Strike"
          )
        ),
        me(
          "div",
          {
            className: "flex-fl",
          },
          me("img", {
            style: { width: "1.7rem" },
            src: left,
            onclick() {
              element.style.textAlign = "start";
              Rabbit.hideModal();
            },
          }),
          me("img", {
            style: { width: "1.7rem" },
            src: centerb,
            onclick() {
              element.style.textAlign = "center";
              Rabbit.hideModal();
            },
          }),
          me("img", {
            style: { width: "1.7rem" },
            src: right,
            onclick() {
              element.style.textAlign = "end";
              Rabbit.hideModal();
            },
          })
        )
      );
    },
  ]);

  // last  }
};
