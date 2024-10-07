const solucao1 = () => {
  let nivel = ""
  let nome = "AndreLuiz"
  const NOME = "O Herói de nome **"
  const NIVEL = "** está no nível de **"

  for (let xp = 1; xp <= 10001; xp += 500) {
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
    console.log(NOME + nome + NIVEL + nivel + "** XP " + xp)
  }
}

export default solucao1
