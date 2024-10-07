import input from "./input.js";
async function solucao2() {
    const nomeHeroi = await input("Digite o nome do Herói: ");
    //let xpHeroString
    let nivel = "";
    let xpHero = 0;
    do {
        let xpHeroString = await input("Digite o XP do Herói: ");
        //xpHero = parseInt(xpHeroString, 10)
        xpHero = Number(xpHeroString);
    } while (isNaN(xpHero));
    if (Number(xpHero) <= 1000) {
        nivel = "Ferro";
    }
    else if (1001 <= xpHero && xpHero <= 2000) {
        nivel = "Bronze";
    }
    else if (2001 <= xpHero && xpHero <= 5000) {
        nivel = "Prata";
    }
    else if (5001 <= xpHero && xpHero <= 7000) {
        nivel = "Ouro";
    }
    else if (7001 <= xpHero && xpHero <= 8000) {
        nivel = "Platina";
    }
    else if (8001 <= xpHero && xpHero <= 9000) {
        nivel = "Ascendente";
    }
    else if (9001 <= xpHero && xpHero <= 10000) {
        nivel = "Ascendente";
    }
    else if (xpHero >= 10001) {
        nivel = "Radiante";
    }
    console.log(`\nO Herói de nome ** ${nomeHeroi} ** está no nível de ** ${nivel}** com ${xpHero}"xp\n`);
}
export default solucao2;
