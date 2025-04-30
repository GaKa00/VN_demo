import { Assets, Sprite } from "pixi.js";
export async  function  createBackground (app){ 
    const texture = await Assets.load('/public/backgrounds/MessyRoom.jpg');
    const background = new Sprite(texture);

    background.width = app.screen.width;
    background.height = app.screen.height;
   

  return background;
}
