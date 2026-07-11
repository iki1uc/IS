import { PHI4 } from "./PHI4.js";
import { TIME } from "./TIME.js";
import { loadRESPO } from "./RESPO.js";
import { CALC } from "./CALC.js";

export async function ROUTER(){
  const cube = await loadRESPO("Cube");
  const packet = CALC(cube, PHI4, TIME);

  return {
    router: "IS",
    cube,
    phi4: PHI4,
    time: TIME,
    calc: packet,
    stamp: Date.now()
  };
}
