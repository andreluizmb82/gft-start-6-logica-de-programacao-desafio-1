/*
Essa solução foi feita utilizando a biblioteca readline do Node.js.
O código de exemplo está no site: https://www.codecademy.com/article/getting-user-input-in-node-js
 */
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
})

readline.question("\nDigite a quantidade de XP: ", (xp) => {
  const NOME = "O Herói de nome **"
  const NIVEL = "** está no nível de **"
  let nome = "AndreLuiz"
  let nivel = ""
  if (xp <= 1000) {
    nivel = "Ferro"
  } else if (1001 <= xp && xp <= 2000) {
    nivel = "Bronze"
  } else if (2001 <= xp && xp <= 5000) {
    nivel = "Prata"
  } else if (5001 <= xp && xp <= 7000) {
    nivel = "Ouro"
  } else if (7001 <= xp && xp <= 8000) {
    nivel = "Platina"
  } else if (8001 <= xp && xp <= 9000) {
    nivel = "Ascendente"
  } else if (9001 <= xp && xp <= 10000) {
    nivel = "Ascendente"
  } else if (xp >= 10001) {
    nivel = "Radiante"
  }
  console.log("\n" + NOME + nome + NIVEL + nivel + "** com " + xp + "xp\n")
  readline.close()
})
