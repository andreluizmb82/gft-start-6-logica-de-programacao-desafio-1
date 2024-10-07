const readline = require("readline")

const pergunta = (textoPergunta) => {
  const rl = readline.createInterface({
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
  const NOME = "O Herói de nome **"
  const NIVEL = "** está no nível de **"
  let nivel = ""

  if (xpHero <= 1000) {
    nivel = "Ferro"
  } else if (1001 <= xpHero && xpHero <= 2000) {
    nivel = "Bronze"
  } else if (2001 <= xpHero && xpHero <= 5000) {
    nivel = "Prata"
  } else if (5001 <= xpHero && xpHero <= 7000) {
    nivel = "Ouro"
  } else if (7001 <= xpHero && xpHero <= 8000) {
    nivel = "Platina"
  } else if (8001 <= xpHero && xpHero <= 9000) {
    nivel = "Ascendente"
  } else if (9001 <= xpHero && xpHero <= 10000) {
    nivel = "Ascendente"
  } else if (xpHero >= 10001) {
    nivel = "Radiante"
  }
  console.log(`\n${NOME} ${nomeHeroi} ${NIVEL} ${nivel}** com ${xpHero}"xp\n`)
}

getUserInputs()
