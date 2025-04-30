import { Application , Graphics, Text, Assets, Sprite} from "pixi.js";

import { initDevtools } from "@pixi/devtools";


(async()=> {

    const app = new Application()

    await app.init({
        resizeTo:window,
       
    });

    const TextBox = new Graphics()
    .rect(675, 260, 50, 150)
    .fill({0xffea00 : 0.5})
    .stroke({color: 0x00ff00, width: 2});

    const Title = new Text({
        text: "Visual Novel",
        style: {
            fontSize: 36,
            fill: 0xffffff,
            align: "center",
        },
    });


    initDevtools({app});
    const texture = await Assets.load('/public/MC.jpg');
    const sprite = new Sprite(texture);

    TextBox.eventMode = "static";
    TextBox.on("click", () => {
        TextBox.fill({0xff0000 : 0.5})
        .stroke({color: 0x0000ff, width: 2});
    });

    
    
    app.canvas.style.position = "absolute";
    app.stage.addChild(sprite);
    app.stage.addChild(Title);
    app.stage.addChild(TextBox);
    

    document.body.appendChild(app.canvas);

})();