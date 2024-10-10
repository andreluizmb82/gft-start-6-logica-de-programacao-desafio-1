import input from "./meus-modulos/input.js"
async function solucao2() {
  const nomeHeroi = await input("Digite o nome do Herói: ")
  let nivel = ""
  let xpHero = 0
  do {
    let xpHeroString = await input("Digite o XP do Herói: ")
    //xpHero = parseInt(xpHeroString, 10)
    xpHero = Number(xpHeroString)
  } while (isNaN(xpHero))

  if (xpHero <= 1000) {
    nivel = "Ferro"
  } else if (xpHero <= 2000) {
    nivel = "Bronze"
  } else if (xpHero <= 5000) {
    nivel = "Prata"
  } else if (xpHero <= 7000) {
    nivel = "Ouro"
  } else if (xpHero <= 8000) {
    nivel = "Platina"
  } else if (xpHero <= 9000) {
    nivel = "Ascendente"
  } else if (xpHero <= 10000) {
    nivel = "Imortal"
  } else {
    nivel = "Radiante"
  }
  console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivel}`)
}
export default solucao2
