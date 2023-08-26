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

export const me = (
  tag: string,
  attrs?: Record<string, any>,
  ...chils: HTMLElement[] | string[]
) => {
  const ele = document.createElement(tag);
  for (const attr in attrs) {
    // @ts-ignore
    ele[attr] = attrs[attr as keyof Attr];
  }
  for (let i = 0; i < chils.length; i++) {
    const chil = chils[i];
    if (chil instanceof HTMLElement) {
      ele.appendChild(chil);
    }
    if (typeof chil === "string") {
      ele.innerText = chil;
    }
  }
  return ele as any;
};

export const u = <E>(q: string) => document.querySelector(q) as E;

export const css = () => {
  const styE = document.createElement("style");
  styE.innerHTML = `
.rabbit-editor-container * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-weight: unset;
  width: unset;
  min-width: unset;
  line-height: unset;
  font-size: unset;
  max-width: unset;
  text-align: start;
}

.rabbit-editor-container p {
  transition: color 0.4s ease-in-out, background-color 0.6s ease-in-out;
}

.rabbit-editor-container p:hover,
.rabbit-editor-container p:active,
.rabbit-editor-container p:focus {
  color: #444141;
  background-color: hsl(0deg 0% 0% / 7%) !important;
}

.rabbit-editor-container::-webkit-scrollbar {
  width: 4px !important;
  height: 4px !important;
}

.rabbit-editor-container::-webkit-scrollbar-thumb {
  background-color: hsl(0deg 0% 0% / 20%) !important;
  outline: 1px solid hsl(0deg 0% 0% / 20%) !important;
  border-radius: 15px !important;
}

.rabbit-editor-container::-webkit-scrollbar-track {
  background-color: hsl(0deg 0% 0% / 20%);
}

.rabbit-editor-container {
  padding: 3px 0px;
  width: 100%;
  height: 94vh;
  margin: 0px auto;
  margin-top: 6vh;
  overflow-y: scroll;
  background-color: hsl(0, 0%, 90%);
  outline: none;
  display: flex;
  flex-direction: column;
  /* background-image: url(./rabbit-bg.png); */
  background-size: 16%;
  background-repeat: no-repeat;
  background-position: center;
}
.rabbit-editor-container img {
  width: 40%;
  /* margin: auto; */
}

.rabbit-editor-container img:hover {
  border: 1px goldenrod solid !important;
  border-radius: 8px;
  padding: 1rem;
}

.rabbit-tool-container {
  background-color: hsl(215deg 24.49% 19.22%);
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: relative;
  width: 100%;
  position: fixed;
  top: 0;
  height: 6vh;
}

.rabbit-tool-container.mobile {
  bottom: 0;
  top: unset;
}

.rabbit-tool-container img.rabbit-tool {
  max-width: 28px;
}

.rabbit-tool-container .rabbit-tool {
  cursor: pointer;
}

.rabbit-editor-container.mobile {
  background-size: 37%;
  margin-top: 0px;
  margin-bottom: 6vh;
}

.rabbit-tool-container .rabbit-modal {
  /* border: 1px red solid; */
  position: fixed;
  transform: scale(0);
  min-height: 50vh;
  min-width: 60vh;
  top: 20vh;
  background-color: hsl(0, 0%, 90%);
  padding: 1rem;
  border-radius: 8px;
  margin: auto;
  box-shadow: 0px 8px 30px rgba(128, 128, 128, 0.7);
}

.rabbit-tool-container .rabbit-modal.mobile {
  min-height: 60vh;
  min-width: 90vh;
}

.rabbit-tool-container .rabbit-modal.active {
  animation: rabbit-editor-mu 0.5s ease-in forwards;
}

.rabbit-tool-container .rabbit-modal.in-active {
  animation: rabbit-editor-md 0.3s ease-in forwards;
}

.rabbit-tool-container .flex-x {
  display: flex;
  align-items: center;
}

.rabbit-tool-container .mw {
  width: 100%;
}

.rabbit-tool-container .flex-cx {
  justify-content: space-between;
}

.rabbit-tool-container .flex-y {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.rabbit-tool-container .flex-c {
  display: flex;
  align-items: center;
  justify-content: center;
}

@keyframes rabbit-editor-mu {
  from {
    transform: scale(0.5);
  }
  to {
    transform: scale(1);
  }
}

@keyframes rabbit-editor-md {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(0);
  }
}
`;
  document.head.appendChild(styE);
};