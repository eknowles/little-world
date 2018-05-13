import React, { Component } from 'react';

import renderer from './world/renderer';
import camera from './world/camera';
import scene from './world/scene';

import ground from './subjects/ground';
import cube from './subjects/cube';
import { directionalLight, hemisphereLight } from './world/lighting';
import * as constants from './app.constants';

class App extends Component {
  constructor(props) {
    super(props);

    this.id = 'world';
    this.height = constants.HEIGHT;
    this.width = constants.WIDTH;
    this.el = React.createRef();

    const wh = { width: this.width, height: this.height };

    this.scene = scene();
    this.camera = camera(wh);
    this.renderer = renderer(wh);

    const addDirectionalLight = directionalLight.bind(this);
    const addHemisphereLight = hemisphereLight.bind(this);

    addDirectionalLight();
    addHemisphereLight();

    // add subjects
    this.scene.add(ground());
    this.scene.add(cube());
  }

  componentDidMount() {
    this.el.current.appendChild(this.renderer.domElement);
    this.renderer.render(this.scene, this.camera);
  }

  render() {
    return (
      <div
        id={this.id}
        ref={this.el}
      />
    );
  }
}

export default App;

