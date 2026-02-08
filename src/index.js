// Lista de heróis com nome e experiência XP
let herois = [
    [ "Thor", 800 ],
    [ "Hulk", 1500 ],
    [ "Homem de Ferro", 4500 ],
    [ "Capitã Marvel", 7200 ],
    [ "Thanos", 12000 ]
];

// Laço de repetição
for (let i = 0; i < herois.length; i++) {
    let nome = herois[i][0];
    let xp = herois[i][1];
    let nivel = "";

    // Estrutura de decisão
    if (xp < 1000) {
        nivel = "Ferro";
    } else if (xp >= 1001 && xp <= 2000) {
        nivel = "Bronze";
    } else if (xp >= 2001 && xp <= 5000) {
        nivel = "Prata";
    } else if (xp >= 5001 && xp <= 8000) {
        nivel = "Platina Diamante";
    } else if (xp >= 6001 && xp <= 7000) {
        nivel = "Ouro";
    } else if (xp >= 8001 && xp <= 9000) {
        nivel = "Ascendente";
    } else if (xp >= 9001 && xp <= 10000) {
        nivel = "Imortal";
    } else {
        nivel = "Radiante";
    }

    // Mensagem final
    console.log("O herói de nome " + nome + " está no nível de " + nivel);
}