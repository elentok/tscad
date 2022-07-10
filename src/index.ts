import { hexagonShell } from "./lib/honeycomb";
import { extrusions } from "@jscad/modeling";

function main() {
  return extrusions.extrudeLinear(
    { height: 5 },
    hexagonShell({ height: 10, thickness: 2 })
  );
}

export = { main };
