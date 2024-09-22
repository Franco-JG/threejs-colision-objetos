import { AmbientLight, DirectionalLight } from "three"
//Lights
export const ambientLight = new AmbientLight(0xffffff, 0.5)
const size = 1024
export const directionalLight = new DirectionalLight('#ffffff',2)
directionalLight.castShadow = true
directionalLight.shadow.mapSize.set(size,size)
directionalLight.shadow.normalBias = 0.01
directionalLight.position.set(0.25, 10, 1.25)
directionalLight.target.position.set(0,0,0)

const setShadowCamera = (light: DirectionalLight, size: number, near: number, far: number) => {
    light.shadow.camera.left = -size;
    light.shadow.camera.right = size;
    light.shadow.camera.top = size;
    light.shadow.camera.bottom = -size;
    light.shadow.camera.near = near;
    light.shadow.camera.far = far;
  };
  
  // Uso de la función
  setShadowCamera(directionalLight, 10, 0.5, 20);