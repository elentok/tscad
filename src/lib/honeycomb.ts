import { primitives, transforms, hulls, booleans } from "@jscad/modeling";
import { cos, sin, rotate } from "./degree-helpers";

const { union } = booleans;
const { translate } = transforms;
const { circle } = primitives;
const { hull } = hulls;

// Using the pythagorean theorem:
//
//   (Width/2)^2 + (r/2)^2 = r^2
//
function calcHexagonWidth(height: number) {
  return (Math.sqrt(3) * height) / 2;
}

function calcHexagonHeight(width: number) {
  return (width * 2) / Math.sqrt(3);
}

// Using the pythagorean theorem:
//
//   VertDist^2 + (Dist/2)^2 = Dist^2
//
function calcHexagonVerticalDistance(horizontalDistance: number) {
  return Math.sqrt(1.25) * horizontalDistance;
}

namespace honeycomb {
  export function hexagonShell(opts: { height: number; thickness: number }) {
    const { height, thickness } = opts;
    const radius = height / 2 - thickness / 2;

    const parts = [];

    for (let i = 0; i < 6; i++) {
      const x1 = radius * cos(i * 60);
      const y1 = radius * sin(i * 60);
      const circle1 = translate(
        [x1, y1],
        circle({ radius: thickness / 2, center: [0, 0] })
      );

      const x2 = radius * cos((i + 1) * 60);
      const y2 = radius * sin((i + 1) * 60);
      const circle2 = translate(
        [x2, y2],
        circle({ radius: thickness / 2, center: [0, 0] })
      );

      const line = hull([circle1, circle2]);
      parts.push(line);
    }

    const hexagon = union(parts);
    return rotate([0, 0, 90], hexagon);
  }
}

export = honeycomb;
