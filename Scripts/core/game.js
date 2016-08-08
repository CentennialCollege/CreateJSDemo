/// <reference path="_reference.ts"/>
var core;
(function (core) {
    var canvas;
    var stage;
    var helloLabel;
    var startButton;
    var assets;
    var assetManifest = [
        { id: "startButton", src: "../../Assets/images/startButton.png" },
        { id: "exitButton", src: "../../Assets/images/exitButton.png" },
        { id: "restartButton", src: "../../Assets/images/restartButton.png" },
        { id: "nextButton", src: "../../Assets/images/nextButton.png" }
    ];
    function preload() {
        assets = new createjs.LoadQueue();
        assets.loadManifest(assetManifest);
        assets.on("complete", init);
    }
    function init() {
        canvas = document.getElementById("canvas");
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", gameLoop);
        main();
    }
    function gameLoop() {
        stage.update(); // refreshes the stage
    }
    function main() {
        console.log("Game Running");
        // label
        helloLabel = new objects.Label("Hello World!", "40px Consolas", "#000000", 320, 240, true);
        stage.addChild(helloLabel);
        //Button
        startButton = new objects.Button(assets.getResult("startButton"), 320, 340, true);
        stage.addChild(startButton);
        startButton.on("click", startButtonClick, this);
    }
    function startButtonClick(event) {
        helloLabel.text = "Good Bye";
    }
    window.addEventListener("load", preload);
})(core || (core = {}));
//# sourceMappingURL=game.js.map