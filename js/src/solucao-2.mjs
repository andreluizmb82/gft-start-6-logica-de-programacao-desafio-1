/*
Essa solução foi feita utilizando a biblioteca readline do Node.js.
O código de exemplo está no site: https://www.codecademy.com/article/getting-user-input-in-node-js
 */

import readline from "readline"
import core from "./core.mjs"
const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

input.question("\nDigite a quantidade de XP: ", (xp) => {
  const nome = "Andre Luiz"
  const nivel = core(parseInt(xp, 10))

  console.log(`O Herói de nome ${nome} está no nível de ${nivel}`)
  input.close()
})
