const mobileMenu = document.getElementById('mobile-menu');
const menu = document.querySelector('.menu ul');
const menuItems = menu.querySelectorAll('li');

// Alterna a classe 'active' ao clicar no botão do menu
mobileMenu.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Fecha o menu ao clicar em um item da lista
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.remove('active');
    });
});

const heroSection = document.querySelector('.hero');

// Array com as imagens
const imagens = [
    'Assets/pegue e monte Branca de Neve.jpeg',
    'Assets/pegue e monte Mickey.jpeg'
];

let imagemAtual = 0;

// Função para trocar a imagem
function trocarImagem() {
    imagemAtual = (imagemAtual + 1) % imagens.length;
    heroSection.style.backgroundImage = `url('${imagens[imagemAtual]}')`;
}

// Trocar a imagem a cada 3 segundos
setInterval(trocarImagem, 3000);

const saibaMaisButton = document.getElementById('saiba-mais');
const imagensAdicionais = document.getElementById('imagens-adicionais');

// Adiciona um evento de clique ao botão "Saiba mais"
saibaMaisButton.addEventListener('click', () => {
    imagensAdicionais.classList.toggle('hidden');
    saibaMaisButton.textContent = imagensAdicionais.classList.contains('hidden') ? 'Saiba mais' : 'Mostrar menos';
});

function enviarWhatsApp() {
    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem').value;

    // Formatar mensagem para o WhatsApp
    const textoMensagem = `Olá, meu nome é ${nome}%0A ${mensagem}`;

    const telefone = "5522998003674";

    // Criar a URL para o WhatsApp
    const urlWhatsApp = `https://api.whatsapp.com/send?phone=${telefone}&text=${textoMensagem}`;

    // Redirecionar para o WhatsApp
    window.open(urlWhatsApp, '_blank');
}