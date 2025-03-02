import { Component, OnInit, ElementRef, ViewChild, Input, inject } from '@angular/core';
import * as THREE from 'three';
import { LightDarkService } from '../../services/lightmodus/light-dark.service';

@Component({
  selector: 'app-cube',
  standalone: true,
  imports: [],
  templateUrl: './cube.component.html',
  styleUrl: './cube.component.scss'
})
export class CubeComponent implements OnInit {
  @ViewChild('rendererContainer', { static: true }) rendererContainer!: ElementRef;
  @Input() images: string[] = [];
  lightmodus = inject(LightDarkService)

  ngOnInit(): void {
    if (this.images.length === 6) {
      this.initThreeJS();
    } else {
      console.error('CubeComponent requires exactly 6 images');
    }
  }

  initThreeJS(): void {
    const scene = new THREE.Scene();
    const aspectRatio = 1;
    const camera = new THREE.OrthographicCamera(-20, 20, 20, -20, 1, 100);
    camera.position.set(0, 0, 50);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(40, 40);
    this.rendererContainer.nativeElement.appendChild(renderer.domElement);
    const materials = this.images.map(imgUrl =>
      new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load(imgUrl),
        transparent: false,
        opacity: 1,
      })
    );

    
    

    const geometry = new THREE.BoxGeometry(32, 32, 32);
    const cube = new THREE.Mesh(geometry, materials);
    scene.add(cube);

    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.z += 0.003;
      cube.rotation.y += 0.003;
      cube.rotation.x += 0.003;
      renderer.render(scene, camera);
    };

    animate();
  }
}

