import gerarMensagem from "./meus-modulos/gerarMensagem.js"
async function solucao3(nomeHeroi: string = "", xpHeroString: string = "") {
  let mensagemFinal: string = await gerarMensagem(nomeHeroi, xpHeroString)

  return mensagemFinal
}

export default solucao3
