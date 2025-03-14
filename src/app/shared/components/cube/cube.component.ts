import { Component, OnInit, ElementRef, ViewChild, Input} from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-cube',
  standalone: true,
  templateUrl: './cube.component.html',
  styleUrl: './cube.component.scss'
})
export class CubeComponent implements OnInit {
  @ViewChild('rendererContainer', { static: true }) rendererContainer!: ElementRef;
  @Input() images: string[] = [];
  @Input() hoverLightColor: string = '#ff0000';

  scene!: THREE.Scene;
  camera!: THREE.PerspectiveCamera;
  renderer!: THREE.WebGLRenderer;
  cube!: THREE.Mesh;
  ambientLight!: THREE.AmbientLight;
  pointLight!: THREE.SpotLight;
  isHovered = false; 
  sharedRenderer = new THREE.WebGLRenderer();

  ngOnInit(): void {
    if (this.images.length === 6) {
      this.initThreeJS();
    } else {
      console.error('CubeComponent requires exactly 6 images');
    }
  }

  initThreeJS(): void {
    this.scene = new THREE.Scene();
    this.addCamera();
    this.addRenderer();
    this.addCube();
    this.addLight();
    this.renderer.domElement.addEventListener('mouseenter', this.onMouseEnter.bind(this));
    this.renderer.domElement.addEventListener('mouseleave', this.onMouseLeave.bind(this));
    this.animate();
  }

  addCamera(){
    this.camera = new THREE.PerspectiveCamera(50, 1, 1, 500);
    this.camera.position.set(0, 40, 120);
    this.camera.lookAt(0, 50, 0);
  }

  addRenderer(){
    this.renderer = this.sharedRenderer;
    this.renderer.setSize(80, 80);
    this.renderer.setClearColor('#000000', 0);
    this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);
  }

  addMaterials(){
    const materials = this.images.map(imgUrl => {
      const texture = new THREE.TextureLoader().load(imgUrl);
      texture.colorSpace = THREE.SRGBColorSpace;
      return new THREE.MeshPhysicalMaterial({ map: texture });
    });
    return materials;
  }

  addCube(){
    const geometry = new THREE.BoxGeometry(50, 50, 50);
    this.cube = new THREE.Mesh(geometry, this.addMaterials());
    this.cube.rotation.set(Math.PI / 4 * Math.random(), Math.PI / 4 * Math.random(), 0);
    this.cube.position.y = 70;
    this.scene.add(this.cube);
  }

  addLight(){
    this.ambientLight = new THREE.AmbientLight(0xffffff, 2);
    this.scene.add(this.ambientLight);
  }

  animate(): void {
    requestAnimationFrame(() => this.animate());
      this.cube.rotation.z += 0.005;
      this.cube.rotation.y += 0.005;
    this.renderer.render(this.scene, this.camera);
  }

  onMouseEnter(): void {
    this.isHovered = true;
    this.ambientLight.intensity = 6;
  }

  onMouseLeave(): void {
    this.isHovered = false;
    this.ambientLight.intensity = 2;
  }

  ngOnDestroy(): void {
    this.disposeCube();
    this.disposeRenderer();
    this.disposeScene();
  }

  disposeScene(){
    this.scene.remove(this.ambientLight);
    this.scene.clear();
    const gl = this.renderer.getContext();
    if (gl) {
      gl.getExtension('WEBGL_lose_context')?.loseContext();
    }
  }

  disposeRenderer(){
    this.renderer.domElement.removeEventListener('mouseenter', this.onMouseEnter.bind(this));
    this.renderer.domElement.removeEventListener('mouseleave', this.onMouseLeave.bind(this));
    this.renderer.dispose();
    if (this.renderer.domElement.parentNode) {
      this.renderer.domElement.parentNode.removeChild(this.renderer.domElement);
    }
  }
  
  disposeCube(){
    if (this.cube) {
      this.scene.remove(this.cube);
      this.cube.geometry.dispose();
      if (Array.isArray(this.cube.material)) {
        this.cube.material.forEach(material => {
          const mat = material as THREE.MeshStandardMaterial;
          if (mat.map) { mat.map.dispose() }
          mat.dispose();
        });
      } else {
        const mat = this.cube.material as THREE.MeshStandardMaterial;
        if (mat.map) { mat.map.dispose(); }
        mat.dispose();
      }
    }
  }
  
}  
