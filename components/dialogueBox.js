import { Graphics, Text, Container } from "pixi.js";

export function createDialogueUI(script, onEnd) {
    const container = new Container();


    const dialogueBox = new Graphics();
    const boxX = 0, boxY = 675, boxWidth = window.innerWidth, boxHeight = 150;

    dialogueBox.rect(0, 0, boxWidth, boxHeight).fill({ color: 0xfffff, alpha: 0.7 });

    
    const dialogueText = new Text( {
        fontFamily: 'Arial',
        fontSize: 24,
        fill: 0xffffff,
        wordWrap: true,
        wordWrapWidth: boxWidth - 20,
    });
    dialogueText.x = 10;
    dialogueText.y = 10;

  
    container.x = boxX;
    container.y = boxY;
    container.addChild(dialogueBox);
    container.addChild(dialogueText);

    let currentLine = 0;

    function handleDialogue() {
        if (currentLine < script.length) {
            dialogueText.text = script[currentLine];
            currentLine++;
        } else if (onEnd) {
            onEnd();
        }
    }

    return {
        container,      
        hand,
    };
}

