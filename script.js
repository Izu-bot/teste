const dialogues = [
    {
        text: "Você vê Leonardo no corredor da escola. O que você faz?",
        choices: [
            "Diz oi e pergunta sobre o dever de casa.",
            "Convida-o para um café na cantina.",
            "Ignora e segue seu caminho."
        ],
        responses: [
            "Leonardo fica feliz em conversar sobre o dever de casa.",
            "Leonardo aceita o convite para um café e a conversa flui bem.",
            "Leonardo parece um pouco chateado por você não ter o cumprimentado."
        ]
    },
    {
        text: "Você está planejando uma atividade para o evento da escola. O que você sugere?",
        choices: [
            "Organizar uma competição de dança.",
            "Preparar um stand de culinária.",
            "Fazer uma apresentação de talentos."
        ],
        responses: [
            "Leonardo adora dançar e está animado com a competição.",
            "Leonardo é um grande fã de culinária e ajuda a preparar o stand.",
            "Leonardo está interessado na apresentação de talentos e pede para participar."
        ]
    },
    {
        text: "O evento da escola foi um sucesso. O que você faz para agradecer Leonardo por sua ajuda?",
        choices: [
            "Escreve uma carta de agradecimento.",
            "Dá um presente simples e simbólico.",
            "Convida-o para um passeio no final de semana."
        ],
        responses: [
            "Leonardo fica tocado com a carta de agradecimento.",
            "Leonardo adora o presente e agradece muito.",
            "Leonardo fica muito feliz com o convite e aceita."
        ]
    },
    {
        text: "Você decide dar o próximo passo na relação. O que você faz?",
        choices: [
            "Confessa seus sentimentos para Leonardo.",
            "Pede para ser apenas amigos.",
            "Diz que gostaria de continuar se conhecendo melhor."
        ],
        responses: [
            "Leonardo confessa que também tem sentimentos por você.",
            "Leonardo entende sua decisão e vocês continuam amigos.",
            "Leonardo está feliz em continuar se conhecendo e ver onde isso leva."
        ]
    }
];

let currentStep = 0; // Conta as etapas do jogo

function updateDialogue() {
    const dialogue = dialogues[currentStep];
    document.getElementById('dialogue-text').textContent = dialogue.text;
    document.getElementById('choice1').textContent = dialogue.choices[0];
    document.getElementById('choice2').textContent = dialogue.choices[1];
    document.getElementById('choice3').textContent = dialogue.choices[2];
    
    if (currentStep < dialogues.length - 1) {
        document.getElementById('reset-button').style.display = 'block';
        /* document.getElementById('choices-container').style.display = 'none'; */
    }
}

function makeChoice(choiceIndex) {
    const dialogue = dialogues[currentStep];
    const response = dialogue.responses[choiceIndex];
    document.getElementById('dialogue-text').textContent = response;
    
/*     if (response.includes("Leonardo confessa que também tem sentimentos por você.") || response.includes("Leonardo está feliz em continuar se conhecendo e ver onde isso leva.")) {
        showConfetti();
        console.log("Acabou o jogo");
    } */

    currentStep++;
    
    if (!(currentStep == dialogues.length)) {
        setTimeout(updateDialogue, 3500); // Espera 2 segundos antes de mostrar a próxima pergunta
    } else {
        showConfetti();
        createHearts();
        endGame();
    }

}

// Acaba o jogo
function endGame() {
    document.getElementById('choices-container').style.display = 'none';
    document.getElementById('reset-button').style.display = 'block';
}

// Reseta o jogo
function resetGame() {
    currentStep = 0;
    document.getElementById('dialogue-text').textContent = "Bem-vindo ao jogo! Clique no botão abaixo para começar.";
    document.getElementById('choices-container').style.display = 'block';
    document.getElementById('reset-button').style.display = 'none';
    document.getElementById('game-container').style.display = 'none';
    document.getElementById('start-screen').style.display = 'block';
}

// Starta o jogo
function startGame() {
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('game-container').style.display = 'block';
    updateDialogue();
}

// Função para criar corações na tela
function createHearts() {
    const container = document.getElementById('hearts-container');
    container.innerHTML = '';
    for (let i = 0; i < 100; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = Math.random() * 100 + 'vh';
        heart.style.width = Math.random() * 10 + 5 + 'px';
        heart.style.height = heart.style.width;
        heart.style.animationDuration = (Math.random() * 2 + 2) + 's';
        container.appendChild(heart);
    }
}

// Função para criar confetes
function showConfetti() {
    const container = document.getElementById('confetti-container');
    container.innerHTML = ''; // Limpa confetes anteriores
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = Math.random() * 100 + 'vh';
        confetti.style.width = Math.random() * 10 + 5 + 'px';
        confetti.style.height = confetti.style.width;
        confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
        container.appendChild(confetti);
    }
}