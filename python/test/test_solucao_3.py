import sys
import os
# Adiciona a pasta "src" ao caminho do sistema
src_path = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'src'))
sys.path.append(src_path)

from meus_modulos import core
  

def testeSolucao3(nomeHeroi, xpHeroi, msgEsperada):
  msg = core.gera_mensagem(nomeHeroi, xpHeroi)
  if msg != msgEsperada:
    print(f"""
      A menssagem retornada foi: '{msg}' 
      A menssagem esperada é:    '{msgEsperada}'
      A quantedade de xp do Herói foi = '{xpHeroi}'
    """)
  else:
    print(f"O xp = {xpHeroi} passou no teste!")

testeSolucao3("ANDRE", 9999999999999999999, "mensgaem")
testeSolucao3("Andre", 1000, "O Herói de nome Andre está no nível de Ferro")
testeSolucao3("Andre", 1001, "O Herói de nome Andre está no nível de Bronze")
testeSolucao3("Andre", 2000, "O Herói de nome Andre está no nível de Bronze")
testeSolucao3("Andre", 2001, "O Herói de nome Andre está no nível de Prata")
testeSolucao3("Andre", 5001, "O Herói de nome Andre está no nível de Ouro")
testeSolucao3("Andre", 7000, "O Herói de nome Andre está no nível de Ouro")
testeSolucao3("Andre", 7001, "O Herói de nome Andre está no nível de Platina")
testeSolucao3("Andre", 8000, "O Herói de nome Andre está no nível de Platina")
testeSolucao3("Andre", 8001, "O Herói de nome Andre está no nível de Ascendente")
testeSolucao3("Andre",9000,"O Herói de nome Andre está no nível de Ascendente")
testeSolucao3("Andre", 9001, "O Herói de nome Andre está no nível de Imortal")
testeSolucao3("Andre", 10000, "O Herói de nome Andre está no nível de Imortal")
testeSolucao3("Andre", 10001, "O Herói de nome Andre está no nível de Radiante")