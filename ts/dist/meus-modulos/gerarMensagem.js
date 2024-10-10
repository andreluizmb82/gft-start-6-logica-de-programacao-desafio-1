import input from "./input.js";
import retornarNivel from "./retornaNeivel.js";
export default async function gerarMensagem(nomeHeroi = "", xpHeroString = "") {
    if (nomeHeroi === "") {
        nomeHeroi = await input("Digite o nome do Herói: ");
    }
    let nivel = "";
    let xpHero = 0;
    if (xpHeroString === "") {
        do {
            xpHeroString = await input("Digite o XP do Herói: ");
            //xpHero = parseInt(xpHeroString, 10)
            xpHero = Number(xpHeroString);
        } while (isNaN(xpHero));
    }
    else {
        xpHero = Number(xpHeroString);
    }
    nivel = retornarNivel(xpHero);
    return `O Herói de nome ${nomeHeroi} está no nível de ${nivel}`;
}
