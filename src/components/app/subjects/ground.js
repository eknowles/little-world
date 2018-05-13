import { BoxGeometry, MeshPhongMaterial, Mesh } from 'three';
import { GROUND_COLOR } from '../app.constants';

export default () => {
  const geometry = new BoxGeometry(400, 10, 400);
  const material = new MeshPhongMaterial({ color: GROUND_COLOR });
  const mesh = new Mesh(geometry, material);
  mesh.position.y = -5;
  mesh.receiveShadow = true;
  mesh.castShadow = true;
  return mesh;
};
