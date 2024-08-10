export const css = () => {
  const styE = document.createElement("style");
  styE.innerHTML = `
  /* rabbit css - minified */
  {css}
`;
  document.head.appendChild(styE);
};
