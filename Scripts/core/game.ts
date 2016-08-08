/// <reference path="_reference.ts"/>

module core {
    let canvas:HTMLElement;
    let stage:createjs.Stage;
    let helloLabel: objects.Label;
    let startButton: objects.Button;
    let assets:createjs.LoadQueue;

    let assetManifest = [
        {id: "startButton", src: "../../Assets/images/startButton.png"},
        {id: "exitButton", src: "../../Assets/images/exitButton.png"},
        {id: "restartButton", src: "../../Assets/images/restartButton.png"},
        {id: "nextButton", src: "../../Assets/images/nextButton.png"}
    ]

    function preload():void {
        assets = new createjs.LoadQueue();
        assets.loadManifest(assetManifest);
        assets.on("complete", init)
    }

    function init():void {
        canvas = document.getElementById("canvas");
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", gameLoop);
        main();
    }

    function gameLoop():void {
        stage.update(); // refreshes the stage
    }

    function main():void {
        console.log("Game Running");

        // label
        helloLabel = new objects.Label("Hello World!","40px Consolas","#000000",
        320, 240, true);
        stage.addChild(helloLabel); 

        //Button
        startButton = new objects.Button(assets.getResult("startButton"),
        320, 340, true);
        stage.addChild(startButton);

        startButton.on("click", startButtonClick, this);
    }

    function startButtonClick(event:createjs.MouseEvent) {
        helloLabel.text = "Good Bye";
    }

    window.addEventListener("load", preload);
}