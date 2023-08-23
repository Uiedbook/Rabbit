import { Rabbit } from "./rabbit";

// creating a rabbit instance
const BigFatRabbit = new Rabbit();

BigFatRabbit.installTool("Bold", {
  text: "Bold Button",
  tooling({ selectedElement, selection, range }) {
    console.log(selection, selectedElement);
    if (selectedElement) {
      if (selection) {
        const span = document.createElement("span");
        span.innerText = selection;
        span.style.fontWeight = "bold";
        // selectedElement?.appendChild(span);
        range!.deleteContents();
        range!.insertNode(span);
      } else {
        if (selectedElement?.style.fontWeight === "bold") {
          selectedElement!.style.fontWeight = "unset";
        } else {
          selectedElement!.style.fontWeight = "bold";
        }
      }
    }
  },
});

BigFatRabbit.installOn("pub");
