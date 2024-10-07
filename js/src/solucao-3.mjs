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

async function getUserInputs() {
  const nomeHeroi = await pergunta("Digite o nome do Herói: ")
  const xpHero = await pergunta("Digite o XP do Herói: ")
  const nivel = core(parseInt(xpHero, 10))

  console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivel}`)
}

getUserInputs()
