// method for handling list items
function toggleList(listType) {
  const selection = window.getSelection()!;
  if (selection.rangeCount > 0) {
    const range = selection.getRangeAt(0);
    const listTag = listType === "ul" ? "ul" : "ol";
    const listItemTag = "li";
    const ancestorList = findAncestor(range.startContainer, listTag);
    if (ancestorList) {
      // Toggle the list type
      if (ancestorList.nodeName.toLowerCase() === listTag) {
        ancestorList.parentNode.insertBefore(
          range.extractContents(),
          ancestorList
        );
        ancestorList.parentNode.removeChild(ancestorList);
      }
    } else {
      const list = document.createElement(listTag);
      const listItem = document.createElement(listItemTag);
      listItem.textContent = "List Item";
      list.appendChild(listItem);
      range.surroundContents(list);
    }
  }
}

// method to find ancestor element with a specific tag
function findAncestor(node, tagName) {
  while (node && node.nodeName.toLowerCase() !== tagName) {
    node = node.parentNode;
  }
  return node;
}

// method for handling text alignment
function alignText(alignType) {
  const selection = window.getSelection()!;
  if (selection.rangeCount > 0) {
    const range = selection.getRangeAt(0);
    const container = range.commonAncestorContainer;
    const alignedContainer = document.createElement("div");
    alignedContainer.style.textAlign = alignType;
    alignedContainer.appendChild(range.extractContents());
    range.insertNode(alignedContainer);
  }
}

// method for handling image insertion
function insertImage() {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = "image/*";
  input.addEventListener("change", (event) => handleImageUpload(event));
  input.click();
}

function handleImageUpload(event) {
  const file = event.target.files[0];
  if (file && file.type.startsWith("image/")) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = document.createElement("img");
      img.src = e.target!.result as string;
      insertElementAtCursor(img);
    };
    reader.readAsDataURL(file);
  }
}

function insertElementAtCursor(element) {
  const selection = window.getSelection()!;
  if (selection.rangeCount > 0) {
    const range = selection.getRangeAt(0);
    range.insertNode(element);
  }
}

function insertLink() {
  const url = prompt("Enter URL:");
  if (url) {
    const selection = window.getSelection()!;
    if (selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      const link = document.createElement("a");
      link.href = url;
      link.textContent = selection.toString();
      range.deleteContents();
      range.insertNode(link);
    }
  }
}

function handlePaste(event) {
  event.preventDefault();
  const clipboardData =
    event.clipboardData ||
    (window as unknown as { clipboardData: object }).clipboardData;
  const pastedText = clipboardData.getData("text/plain");
  document.execCommand("insertHTML", false, pastedText);
}

function isBlockElement(node: Node) {
  const blockElements = ["DIV", "P", "H1", "H2", "H3", "H4", "H5", "H6", "LI"];
  return blockElements.includes(node.nodeName);
}

function applyStyleToLine(lineContainer, style) {
  // Apply the style to the line container
  lineContainer.style[style] = style === "fontWeight" ? "bold" : "true";
}
// really simple thing to do
export const throttle = (cb, time) => {
  let debID: number | undefined;
  return (...args: any) => {
    if (debID) {
      clearTimeout(debID);
    }
    debID = setTimeout(() => {
      cb(...args);
    }, time);
  };
};
