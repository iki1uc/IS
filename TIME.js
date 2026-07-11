export const TIME = {
  raster: "3×11",
  rows: 3,
  cols: 11,
  zoom: true,
  scroll: true,
  grid: Array.from({length:3}, (_,r) =>
    Array.from({length:11}, (_,c) => `R${r+1}C${c+1}`)
  ),
  status: "OK"
};
