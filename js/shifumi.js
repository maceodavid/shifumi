const buttons = document.getElementsByTagName("button");
const resultat = document.querySelector(".resultat");

for (const button of buttons) {
    button.addEventListener("click", () => {
        const userChoice = button.textContent;

        // liste des actions possibles converties en chaînes de caractères
        const choices = [...buttons].map(btn => btn.textContent);

        // nombre aléatoire pouvant prendre les valeurs 0, 1 ou 2
        const index = Math.floor(Math.random() * 3);
        const botChoice = choices[index];

        if (userChoice === botChoice) return resultat.textContent = "Égalité";

        if (userChoice === "Pierre" && botChoice === "Ciseaux" ||
            userChoice === "Ciseaux" && botChoice === "Feuille" ||
            userChoice === "Feuille" && botChoice === "Pierre") return resultat.textContent = "Gagné";

        resultat.textContent = "Perdu"
    });
}