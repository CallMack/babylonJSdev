import { Engine} from "@babylonjs/core";
import createStartScene from "./createStartScene.ts";
import createRunScene from "./createRunScene.ts";
import createGUIScene from "./createGUI.ts";
import "./main.css";
import { SceneData } from "./interfaces";

const CanvasName = "renderCanvas";

let canvas = document.createElement("canvas");
canvas.id = CanvasName;

canvas.classList.add("background-canvas");
document.body.appendChild(canvas);

let eng = new Engine(canvas, true, {}, true);
let startScene:SceneData = createStartScene(eng);
createGUIScene(startScene);
createRunScene(startScene);

eng.runRenderLoop(() => {
  startScene.scene.render();
});