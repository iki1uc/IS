export async function IS_ROUTER(){
  const cube = await loadRESPO("cube");
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
