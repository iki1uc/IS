export function CALC(respo, phi4, time){
  return {
    calc: "ACTIVE",
    respo,
    phi4,
    time,
    stamp: Date.now()
  };
}
