import { Application, Assets, Sprite } from "pixi.js";

import { createBackground } from "./components/handleBackground.js";

(async () => {
    const app = new Application();
    await app.init( {resizeTo: window});
    let background = await createBackground(app);
     app.stage.addChild(background);

    document.body.appendChild(app.canvas);

   
    const MC_Asset = await Assets.load("/public/MC.jpg");
    const MC_Sprite = new Sprite(MC_Asset);
    MC_Sprite.x = 100; 
    MC_Sprite.y = 50;
   

    
const loadDialogueScript = async (act, character) => {
    const response = await fetch(`/data/${act}/${character}.json`);
    const data = await response.json();
    return data.script;
};




    const { container, handleDialogue } = createDialogueUI(script);
    app.stage.addChild(MC_Sprite);
    app.stage.addChild(container);
    app.canvas.addEventListener('pointerdown', handleDialogue);
  
    handleDialogue();
    
})();
