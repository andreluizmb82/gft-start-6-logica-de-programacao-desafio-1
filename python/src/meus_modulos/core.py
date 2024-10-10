
def retorna_nivel(xpHeroi):
  nivel = ""
  
  if xpHeroi <= 1000:
      nivel = "Ferro"
  elif xpHeroi <= 2000:
    nivel = "Bronze"
  elif xpHeroi <= 5000:
    nivel = "Prata"
  elif xpHeroi <= 7000:
    nivel = "Ouro"
  elif xpHeroi <= 8000:
    nivel = "Platina"
  elif xpHeroi <= 9000:
    nivel = "Ascendente"
  elif xpHeroi <= 10000:
    nivel = "Imortal"
  else:
    nivel = "Radiante"

  return nivel

def gera_mensagem(nomeHeroi = "", xpHeroi = ""):
  if nomeHeroi == "":
    nomeHeroi = input("Digite o nome do herói: ")
  if xpHeroi == "":
    xpHeroi = int(input("Digite o número de experiência do herói: "))
  nivelHeroi =retorna_nivel(xpHeroi)
  return(f"O Herói de nome {nomeHeroi} está no nível de {nivelHeroi}")
