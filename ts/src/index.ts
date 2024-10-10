import input from "./meus-modulos/input.js"
import solucao1 from "./solucao-1.js"
import solucao2 from "./solucao-2.js"

async function app() {
  console.log("\n\n-----------------------------------------")
  console.log("Bem vindo ao desafio 1 e 2 do Bootcamp DIO")

  let solucaoASerExecutada
  do {
    solucaoASerExecutada = await input(
      "Digite 1 para executar a solução 1 ou 2 para executar a solução 2: "
    )

    if (solucaoASerExecutada === "1") {
      solucao1()
    } else if (solucaoASerExecutada == "2") {
      solucao2()
    } else {
      console.log("Opção inválida. Por favor, digite 1 ou 2.")
      solucaoASerExecutada = "0"
    }
  } while (solucaoASerExecutada === "0")
}
app()
