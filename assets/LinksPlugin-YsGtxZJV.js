const __vite__fileDeps=["assets/LinkInstance-CeKbvl3x.js","assets/index-CoW6VJUp.js","assets/index-CQ2xJhhw.css","assets/CanvasUtils-Chp21Hft.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as i}from"./index-CoW6VJUp.js";class s{constructor(){this.id="links"}async getPlugin(n){const{LinkInstance:t}=await i(()=>import("./LinkInstance-CeKbvl3x.js"),__vite__mapDeps([0,1,2,3]));return new t(n)}loadOptions(){}needsPlugin(){return!0}}export{s as LinksPlugin};