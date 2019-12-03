import { ConeGeometry, MeshStandardMaterial } from 'three';

import Mesh from './Mesh';
import {
  DEFAULT_CONE_RADIUS,
  DEFAULT_CONE_HEIGHT,
  DEFAULT_RADIAL_SEGMENTS,
  DEFAULT_COLOR_X_AXIS,
} from '../utils/constants';

class Cone extends Mesh {
  constructor(color = DEFAULT_COLOR_X_AXIS) {
    super();
    this.geometry = new ConeGeometry(
      DEFAULT_CONE_RADIUS,
      DEFAULT_CONE_HEIGHT,
      DEFAULT_RADIAL_SEGMENTS,
    );
    this.material = new MeshStandardMaterial({ color });
    this.material.transparent = true;
  }
}

export default Cone;
