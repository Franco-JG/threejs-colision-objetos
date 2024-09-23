import { Mesh } from "three"

//TODO Arreglar tipos
export function isCollition(cube : any, sphere: any) : boolean {

    const depth = cube.geometry.parameters.depth            
    const cubeRatioEfective = Math.sqrt(depth*2 + depth*2)/2    //1.12
    const sphereRatio = sphere.geometry.parameters.radius
    const distance = cube.position.distanceTo(sphere.position)

    return distance < (cubeRatioEfective+sphereRatio)
}