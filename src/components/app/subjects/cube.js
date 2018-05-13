import { BoxGeometry, MeshPhongMaterial, Mesh } from 'three';
import { CUBE_COLOR } from '../app.constants';

export default () => {
  const geometry = new BoxGeometry(50, 50, 50);
  const material = new MeshPhongMaterial({ color: CUBE_COLOR });
  const mesh = new Mesh(geometry, material);
  mesh.position.y = 25;
  mesh.receiveShadow = true;
  mesh.castShadow = true;
  return mesh;
};
