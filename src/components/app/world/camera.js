import { OrthographicCamera } from 'three';

export default ({ width, height }) => {
  const camera = new OrthographicCamera(width / -2, width / 2, height / 2, height / -2, 1, 2000);
  camera.position.x = 500;
  camera.position.y = 500;
  camera.position.z = 500;
  camera.lookAt(0, 0, 0);
  return camera;
};
