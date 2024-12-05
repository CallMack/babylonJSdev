import { Engine} from "@babylonjs/core";
import createStartScene from "/workspaces/babylonProj/babylonProj/collisions03v2/src/createStartScene";
import createRunScene from "/workspaces/babylonProj/babylonProj/collisions03v2/src/createRunScene";
import "./main.css";


const CanvasName = "renderCanvas";

let canvas = document.createElement("canvas");
canvas.id = CanvasName;

canvas.classList.add("background-canvas");
document.body.appendChild(canvas);

let eng = new Engine(canvas, true, {}, true);
let startScene = createStartScene(eng);
createRunScene(startScene);

eng.runRenderLoop(() => {
  startScene.scene.render();
});

