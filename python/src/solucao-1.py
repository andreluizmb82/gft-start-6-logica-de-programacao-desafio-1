nivel = ""
nome = "Andre Luiz"

for x in range(1,10501,500):

  if x <= 1000:
    nivel = "Ferro"
  elif x <= 2000:
    nivel = "Bronze"
  elif x <= 5000:
    nivel = "Prata"
  elif x <= 7000:
    nivel = "Ouro"
  elif x <= 8000:
    nivel = "Platina"
  elif x <= 9000:
    nivel = "Ascendente"
  elif x <= 10000:
    nivel = "Imortal"
  else:
    nivel = "Radiante"

  print(f"O Herói de nome {nome} está no nível de {nivel}")
