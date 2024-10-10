import retornarNivel from "../meus-modulos/retornaNeivel.js"
function testeRetornarNivel(xpHero: number, nivelEsperado: string) {
  const nivel = retornarNivel(xpHero)
  if (nivel !== nivelEsperado)
    console.error(`
    O nível retornado foi: "${nivel}"
    O nível esperado é:    "${nivelEsperado}"
    O xp do Herói foi = ${xpHero}
    `)
  else console.log(`O xp = ${xpHero} passou no teste!`)
}
testeRetornarNivel(1000, "Ferro")
testeRetornarNivel(1001, "Bronze")

//----------------------------------------------------------------------

import gerarMensagem from "../meus-modulos/gerarMensagem.js"
async function testeGerarMensagem(
  nomeHeroi: string,
  xpHeroi: string,
  msgEsperada: string
) {
  const msg: string = await gerarMensagem(nomeHeroi, xpHeroi)
  if (msg !== msgEsperada)
    console.error(`
    A menssagem retornada foi: "${msg}"
    A menssagem esperada é:    "${msgEsperada}"
    O nome do Herói foi = ${nomeHeroi}
    A quantedade de xp do Herói foi = ${xpHeroi}
    `)
  else console.log(`O xp = ${xpHeroi} passou no teste!`)
}

//----------------------------------------------------------------------
//input.setMaxListeners(20);

import solucao3 from "../solucao-3.js"
async function testeSolucao3(
  nomeHeroi: string,
  xpHeroi: string,
  msgEsperada: string
) {
  const mensagemRetornada = await solucao3(nomeHeroi, xpHeroi)

  if (mensagemRetornada !== msgEsperada)
    console.error(`
    A menssagem retornada foi: "${mensagemRetornada}" 
    A menssagem esperada é:    "${msgEsperada}"
    A quantedade de xp do Herói foi = ${xpHeroi}
    `)
  else console.log(`O xp = ${xpHeroi} passou no teste!`)
}

async function executarTestes() {
  await testeSolucao3("Andre", "999999999999", "msgEsperada")

  await testeSolucao3(
    "Andre",
    "1",
    "O Herói de nome Andre está no nível de Ferro"
  )
  await testeSolucao3(
    "Andre",
    "1000",
    "O Herói de nome Andre está no nível de Ferro"
  )
  await testeSolucao3(
    "Andre",
    "1001",
    "O Herói de nome Andre está no nível de Bronze"
  )
  await testeSolucao3(
    "Andre",
    "2000",
    "O Herói de nome Andre está no nível de Bronze"
  )
  await testeSolucao3(
    "Andre",
    "2001",
    "O Herói de nome Andre está no nível de Prata"
  )
  await testeSolucao3(
    "Andre",
    "5000",
    "O Herói de nome Andre está no nível de Prata"
  )
  await testeSolucao3(
    "Andre",
    "5001",
    "O Herói de nome Andre está no nível de Ouro"
  )
  await testeSolucao3(
    "Andre",
    "7000",
    "O Herói de nome Andre está no nível de Ouro"
  )
  await testeSolucao3(
    "Andre",
    "7001",
    "O Herói de nome Andre está no nível de Platina"
  )
  await testeSolucao3(
    "Andre",
    "8000",
    "O Herói de nome Andre está no nível de Platina"
  )
  await testeSolucao3(
    "Andre",
    "8001",
    "O Herói de nome Andre está no nível de Ascendente"
  )
  await testeSolucao3(
    "Andre",
    "9000",
    "O Herói de nome Andre está no nível de Ascendente"
  )
  await testeSolucao3(
    "Andre",
    "9001",
    "O Herói de nome Andre está no nível de Imortal"
  )
  await testeSolucao3(
    "Andre",
    "10000",
    "O Herói de nome Andre está no nível de Imortal"
  )
  await testeSolucao3(
    "Andre",
    "10001",
    "O Herói de nome Andre está no nível de Radiante"
  )
}

executarTestes()
