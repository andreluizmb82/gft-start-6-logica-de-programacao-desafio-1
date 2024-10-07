nivel = ""
nome = input("Digite o nome do herói: ")
xpHeroi = int(input("Digite o número de experiência do herói: "))
NOME = "O Herói de nome **"
NIVEL = "** está no nível de **"



if xpHeroi <= 1000:
  nivel = "Ferro"
elif xpHeroi >= 1001 and xpHeroi <= 2000:
  nivel = "Bronze"
elif xpHeroi >= 2001 and xpHeroi <= 5000:
  nivel = "Prata"
elif xpHeroi >= 5001 and xpHeroi <= 7000:
  nivel = "Ouro"
elif xpHeroi >= 7001 and xpHeroi <= 8000:
  nivel = "Platina"
elif xpHeroi >= 8001 and xpHeroi <= 9000:
  nivel = "Ascendente"
elif xpHeroi >= 9001 and xpHeroi <= 10000:
  nivel = "Imortal"
elif xpHeroi >= 10001:
  nivel = "Radiante"

print(f"{NOME} {nome} {NIVEL} {nivel}** XP{str(xpHeroi)}")
