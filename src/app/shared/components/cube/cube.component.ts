import { Component, OnInit, ElementRef, ViewChild, Input, HostListener } from '@angular/core';
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
  @Input() hoverLightColor: string = '#ff0000'; // Default hover color

  scene!: THREE.Scene;
  camera!: THREE.PerspectiveCamera;
  renderer!: THREE.WebGLRenderer;
  cube!: THREE.Mesh;
  ambientLight!: THREE.AmbientLight;
  pointLight!: THREE.SpotLight;
  isHovered = false; // Track hover state

  ngOnInit(): void {
    if (this.images.length === 6) {
      this.initThreeJS();
    } else {
      console.error('CubeComponent requires exactly 6 images');
    }
  }

  initThreeJS(): void {
    this.scene = new THREE.Scene();

    // Camera setup
    this.camera = new THREE.PerspectiveCamera(50, 1, 1, 500);
    this.camera.position.set(0, 60, 140);
    this.camera.lookAt(0, 50, 0);

    // Renderer
    this.renderer = new THREE.WebGLRenderer({ alpha: true });
    this.renderer.setSize(80, 100);
    this.renderer.shadowMap.enabled = true;
    this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);

    // Pedestal Geometry
    const points = [];
    for (let i = 0; i <= 10; i++) {
      points.push(new THREE.Vector2(40 - Math.pow(i, 1.5), i * 2 - 5));
    }

    const pedestalGeometry = new THREE.LatheGeometry(points, 32);
    const pedestalMaterial = new THREE.MeshPhysicalMaterial({
      map: new THREE.TextureLoader().load('/img/brickWall.jpg'),
    });

    const pedestal = new THREE.Mesh(pedestalGeometry, pedestalMaterial);
    pedestal.position.y = 10;
    this.scene.add(pedestal);

    // Cube with Images
    const materials = this.images.map(imgUrl => {
      const texture = new THREE.TextureLoader().load(imgUrl);
      texture.colorSpace = THREE.SRGBColorSpace;
      return new THREE.MeshPhysicalMaterial({ map: texture });
    });

    const geometry = new THREE.BoxGeometry(50, 50, 50);
    this.cube = new THREE.Mesh(geometry, materials);
    this.cube.rotation.set(Math.PI / 4 * Math.random(), Math.PI / 4 * Math.random(), 0);
    this.cube.position.y = 70;
    this.scene.add(this.cube);

    // Lights
    this.ambientLight = new THREE.AmbientLight(0xffffff, 2);
    this.scene.add(this.ambientLight);

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(10, 10, 10);
    this.scene.add(light);

    this.pointLight = new THREE.SpotLight(0xffffff, 1);
    this.pointLight.position.set(0, 120, 0);
    this.pointLight.target = this.cube;
    this.pointLight.angle = Math.PI / 2.4;
    this.pointLight.intensity = 40000;
    this.pointLight.penumbra = 2;
    this.pointLight.decay = 2;
    this.pointLight.distance = 50;
    this.pointLight.color = new THREE.Color(0xffffff);
    this.pointLight.castShadow = true;
    this.scene.add(this.pointLight);

    this.renderer.domElement.addEventListener('mouseenter', this.onMouseEnter.bind(this));
    this.renderer.domElement.addEventListener('mouseleave', this.onMouseLeave.bind(this));

    this.animate();
  }

  animate(): void {
    requestAnimationFrame(() => this.animate());

   
      this.cube.rotation.z += 0.005;
      this.cube.rotation.y += 0.005;


    this.renderer.render(this.scene, this.camera);
  }


  onMouseEnter(): void {
    this.isHovered = true;
    this.pointLight.color.set(this.hoverLightColor);
    this.ambientLight.intensity = 5;
  }

  onMouseLeave(): void {
    this.isHovered = false;
    this.pointLight.color.set(0xffffff);
    this.ambientLight.intensity = 2;
  }
}
