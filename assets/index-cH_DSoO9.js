const __vite__fileDeps=["assets/ParallaxMover-beNdfaHx.js","assets/index-WxCQ1KFR.js","assets/index-CQ2xJhhw.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as t}from"./index-WxCQ1KFR.js";async function l(a,r=!0){await a.addMover("parallax",async()=>{const{ParallaxMover:o}=await t(()=>import("./ParallaxMover-beNdfaHx.js"),__vite__mapDeps([0,1,2]));return new o},r)}export{l as loadParallaxMover};