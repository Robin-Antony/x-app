const __vite__fileDeps=["assets/OutOfCanvasUpdater-B-jA6IT-.js","assets/index-CoW6VJUp.js","assets/index-CQ2xJhhw.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as o}from"./index-CoW6VJUp.js";async function i(t,a=!0){await t.addParticleUpdater("outModes",async e=>{const{OutOfCanvasUpdater:r}=await o(()=>import("./OutOfCanvasUpdater-B-jA6IT-.js"),__vite__mapDeps([0,1,2]));return new r(e)},a)}export{i as loadOutModesUpdater};
