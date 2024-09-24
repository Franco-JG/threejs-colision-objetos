import { Mesh, BoxGeometry, SphereGeometry } from "three"

export function isCollition(cube : Mesh, sphere: Mesh) : boolean {

    let cubeRatioEfective: number = 0
    let sphereRatio: number = 0;
    const distance = cube.position.distanceTo(sphere.position)

    if(cube.geometry instanceof BoxGeometry){
        const depth: number = cube.geometry.parameters.depth            
        cubeRatioEfective = Math.sqrt(depth*2 + depth*2)/2    //1.12
    }
    if(sphere.geometry instanceof SphereGeometry){
        sphereRatio = sphere.geometry.parameters.radius
    }
    return distance < (cubeRatioEfective+sphereRatio)
}