const __vite__fileDeps=["assets/Linker-CjkwSbPk.js","assets/Ranges-DyP7-n_6.js","assets/index-WxCQ1KFR.js","assets/index-CQ2xJhhw.css","assets/index-BM1Br4mr.js","assets/OptionsColor-CgzHQ14L.js","assets/ParticlesInteractorBase-vfDeBun3.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as i}from"./index-WxCQ1KFR.js";async function o(t,r=!0){await t.addInteractor("particlesLinks",async a=>{const{Linker:n}=await i(()=>import("./Linker-CjkwSbPk.js"),__vite__mapDeps([0,1,2,3,4,5,6]));return new n(a)},r)}export{o as loadLinksInteraction};