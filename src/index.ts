import { primitives } from "@jscad/modeling";

const { cuboid } = primitives;

function main() {
  return cuboid({ size: [20, 40, 80] });
}

export = { main };
