import readline from "readline"
import core from "./core.mjs"

const input = readline

const pergunta = (textoPergunta) => {
  const rl = input.createInterface({
    input: process.stdin,
    output: process.stdout,
  })

  return new Promise((resolve) => {
    rl.question(textoPergunta, (entrada) => {
      rl.close()
      resolve(entrada)
    })
  })
}

export default async function solucao3(nomeHeroi = "", xpHero = "") {
  if (nomeHeroi === "") {
    nomeHeroi = await pergunta("Digite o nome do Herói: ")
  }

  if (xpHero === "") {
    xpHero = await pergunta("Digite o XP do Herói: ")
  }

  const nivel = await core(parseInt(xpHero, 10))

  function msgF() {
    return `O Herói de nome ${nomeHeroi} está no nível de ${nivel}`
  }
  const msg = await msgF()
  return msg
}
