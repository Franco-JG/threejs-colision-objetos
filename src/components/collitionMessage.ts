import { MeshToonMaterial } from "three";
import { isCollition } from "../utils.ts";
import { cube, sphere } from "../main.ts";

export const collitionComponent = () => {
    const div = <HTMLDivElement> document.querySelector('#app')

    if(isCollition(cube,sphere)){
        div.style.display = 'block';
        (cube.material as MeshToonMaterial).color.set(0x00ff00);
        (sphere.material as MeshToonMaterial).color.set(0x00ff00);
    }else{
        div.style.display = 'none';
        (cube.material as MeshToonMaterial).color.set(0xfc3a41);
        (sphere.material as MeshToonMaterial).color.set(0x4b45ff);
    }
}