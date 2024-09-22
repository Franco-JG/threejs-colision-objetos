import * as THREE from 'three'
import './core/orbit-controls.ts'
import './style.css'
import { camera } from './core/camera.ts';
import { renderer, updateRenderer } from './core/renderer.ts'
import { ambientLight, directionalLight } from './core/lights.ts';

//Scene
const scene = new THREE.Scene()
scene.add(ambientLight)
scene.add(directionalLight)

const sphere = new THREE.Mesh(
  new THREE.SphereGeometry(1, 32, 32),
  new THREE.MeshToonMaterial({
    color: new THREE.Color('#e04358'),
  }),
);
sphere.position.set(0,2,0)
sphere.castShadow = true

scene.add(sphere)

const plane = new THREE.Mesh(
  new THREE.PlaneGeometry(10,10,10,10),
  new THREE.MeshToonMaterial({
    color: '#444',
    side: THREE.DoubleSide
  })
);
plane.rotateX(Math.PI/180 * 90)
plane.receiveShadow = true

scene.add(plane);
scene.add(camera);
updateRenderer();

const animate = () => {
  renderer.render(scene, camera)
  requestAnimationFrame(animate)
}

animate()