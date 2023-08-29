(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))A(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&A(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function A(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();const C="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABHNCSVQICAgIfAhkiAAAA+5JREFUeJztnD2LU0EUhh/FHxBLmUazzYKtVoLNEhvtbUStFmy0E2KjNitYabUgNoqN9jYu24h2CjaCjavNIFZ7/4EWd4Jr9s7c3GRuzoR9nyqbyXzseTMf52bOASGEEEIIIYQQQgghhBBCCBsGwE3gBfAD2Pfe//He/wl/fwDGwNBshJk4Zj2AKQbALeCu934wSwXn3EfgOrDX58D6oiQBxnQw/DTOuafAA6DKOai+KUWAsfd+a9FGnHM/gQ1WaDaUIMAT7/2dXI2tmgjHjfsf5zQ+gPf+NPAyZ5t9YjkDht77720fcs5VwFfgO7AGuGDktnr3gEeLDrJvLAX44L2/ECsMS8kzYJvDG+sIuN9SvwLONNQtCisBkt/+cLS8Qrvxkpv3KswCqz3gfqwgfPNnMT7Ao3D8jHG347iWjpUAFxNlG3RbNh4E0Q4RfIpRh7aWjoUAg9gmGpaersfHinqviHGuY3tLxUKA84myt3O2+TpRtj5nm0vB2g+Y5tec9VbC6WrCQgBn0GexlDYDjhwSwBgJYMwqCDCkfmwx+TVsnKndiY8wCq9NOGHV8YwMgc+TH2mC/7DlnIPFHjH8167lI+zSZ8DtyC9kmwu0OQB2D7YbhP2MwUwoXYCTTW/O8jg6wfmm+kGQlJPYC6UL0AcpP2TpPspRFKAoJIAxEsAYCWCMBDBGAhgjAYyRAMZIAGMkgDESwBgJYIwEMEYCGCMBjJEAxkgAY0oXYD9RNo687tKGOaXfivgdK/DebznnLofX0UgZ4Ev2UWWkdAG2gWgETIvhJ7zPN5z8lL4EVS0RMEmccy8p/OZ06QJAIgImRajzMPtoMrMKAlTARhcRFrjp5jt+fmEsBEj9k6ci7+9Ri9AagB3CnFLGj/VhgsUmnArOToUT7QE3nHOvgGvA2mQTDt/498ArYKel/1QfrYHjubGKE95vuvMZgqsbryNm5EfT1cQl9X0Iqz3ga9ObSwgrHSXulTaOqW+sBEhFQ0aDuDOQavt5j/1GsRJgO1YQ1vU+ZsHNFsfNxGGzEqAKp5UYb8ibD25IOj2CmcNm6QdEnaSwF+ySR4QhdUDG6XnG0jeWAuykzvXBYIuK0Gp868cV1inLBtTHwmRo0BxpZ2bKvlhCejNrAaA+Gr5r+9CBBE6viRtsCFxlxuyLzrlLtDtuvVKCANAxa+JUGjOoU5md7ZLyspRkTqUIAJlSV85CKcaHsgSAJYhQkvGhPAFgtmNjZ8Iesonxmj9NiQJMyJVNtwIe05x90ZySBYB/p5rNrjOidMNPKF2Ag4yo87+tM3XqCcauqJ/nfAM+UdhSI4QQQgghhBBCCCGEEEKIo8tf+nE2xEEA1t4AAAAASUVORK5CYII=",B="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAABHNCSVQICAgIfAhkiAAAAV1JREFUeJzt281Nw0AUReELFWT/NqYDSjEdQCURlZAOSCl0QDZvnw5gEUtEiOjKz3FmkM63zGSUpyMrP2NFAgAAAADc2l3rAc4MkkZJG0lHSXtJh4bzSOon0HNmvv1+MCJeJO1uP86PHgKNmfl+aTEinnS6mpq4b/XCZ7YL11fV/ArKzC/3nIhoNmcPV1DXCGQQyCCQQSCDQAaBDAIZBDIIZBDIIJBBIINABoGMJecso6RtZj5ea5i1RMSHpFcVTiargf48Q+5d5Yy7EmjIzM/Cvi5ExINm3C2pvAeNhT09mTV/JdCmsKcns+avBDoW9vRk1vyVQM3uUV3JrPkrgQ7Tp8G/M819mLOH70EGNw4NfmoYBDIIZBDIIJBBIINABoEMAhkEMghkEMggkEEgg0BG80DTYVZ5fW3NA+l00rdkfVU9BNpfOuOeHm96k6D5keuZQR3+XwwAAAAAVvAN22A8g9syGFoAAAAASUVORK5CYII=",b="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABHNCSVQICAgIfAhkiAAAAxdJREFUeJzt3DFvEzEYxvE/iL1hxQIpDIgp6gBzhQidOyKWlm58gUpl6NABJDYm1AWF78BGBzrTATGgiqFIIO/hG7D41AhSp7n47n0veX5jnPq1/Jyd9q4xiIiIiIiIiIiISCuuWQ+ghh6wBawDa+m1P8BX4AT4aTSuWroUQB84ijE+yb0phDACDulIEF0JYD/G+GqeHwghvAReNzSeYroQwNyTX+lCCN4DqD35Fe8heA6gH2M8L9FRCOEuTj8TrlsPIOOgYF9HBfsqyusKyF79IYTfwC5wCoyBIfA+xng78zM303td8boCNi5rSJM/AI65mNBjYJDaLrNVbnjleA1gPdO2y/QreZza6vRpxmsAvUzbcabtNNO2lmkz4zWAutzt8bMsWwCdowCMKQBjCsCYAjCmAIwpAGMKwJgCMKYAjCkAYwrAmAIwpgCMKQBjCsCYAjCmAIx1MYDc8+J+a6MopIsBvMi0PW1tFIV0LoD0v6LTrvQh+XBcumE9gDpijOchhA/A5/TSRoxxx25E9XUyAIAY4zawbT2ORXVuC1o2CsCYAjCmAIwpAGNeA7hlPYC2eA3gfgN9Pm6gz4V5DGA/91WjulKf+6X7XZS374gt/LXUWUIIz4FRkzXm4WkF9GnnXs4hju6aeloBv5rYeqYJIXwCNtuoNYuXFbDT1uQDpAM/hm3Vy/ESwDODmnsGNf/jYQsqdiTBvDwcYeBhBVg+xTJ/guYhgEcrWhvwEYClJv7inot5ALOOIFt25gFYavNX38usdAAemAcw44iZpa1dMQ8AOFvR2oCPAL6vaG3ARwAfV7Q24ONWBLR4J7SS9v87bdacxsMKAHhnULPkqYy1eVkBPeBbi88DqoP/zE/Y8rICxrR7RR7gYPLBTwAAoxDC26aLpBqjputclZctaFJjH8hePngneVoBlUF6ZltU6nNQut9FeQxgDGymU8+LSNvOJk72/Uket6BJfeCk7paUrvo35A97NeU9gMoQ2LvKs4O0z5/hfOIrXQmg0gMeAA+Be/+0/QC+cHGiuoiIiIiIiIiIiMiFvxZYoxUsvAurAAAAAElFTkSuQmCC",m="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAD1BMVEUAAAAAAAAAAAAAAAAAAABPDueNAAAABHRSTlMABojmDS1PJgAAAExJREFUeNpjGAUDAIRMXHACZ0WoIhUXPMAJqsgEnyJnUhQRto6ww0fBgKUnwjGhghmnmMAEPVLJVYRpHXEOHwXDqnwaLZ9GwWj5NAoAAAmRCQ1BoUAAAAAASUVORK5CYII=",u="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAD1BMVEUAAAAAAAAAAAAAAAAAAABPDueNAAAABHRSTlMABojmDS1PJgAAAExJREFUeNpjGAUDAIRMXHACZ0WoIhUXPMAJqsgEnyJnUhQRto6ww0fBAKcqwhGighm1mMAEI27JVYRpHXEOHwXDo3waLZ9GwWj5NAoAH7qUOZfvbzQAAAAASUVORK5CYII=",p="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAD1BMVEUAAAAAAAAAAAAAAAAAAABPDueNAAAABHRSTlMABojmDS1PJgAAAE1JREFUeNpjGAUDAIRMXHACZ0WoIhUXPMAJqsgEnyJnUhQRto6ww0fB4EhchKNFBTOCMYEJegyTqwjTOuIcPgqGevk0Wj6NgtHyaRQAAF6AkQl535H9AAAAAElFTkSuQmCC",w="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABHNCSVQICAgIfAhkiAAAAiRJREFUeJzt3DFSFFEUheGjxQLGyOBmbeAKTHULkBGKm9CEiGTchGNIRpU7IHYFBJK9gIwlGNBTZUBht3Le6Yb/S5m6l55D97w3xbsSAAAAAAAAAAAAAACweBHouZF0JOmtpNeB/ve5kXQl6VLSdc/GPQMYJJ231t517DlbVX2XdKZOQfQK4KS19q1Tr0dRVV8lfXH3eeluIGm7tjdfklprnyVt3X3cd8B2vJDVqqpPknau+s4AhtbaL2P9bqrqjUyfCc5H0Kmxdm/nrsKuO+DJ/PXvVdUrSbePXdd1B3ww1U06chQ9cBTV3SZrsnHt3dtGUs3Yl8y6pqlcAUze4To/4CYYJE19VFp27T32AX+TevPTvSUtI4BnjQDCCCCMAMKWEMAm/QskuZahc+wk/Zj5+ocMmr4RfD+jr0U8gNbaoaTDqa+vqgcDWNtXIEt4BD1rBBBGAGEEEEYAYQQQRgBhBBBGAGEEEEYAYQQQRgBhBBBGAGEEEEYAYQQQRgBhBBBGAGEEEEYAYQQQtsYAhn/82SK5/jPuxlRXujux2HTPgbnW2kdjX8s1uQK4MtXVeKYrMW/Cck2uR9CFqW7SpaOoK4Dbqvppqt3deIpzdSflj421eztzFXYGcD0Ouli1cWyN7TSlexm6Gy9glXrMDOo1sGl1Y2vcY2r2eo8sOzWv1f/buHg41hMbWfan/RmuJQ7tu5BhIgoAAAAAAAAAAAAAAAj4DdjXYkK7VEucAAAAAElFTkSuQmCC",I="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAAA9CAYAAADlNZQ2AAAABHNCSVQICAgIfAhkiAAAAk5JREFUeJztmjuSwyAMhmVPbsGB0uQUadKm8SlygjS5nc7hrch4PbwEEkjs/mWckeFDCEl4gYQQcU891yjn3CJlew39iIi7RVAAANfnTWzsv1bBKqCYuL3sa2w2UF6cwILbcCZxOsHCbVCrODxs/QuguLTkYN1fD/hsb9EjuVWlC946hywszZCOKgHWOpdkgLcCCqDPWKc/DTk1FSxp72qChYj79XnbfYkx+8maDPCxldJ8KNTMp1Rkzyrxnlk9jAzr/noU/W9GYGRYn+0tMQ4TEjsNSz2QW7G4xBFHyQGesr0sJbUlmirPkpYYrNm8CqAC1owQSlXlWR5YLIjPCrQqg9coPw/ff8upZm6mYXEkvpQ5mj0NuSoESgPgwvHCnpIqo7zdlKeJw+JMYnvUm4i4x8YhAktiUj0L8xgw9phlHVTqnWywpDqlLTadc0vLiX5+dzMs31putRNTbffiCKkW2Pnd1XkWtxe1djhy9jhsVXnWjF3QEpFg9bzB0bQgfixFsKQhhbbgqE5rSllYo1ZYY68/CWsUKE1b0AsRd7OF9AiZK6S9qLkTR9053LNqEkaJPluJzeGwqJJsSOZsm4MlGfxztofDqpn8qILdbICnfvbEAXi4Z1nSPyyCVMLSeAXnnFtWDQPTWN6EtALoXElNamr+9ZDGBfzCyn3sMUIagB3HcAk+2MBEDOmt4TfAADpuokM6j2u4m5eqN7DQApqBBTDe003BApAHlgoJ5mAByAHLxU6TsLy4oJWmKKZhedVCo+ZxU8A6KwavNcn9AX1dWCe4ga5kAAAAAElFTkSuQmCC",d="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAElBMVEUAAAAAAAAAAAAAAAAAAAAAAADgKxmiAAAABXRSTlMAUIAQz6lK3+MAAAC9SURBVHgBYhghYBQIKRIWMQkNdSYkwuAaGhpigCzADGCkjk4YAIEYDGMncIQulf1XKX0JMfBDXuX8FL3Lf+WtOZI3GpLuU/SRTBmSvl1kylAXHQVlSLcubsqQLx68KUN5fC/nFqAAKgqgohBKKiGkAmIqIKYCYiogphJiKiGmDDFliCmG9iI+br/4/gT8mPu37B/MrbI33d6+PAj7SO3DiWO+B8YePRxiUxyuwbpH9B72v+GuNghXQCMDjAIA0b6qzf9qWjYAAAAASUVORK5CYII=",y=(o,t)=>{let e;return(...A)=>{e&&clearTimeout(e),e=setTimeout(()=>{o(...A)},t)}},n=(o,t,...e)=>{const A=document.createElement(o);for(const i in t){if(typeof t=="string"){A.innerText=t;break}if(t instanceof HTMLElement){A.appendChild(t);break}if(Array.isArray(t[i])){const s=t[i];s[0]instanceof f&&(s[0].dom[s[1]]=A);continue}if(i==="style"){Object.assign(A.style,t[i]);continue}A[i]=t[i]}for(let i=0;i<e.length;i++){const s=e[i];s instanceof HTMLElement&&A.appendChild(s),typeof s=="string"&&(A.innerText=s)}return A},x=o=>document.querySelector(o);class f{constructor(){this.dom={}}setAs(t){return[this,t]}E(t){return this.dom[t]}}const S=()=>{const o=document.createElement("style");o.innerHTML=`
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
  /* min-height: 49vh; */
  min-width: 49vh;
  top: 30vh;
  background-color: hsl(0, 0%, 90%);
  padding: 1rem;
  border-radius: 16px;
  margin: auto;
  box-shadow: 0px 8px 430px rgba(128, 128, 128, 0.9);
}

/* .rabbit-tool-container .rabbit-modal.mobile {
  min-height: 60vh;
  min-width: 90vh;
} */

.rabbit-tool-container .rabbit-modal input {
  min-height: 26px;
  min-width: 90%;
  padding: 7px;
  border-radius: 12px;
  margin: 12px auto;
}

.rabbit-tool-container .rabbit-modal .btn {
  min-height: 18px;
  min-width: 60%;
  padding: 4px;
  border-radius: 18px;
  margin: 6px auto;
  background-color: white;
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
    transform: scale(0.6);
  }
  to {
    transform: scale(1);
  }
}

@keyframes rabbit-editor-md {
  0% {
    transform: scale(1.07);
    top: 30vh;
  }
  98% {
    transform: scale(0.7);
    top: 70vh;
  }
  100% {
    transform: scale(0);
  }
}

`,document.head.appendChild(o)},g=new f,k=o=>{o.installTool("Bold",{image:w,tooling({selectedElement:t}){o.showModal("text-setting",t)}}),o.installTool("BackgroundColor",{image:b,tooling({selectedElement:t,selection:e,range:A}){const i=document.createElement("input");i.type="color",i.addEventListener("change",s=>{const a=s.target.value;if(t&&e)if(e===t.innerText)(t==null?void 0:t.style.backgroundColor)===a?t.style.backgroundColor="unset":t.style.backgroundColor=a;else{const l=document.createElement("span");l.innerText=e,l.style.color=a,A.deleteContents(),A.insertNode(l)}}),i.click()}}),o.installTool("Image",{image:I,tooling({selectedElement:t}){const e=document.createElement("input");e.type="file",e.accept="image/*",e.click(),e.addEventListener("change",A=>{const i=A.target.files[0];if(i&&i.type.startsWith("image/")){const s=new FileReader;s.onload=a=>{const l=document.createElement("img");l.src=a.target.result,t?t==null||t.insertAdjacentElement("afterend",l):o._el.appendChild(l)},s.readAsDataURL(i)}})}}),o.installTool("Asset",{image:B,tooling(){o.showModal("assets")}}),o.installTool("Link",{image:C,tooling({selectedElement:t,selection:e,range:A}){o.showModal("link",{selectedElement:t,selection:e,range:A})}}),o.installAction("paste",t=>{var s,a;t.preventDefault();const e=t.clipboardData||window.clipboardData,A=e.getData("text/plain"),i=e.files[0];if(i&&i.type.startsWith("image/")){const l=new FileReader;l.onload=r=>{var h;const c=document.createElement("img");c.src=r.target.result,o.selectedElement?(h=o.selectedElement)==null||h.insertAdjacentElement("afterend",c):o._el.appendChild(c)},l.readAsDataURL(i)}if(A){const l=document.createElement("p");l.innerText=A.replace(/\n/g,""),o.selectedElement?(s=o.selectedElement)==null||s.insertAdjacentElement("afterend",l):o._el.appendChild(l)}(a=o._el)==null||a.focus()}),o.installAction("click",async t=>{const e=t.target;e.tagName==="IMG"&&o.showModal("image-tool",e)}),o.installModalTool("link",[({selection:t,range:e})=>{if(o.selection)return n("div",{className:"flex-y mw"},n("div",{className:"flex-x mw flex-cx"},n("span"),n("img",{style:{width:"24px"},src:d,onclick(){o.hideModal()}})),n("input",{placeholder:"input link here",id:"link-input"}),n("button",{className:"btn",onclick(){const A=x("#link-input").value;if(A){const i=document.createElement("a");i.href=A,i.textContent=t,e.deleteContents(),e.insertNode(i)}o.hideModal()}},"Done"))}]),o.installModalTool("assets",[()=>n("div",{className:"flex-y mw"},n("div",{className:"flex-x mw flex-cx"},n("span"),n("img",{style:{width:"24px"},src:d,onclick(){o.hideModal()}})),n("input",{placeholder:"input link here",id:"link-input"}),n("button",{className:"btn",onclick(){o.hideModal()}},"Done"))]),o.installModalTool("image-tool",[t=>{const e=t.style.width.slice(0,-2),A=t.style.height.slice(0,-2);return n("div",{className:"flex-y mw"},n("div",{className:"flex-x mw flex-cx"},n("span"),n("img",{style:{width:"17px"},src:d,onclick(){o.hideModal()}})),n("span","select width"),n("div",n("input",{type:"range",min:"100",max:"500",step:"50",value:e,onchange(){const i=this.value;g.E("wv-span").innerText=i+" px",t.style.width=i+"px"}}),n("span",{ref:g.setAs("wv-span")},e?e+"px":"300px")),n("span","select height"),n("div",n("input",{type:"range",min:"100",max:"500",step:"50",value:A,onchange(){const i=this.value;g.E("hv-span").innerText=i+" px",t.style.height=i+"px"}}),n("span",{ref:g.setAs("hv-span")},A?A+"px":"300px")),n("div",{className:""},n("img",{style:{width:"2.7rem"},src:m,onclick(){t.style.margin="0px",t.style.alignSelf="flex-start",o.hideModal()}}),n("img",{style:{width:"2.7rem"},src:u,onclick(){t.style.alignSelf="inset",t.style.margin="0px auto",o.hideModal()}}),n("img",{style:{width:"2.7rem"},src:p,onclick(){t.style.margin="0px",t.style.alignSelf="flex-end",o.hideModal()}})))}]),o.installModalTool("text-setting",[t=>(console.log(t),n("div",{className:"flex-y mw"},n("div",{className:"flex-x mw flex-cx"},n("span"),n("img",{style:{width:"17px"},src:d,onclick(){o.hideModal()}})),n("div",{className:"flex-y"},n("h3",{onclick(){t.style.fontWeight="bold"}},"Bold"),n("h3",{onclick(){t.style.fontSize="30px",t.style.fontStyle="bold"}},"Main Header"),n("h3",{onclick(){t.style.fontSize="22px",t.style.fontStyle="bold"}},"Small Header"),n("h3",{onclick(){t.style.fontSize="16px"}},"Normal"),n("h3",{onclick(){t.style.fontStyle="italic"}},"Italic"),n("h3",{onclick(){t.style.textDecoration="underline"}},"Underline"),n("h3",{onclick(){t.style.textDecoration="line-through"}},"Strike")),n("div",{className:"flex-fl"},n("img",{style:{width:"1.7rem"},src:m,onclick(){t.style.textAlign="start",o.hideModal()}}),n("img",{style:{width:"1.7rem"},src:u,onclick(){t.style.textAlign="center",o.hideModal()}}),n("img",{style:{width:"1.7rem"},src:p,onclick(){t.style.textAlign="end",o.hideModal()}}))))])},M="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAABHNCSVQICAgIfAhkiAAAAzBJREFUeJztnLGu0zAUQI8RW5EQS8TABlIHxrCj/gBj3sJa2MsnMNP98XYkuvULkBiRCivvD1D3zmZI0pemTuI4duI4OVPVtPXt6b2O7TiFmZmZgNkUHq8Hi8JXZAkuhXmBGKrhTMgFQojB4qlikIBUcnJ8k/So5/Y2dXKmzqbc56gYOsihWOvImaogbTlTFJS0kTM1Qa3lTEmQkZypCErgepQ8C0pZgbmc0AV1lhOyICtyfBRkY94TAwdbXy60uZhVOT7yuMN7XcrZA/+Ae+AP8As4OWinEdN0XgL3fWVOqeyWpOJ6waTEepUDV53/3+zpDbBw3XbbDOpdTh2FzIqAo4s22mSQV3LgIbNI5ThZ9NfNoAg4+iRHRZZRMXCw9Zk6GTQKOXBe6z5gMZuaTvOjkZOTxyqEeEPakXcaHtSV2OjklMlKrlMHXiVo9HJyukpSCVoApxDk5GSSFhiUW1lQcHJyTCUVz2LByoFz5/2t7fuKgrahysmRUr6j5RDgosRCFwTnUtOe8E5OELRblCuWWOIgFi/JEkFrL1LZ5EZK+cV+SP6hOz5SpdrUJNWimqxuhRCfHMTjK1HdwarZ/FYI8cFBMF6R9UWf617TlGJrKeVXeyH5R1Nf1LQedBd6JmVZ9L7quO54IOhMquusddek74QQN5bi8Y4si2LVsTaL9ruQJQHKrsTkwmEipfzeMRjvqCozkwuHQWZSVZmZbl7YCSFufNuJYYG35Se67O7YAUlgkq4E2fhyK+CH5f1B+TX3BfAMeAK8BF6QruV8dLE04/LHHmKHWUS2ZGGj3UL7ytO9DYbcoxgDe0uCnN6zNvQu19hC+7ddJTTRSZKlGIxLz1L7jRhLshiDUTZZbH8UAUaGMZwX0VzecXgA4oHHSUcgMojhdf7A9S2ZY5X0ylUwVWiXm8MYtMvNYQy1aEnyJIbzqb7Pu559KLcDehdIn7sOpI4lVP+KPcVw25BB+57iqEQpqcf2F6r2B4ijlitJ9PsHJ5WZXHyRD2s5CfAU+I3F/c26qDImsDWuTihLrfiCvv+7wzdOZPPGmQZK2XMeCsy19sCKdIrxkx7vR5sJnf/W7+jC2vw/EwAAAABJRU5ErkJggg==",N="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAABHNCSVQICAgIfAhkiAAAA9tJREFUeJztnDusDFEYgD+ikNxEIWzEX1CIldCwovJsEBKFgkg8qkWluCqvxqtzC5VQSYRQSmjdhBI9oRF/I0IkhI5iz67ZvTOz8zjnzJnZ/ZJNZmdnzvnvt/+ZmfPYC1OmTJlAusA785qtOJbgmFXVv9EXcL2qYBZXVXEKF0Z3qOolKpK0qIpK0zAZE4uI3AAuewwnyAxKxGSS12tSrQQBqOotPEqqnSAYSOr6qKuWggBU9S4eJNVWEAwkHXFZR60FAajqYxxKqr0gcCupEYIM93EgqTGCVHUpPUl7bJbbGEEwkPQci5IaJQjsS2qcIBiS1ClbViMFwUDSK0pKqrI3PwNsAzYDbWAVsEFV19usRES+AvuBN0XO9y2oDZwA9gGbzLfsHCNpO70Rylz4EDQDnAGOqepWD/XFUlSSS0Et4BxwRlVXOKwnM0UkuRLUBW6GIiZKXkm2BXWAO1U2pSyIyHtgB/Bl3LE2b/Nd4FXocgDMnfIlvctAKjYyaAaYU9XTFsrySpZMKiuoBTyrQ9YkMU5SGUEt4KXtB7sqEJHXwEFiJBUVNAPM1zlzRjGSdgO/ovuLCGqcnD5xkorcxR42UQ6A+bvm6SUBkF9QV1UP2QwqNIykuf77PILawG3rEYXJ4f5GHkEPfPW+A+BbfyOroNmmXncSuNLfyCKoRcyanaYiIueBJ/33WQSdC7FX7gIjZy66b5ygFnDeWUQBEScHYMmY865NwoVZRE4D9+I+S8ugFnDSSUQBkSYH0gUdb3r2jJMD6YKO2Q0nLLLIgeTOakdVX9sNKRxE5CiRW3kaSRlUu9HBrOSRA8mCDifsrzV55UC8oE4THwyLyIH456Bd5cMJBxH5A5yigByIz6DGCCorB+IzaG/hiFIwswfz9GY0PwMfgZ/Ad/4Pcf5K+61Gzvr+AAeAF2XKGRXUsflwaMZ4HwEPyDCLabFeK3JgoSArzUtEngJXKbgmp2Td1uTAQkHtMoWZjDlLBWJM/VblwEJBW4oUYgK7RMxwgS9cyIGFgtbmLaDsEjcbuJIDw4JaeR8Q06ZsfWHkbMfRFxR9DtqY58RA5PQXQznL3qigdVlPCkiO86YdFbQmywkmsImQA8OCVo472LT3/UyIHBgWtCrD8aeo9m7l/Y45blZjgIjcpUSnryxlFoOXIZpBq5MOMh1NLz/FNiLi9nmXA8OClsUdYK47hxhZeeWQiyP1v6ciOTDcxJYnHHMLv8HdE5G39Lo9P6iwWcPwrMbv0aEO8+1twV/2BEe0iX2K+fwsEyxnlCP0sqjy/9kTEqMTh21gJ/ABBz3jKVMmj39oLj/tWfnkbQAAAABJRU5ErkJggg==";class v{constructor({STACK_SIZE:t,STACKING_TIME:e}={}){this._undoStack=[],this._redoStack=[],this._STACK_SIZE=1e3,this._STACKING_TIME=200,this._toolsList={},this._modalList={},this._syntheticActionList={},this.selection=null,this.selectedElement=null,this.range=null,this._actionList={input:[],paste:[],copy:[],click:[],contextmenu:[],"document-selectionchange":[]},t&&(this._STACK_SIZE=t),e&&(this._STACKING_TIME=e)}installOn(t="pub"){const e=document.getElementById(t);window.outerWidth<601?e.className="rabbit-editor-container mobile":e.className="rabbit-editor-container",S(),e.contentEditable="true",this._el=e,this._createDefaultTools(),this._createDefaultActions(),this._installTools(),this._ActivateActions(),this._el.focus()}installTool(t,e){//! checking type
this._toolsList[t]=e}installAction(t,e){//! checking type
this._actionList[t]?this._actionList[t].push(e):this._actionList[t]=[e]}installModalTool(t,e){this._modalList[t]=e}showModal(t,e=null){if(Array.isArray(this._modalList[t])){this._Mel.innerHTML="";const A=this._modalList[t][0](e);A&&(this._Mel.appendChild(A),this._Mel.classList.remove("in-active"),this._Mel.classList.add("active"))}}navigateModal(t,e,A){if(Array.isArray(this._modalList)){this._Mel.innerHTML="";const i=this._modalList[e][t](A);i&&(this._Mel.appendChild(i),this._Mel.classList.remove("in-active"),this._Mel.classList.add("active"))}}hideModal(){this._Mel.classList.remove("active"),this._Mel.classList.add("in-active")}fireSyntheticAction(t){var e;(e=this._syntheticActionList[t])==null||e.call()}_createDefaultActions(){const t=async()=>{const i=window.getSelection();if(i.rangeCount>0){const s=i.getRangeAt(0),a=s.startContainer,l=a.parentNode;if(l.nodeName!=="P"){const r=document.createElement("p");r.textContent=a.textContent||"",l.id!=="pub"&&a.id!=="pub"&&(l.insertAdjacentElement("afterend",r),l.remove(),s.deleteContents(),s.insertNode(r),i.removeRange(s))}else a.nodeName==="IMG"&&(l.removeChild(a),l.insertAdjacentElement("afterend",a),console.log(a,l))}this._el.focus()},e=async()=>{var s,a;const i=window.getSelection();if(i.rangeCount>0){const l=i.getRangeAt(0),r=l.startContainer,c=r.textContent||"";c&&((s=r.parentNode)==null?void 0:s.nodeName)==="P"&&(this.selection=l.toString(),this.selectedElement=r.parentNode,this.range=l),c&&((a=r.parentNode)==null?void 0:a.nodeName)==="SPAN"&&r.parentNode}},A=y(()=>{this._saveState()},this._STACKING_TIME);this._actionList.input.push(A,t),this._actionList["document-selectionchange"].push(e)}_createDefaultTools(){const t=this;this._toolsList.redo={image:M,tooling(){t._redo()}},this._toolsList.undo={image:N,tooling(){t._undo(),t._undoStack.length>t._STACK_SIZE&&(t._undoStack.length=t._STACK_SIZE)}}}_installTools(){var A;const t=document.createElement("div"),e=document.createElement("div");window.outerWidth<601?(t.className="rabbit-tool-container mobile",e.className="rabbit-modal mobile"):(t.className="rabbit-tool-container",e.className="rabbit-modal");for(const i in this._toolsList){let s=null;this._toolsList[i].image&&(s=n("img",{src:this._toolsList[i].image,className:"rabbit-tool"})),this._toolsList[i].text&&(s=n("button",{className:"rabbit-tool"},this._toolsList[i].text)),this._toolsList[i].html&&(this._toolsList[i].html.className="rabbit-tool",s=this._toolsList[i].html),s.addEventListener("click",()=>this._apply(i)),s.title=i,t.appendChild(s)}t.appendChild(e),this._Mel=e,(A=this._el.parentElement)==null||A.appendChild(t)}async _apply(t){const e=this._toolsList[t].tooling;e({selectedElement:this.selectedElement,selection:this.selection,range:this.range}),this._el.focus()}_saveState(){const t=this._el.innerHTML;t!==this._undoStack.at(-1)&&(this._undoStack.push(t),this._redoStack=[])}_undo(){if(this._undoStack.length>0){const t=this._el.innerHTML;this._redoStack.push(t);const e=this._undoStack.pop();e&&(this._el.innerHTML=e)}}_redo(){if(this._redoStack.length>0){const t=this._el.innerHTML;this._undoStack.push(t);const e=this._redoStack.pop();e&&(this._el.innerHTML=e)}}_ActivateActions(){for(const[t,e]of Object.entries(this._actionList))for(let A=0;A<e.length;A++)t.includes("document-")?document.addEventListener(t.split("document-")[1],e[A]):t.includes("synthetic-")?this._syntheticActionList[t]=e[0]:this._el.addEventListener(t,e[A])}}const E=new v;k(E);E.installOn("pub");
