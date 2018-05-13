import { DirectionalLight, HemisphereLight } from 'three';

export function hemisphereLight() {
  const light = new HemisphereLight(0xffffbb, 0x080820, 1);
  this.scene.add(light);
}

export function directionalLight() {
  const light = new DirectionalLight(0x00ff00, 0.5);

  light.position.set(this.width / 2, this.height * 2, -this.width / 2);
  light.castShadow = true;

  light.target.position.set(0, 0, 0);

  light.shadow.darkness = 0.5;
  light.shadow.mapSize.width = 2048;
  light.shadow.mapSize.height = 2048;
  light.shadow.camera.near = 1;
  light.shadow.camera.far = 2000;
  light.shadow.camera.left = this.width / -2;
  light.shadow.camera.right = this.width / 2;
  light.shadow.camera.top = this.height / 2;
  light.shadow.camera.bottom = this.height / -2;

  this.scene.add(light);
}
