// import "@babylonjs/core/Debug/debugLayer";
// import "@babylonjs/inspector";
import {
    Scene,
    ArcRotateCamera,
    Vector3,
    HemisphericLight,
    MeshBuilder,
    Mesh,
    Light,
    Camera,
    Engine,
    Texture,
    StandardMaterial,
    Color3
  } from "@babylonjs/core";
  
  
  function createTube(scene: Scene) {
    const myPath = [
      new Vector3(2, 0.85, 0.85),
      new Vector3(1.35, 3, 0.35),
    ];
  
    const tube = MeshBuilder.CreateTube(
      "tube",
      { path: myPath, radius: 0.4, sideOrientation: Mesh.DOUBLESIDE },
      scene
    );
  
    var texture = new StandardMaterial("reflective", scene);
    texture.ambientTexture = new Texture("./assets/reflectivity.png", scene);
    texture.diffuseColor = new Color3(1, 1, 1);
    tube.material = texture;
    return tube;
  }

  
  function createLight(scene: Scene) {
    const light = new HemisphericLight("light", new Vector3(1, 1, 0),scene);
    light.intensity = 0.7;
    light.diffuse = new Color3(1, 0, 0);
    light.specular = new Color3(0, 1, 0);
    light.groundColor = new Color3(0, 1, 1);
return light;
  }
  
  function createSphere(scene: Scene) {
    let sphere = MeshBuilder.CreateSphere(
      "sphere",
      { diameter: 3, segments: 32 },
      scene,
    );
    sphere.position.y = 4;
    return sphere;
  }
  function createCone(scene: Scene) {
    let cone = MeshBuilder.CreateCylinder(
      "cone",
      { height: 3, diameterBottom: 0.7, diameterTop: 0 },
      scene
    );
    cone.position.x = 2;
    cone.position.y = 1;
    cone.position.z = -1;
  
    var texture = new StandardMaterial("reflective", scene);
    texture.ambientTexture = new Texture("./assets/reflectivity.png", scene);
    texture.diffuseColor = new Color3(1, 1, 1);
    cone.material = texture;
    return cone;
  }
  
  function createGround(scene: Scene) {
    let ground = MeshBuilder.CreateGround(
      "ground",
      { width: 6, height: 6 },
      scene,
    );
    return ground;
  }
  
  function createArcRotateCamera(scene: Scene) {
    let camAlpha = -Math.PI / 2,
      camBeta = Math.PI / 2.5,
      camDist = 10,
      camTarget = new Vector3(0, 0, 0);
    let camera = new ArcRotateCamera(
      "camera1",
      camAlpha,
      camBeta,
      camDist,
      camTarget,
      scene,
    );
    camera.attachControl(true);
    return camera;
  }
  
  export default function createStartScene(engine: Engine) {
    interface SceneData {
      scene: Scene;
      tube?: Mesh;
      light?: Light;
      sphere?: Mesh;
      ground?: Mesh;
      camera?: Camera;
      cone?: Mesh;
    }
  
    let that: SceneData = { scene: new Scene(engine) };
    // that.scene.debugLayer.show();
  
    that.tube = createTube(that.scene);
    that.light = createLight(that.scene);
    that.sphere = createSphere(that.scene);
    that.ground = createGround(that.scene);
    that.camera = createArcRotateCamera(that.scene);
    that.cone = createCone(that.scene);
    return that;
  }