import readline from "readline"
const input = (textoPergunta: string): Promise<string> => {
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

export default input
