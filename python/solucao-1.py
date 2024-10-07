nivel = ""
nome = "AndreLuiz"
NOME = "O Herói de nome **"
NIVEL = "** está no nível de **"

for x in range(1,10501,500):

  if x <= 1000:
    nivel = "Ferro"
  elif x >= 1001 and x <= 2000:
    nivel = "Bronze"
  elif x >= 2001 and x <= 5000:
    nivel = "Prata"
  elif x >= 5001 and x <= 7000:
    nivel = "Ouro"
  elif x >= 7001 and x <= 8000:
    nivel = "Platina"
  elif x >= 8001 and x <= 9000:
    nivel = "Ascendente"
  elif x >= 9001 and x <= 10000:
    nivel = "Imortal"
  elif x >= 10001:
    nivel = "Radiante"

  print(f"{NOME} {nome} {NIVEL} {nivel}** XP{str(x)}")
