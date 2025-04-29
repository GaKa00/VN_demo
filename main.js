import { Application , Graphics, Text} from "pixi.js";


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
    

    app.canvas.style.position = "absolute";
    app.stage.addChild(Title);
    app.stage.addChild(TextBox);
    

    document.body.appendChild(app.canvas);

})();