document.addEventListener('DOMContentLoaded', () => {
    // --- Lógica para os corações flutuantes que sobem ---
    const body = document.body;

    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('particle');
        heart.innerHTML = '❤️';
        body.appendChild(heart);

        // Posição inicial no fundo da tela, em uma posição horizontal aleatória
        const startX = Math.random() * window.innerWidth;
        const startY = window.innerHeight + 100;

        // Posição final (além do topo da tela)
        const endX = startX + (Math.random() - 0.5) * 200; // Desvio horizontal
        const endY = 20;

        // Tamanho aleatório para variar o visual
        const size = Math.random() * 20 + 15;

        // Animação GSAP
        gsap.fromTo(heart, {
            x: startX,
            y: startY,
            scale: size / 35, // Escala o coração
            opacity: 0.5,
            rotation: Math.random() * 360
        }, {
            x: endX,
            y: endY,
            opacity: 0, // Coração desaparece no topo
            rotation: '+=360', // Gira enquanto sobe
            ease: 'power1.in',
            duration: 8 + Math.random() *7,// Duração da animação
            onComplete: () => {
                heart.remove(); // Remove o coração do DOM após a animação
            }
        });
    }

    // Cria um novo coração a cada 10ms
    setInterval(createHeart, 50);

    // --- Lógica para os botões do pop-up ---
    const botaoAbrir = document.getElementById('meuBotao');
    const mensagemBox = document.getElementById('mensagemBox');
    const botaoFechar = document.getElementById('fecharMensagem');

    botaoAbrir.addEventListener('click', function() {
        mensagemBox.classList.remove('mensagem-escondida');
        mensagemBox.classList.add('mensagem-visivel');
        // Adicione esta linha para pausar a animação do fundo
        body.style.animationPlayState = 'paused';
    });

    botaoFechar.addEventListener('click', function() {
        mensagemBox.classList.remove('mensagem-visivel');
        mensagemBox.classList.add('mensagem-escondida');
        // Adicione esta linha para reiniciar a animação do fundo
        body.style.animationPlayState = 'running';
    });
});