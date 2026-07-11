export async function loadRESPO(name){
  try{
    const res = await fetch(`./${name}.html`);
    const txt = await res.text();
    return { name, raw: txt, status: "OK" };
  }catch(e){
    return { name, error: true };
  }
}
