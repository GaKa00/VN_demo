import { Application, Assets, Sprite } from "pixi.js";
import { createDialogueUI } from "./components/dialogueBox.js";
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
   

    
    const script = [
        "Welcome to the world of Pixi Visual Novels.",
        "This is your first line of dialogue.",
        "Try clicking to continue."
    ];

    const { container, showNextLine } = createDialogueUI(script);
    app.stage.addChild(container);
    app.canvas.addEventListener('pointerdown', showNextLine);
  
    app.stage.addChild(MC_Sprite);
    showNextLine();
    
})();
