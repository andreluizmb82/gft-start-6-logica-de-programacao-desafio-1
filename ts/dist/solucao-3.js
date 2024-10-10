import gerarMensagem from "./meus-modulos/gerarMensagem.js";
async function solucao3(nomeHeroi = "", xpHeroString = "") {
    let mensagemFinal = await gerarMensagem(nomeHeroi, xpHeroString);
    return mensagemFinal;
}
export default solucao3;
