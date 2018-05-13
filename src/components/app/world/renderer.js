import { WebGLRenderer, PCFSoftShadowMap } from 'three';

export default ({ width, height }) => {
  const renderer = new WebGLRenderer({ antialias: true, alpha: true });
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = PCFSoftShadowMap;

  renderer.shadowMapEnabled = true;
  renderer.shadowMapSoft = true;

  renderer.shadowMapWidth = 2048;
  renderer.shadowMapHeight = 2048;

  renderer.gammaInput = true;
  renderer.gammaOutput = true;
  renderer.sortObjects = true;
  renderer.setSize(width, height);
  return renderer;
};
