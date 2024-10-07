const solucao1 = () => {
    let nivel = "";
    let nome = "AndreLuiz";
    for (let xp = 1; xp <= 10001; xp += 500) {
        if (xp <= 1000) {
            nivel = "Ferro";
        }
        else if (xp <= 2000) {
            nivel = "Bronze";
        }
        else if (xp <= 5000) {
            nivel = "Prata";
        }
        else if (xp <= 7000) {
            nivel = "Ouro";
        }
        else if (xp <= 8000) {
            nivel = "Platina";
        }
        else if (xp <= 9000) {
            nivel = "Ascendente";
        }
        else if (xp <= 10000) {
            nivel = "Ascendente";
        }
        else {
            nivel = "Radiante";
        }
        console.log(`O Herói de nome ${xp} está no nível de ${nivel}`);
    }
};
export default solucao1;
