# Element 5 Documentation

## Page 1 

this page has 3 meshes in it which are a sphere, box and ground with a Hemispheric light

This code here makes use of the HemisphericLight feature 

- the light diffuse is the RGB value that hits the object. for this scene i set the value to 1 on the right part which = blue meaning a blue light will hit the objects
- the light specular is the highlight, i set the Green value to 1
- ground colour is the shadow, i set mine to have 1 on green too


```js
 function createLight(scene: Scene){
 const light = new HemisphericLight("light", new Vector3(1, 1, 0),scene);
 light.intensity = 0.7;
 light.diffuse = new Color3(0, 0, 1);
 light.specular = new Color3(0, 1, 0);
 light.groundColor = new Color3(0, 1, 0);
 return light;
 }
```

## Page 2 

On this page i added meshes with textures on them
each of the mesh have their own material on them. they get this material from a assests folder that is in the main folder.
```js
function createOctahedron(scene: Scene) {
  let octahedron = MeshBuilder.CreatePolyhedron(
    "oct",
    { type: 1, size: 0.35 },
    scene
  );
  octahedron.position.x = 0;
  octahedron.position.y = 2.5;
  octahedron.position.z = 0;

  var texture = new StandardMaterial("reflective", scene);
  texture.ambientTexture = new Texture("./assets/reflectivity.jpg", scene);
  texture.diffuseColor = new Color3(1, 1, 1);
  octahedron.material = texture;
  return octahedron;
}

function createPlane(scene: Scene) {
  let plane = MeshBuilder.CreatePlane(
    "plane",
    { size: 3, sideOrientation: Mesh.DOUBLESIDE },
    scene
  );
  plane.position.y = 0;

  var texture = new StandardMaterial("reflective", scene);
  texture.ambientTexture = new Texture("./assets/wood.jpg", scene);
  texture.diffuseColor = new Color3(1, 1, 1);
  plane.material = texture;
  return plane;
}


```

## Page 3

this page is similar to Page 1 with a few differences which include the box being larger and the light intencity being lower

i set the box size to 3.45 and moved it's position y to 4 
for the light i changed the intensity to 0.2 meaning the light will be dimmer
```js
 function createBox(scene: Scene){
 let box = MeshBuilder.CreateBox("box",{size: 3.45}, scene);
 box.position.y = 4;
 return box;
}

function createLight(scene: Scene){
 const light = new HemisphericLight("light", new Vector3(1, 1, 0),scene);
 light.intensity = 0.2;
 light.diffuse = new Color3(0, 1, 0);
 light.specular = new Color3(1, 1, 0);
 light.groundColor = new Color3(0, 1, 2);
 return light;
}
```

## Page 4 

In this page i added some shapes in different positions and added lights and textures

i added a cone that has the reflectivity texture on it and i set the height of it to be 3
the tube also has the same texture on it and set its Vector 3 to be tilted. the Vector 3's are the values used to position the object.
The First Vector 3 is the XYZ position and the second is the rotation

```js
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

```
