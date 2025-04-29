import { Application } from "pixi.js";


(async()=> {

    const app = new Application({
        width: window.innerWidth,
        height: window.innerHeight,    
    })

    await app.init();

    document.body.appendChild(app.canvas);

})();