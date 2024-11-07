import {  } from "@babylonjs/core";

import { SceneData } from "/workspaces/babylonJSdev/babylonProj/shapes01/src/interfaces.d";


export default function createRunScene(runScene: SceneData) {
  runScene.scene.onAfterRenderObservable.add(() => {
  // No action, this is a static scene
  });
}

