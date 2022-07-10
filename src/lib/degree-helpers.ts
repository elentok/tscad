import { utils, transforms } from "@jscad/modeling";
import RecursiveArray from "@jscad/modeling/src/utils/recursiveArray";
import { Geometry } from "@jscad/modeling/src/geometries/types";
import { Vec1, Vec2, Vec3 } from "@jscad/modeling/src/maths/types";

import { round } from "./math-helpers";

namespace degreeHelpers {
  export function rotate<T extends Geometry>(
    degAngles: Vec1 | Vec2 | Vec3,
    ...geometries: RecursiveArray<T>
  ): Array<T> {
    const radAngles = degAngles.map(utils.degToRad) as Vec1 | Vec2 | Vec3;
    return transforms.rotate(radAngles, geometries);
  }

  export function cos(degs: number): number {
    return round(Math.cos(utils.degToRad(degs)));
  }

  export function sin(degs: number): number {
    return round(Math.sin(utils.degToRad(degs)));
  }
}
export = degreeHelpers;
// export = { rotate, cos, sin };
