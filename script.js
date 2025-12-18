function changerMessage() {
    const messages = [
        "Bonjour le monde 🌍",
        "Le JavaScript fonctionne !",
        "Tu es en BTS SIO 💻",
        "HTML + CSS + JS",
        "Site simple mais efficace"
    ];

    const messageAleatoire = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById("message").textContent = messageAleatoire;
}
