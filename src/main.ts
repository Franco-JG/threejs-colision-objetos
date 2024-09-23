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
scene.add(new THREE.DirectionalLightHelper(directionalLight, 1))

const plane = new THREE.Mesh(
  new THREE.PlaneGeometry(20,20,10,10),
  new THREE.MeshToonMaterial({
    color: 0x8a8a8a,
    side: THREE.DoubleSide
  })
);
plane.rotateX(Math.PI/180 * 90)
plane.receiveShadow = true
scene.add(plane);

const sphere = new THREE.Mesh(
  new THREE.SphereGeometry(1.5, 32, 32),
  new THREE.MeshToonMaterial({
    color: 0x4b45ff,
    // wireframe: true
  }),
);
sphere.position.set(-3,2,0)
sphere.castShadow = true
scene.add(sphere)

const cube = new THREE.Mesh(
  new THREE.BoxGeometry(2,2,2,4,4,4),
  new THREE.MeshToonMaterial({
    color: 0xfc3a41,
    // wireframe: true
  })
)
cube.position.set(6,2,0)
cube.rotateY(Math.PI/180 * 90)
cube.castShadow = true
scene.add(cube)

const line = new THREE.Line(
  new THREE.BufferGeometry().setFromPoints([cube.position, sphere.position]),
  new THREE.LineBasicMaterial({
    color: 0x00ff00,
  })
)
scene.add(line)

scene.add(camera);
updateRenderer();

// Función para generar trayectorias elípticas
let time = 0;
let velocidadAnimacion = 0.03
const a1 = 7, b1 = 5;  // Radios de la elipse para la esfera
const a2 = -3, b2 = 7;  // Radios de la elipse para el cubo

const animate = () => {
  renderer.render(scene, camera)
  requestAnimationFrame(animate)
  
  time = (time + velocidadAnimacion) % (2 * Math.PI);

  // Trayectoria elíptica para la esfera (en el plano XZ)
  sphere.position.x = a1 * Math.cos(time);
  sphere.position.z = b1 * Math.sin(time);

  // Trayectoria elíptica para el cubo (en el plano XZ con diferentes radios)
  cube.position.x = a2 * Math.cos(time);
  cube.position.z = b2 * Math.sin(time);

  // Actualiza la línea
  line.geometry.setFromPoints([cube.position, sphere.position]);
}

animate()