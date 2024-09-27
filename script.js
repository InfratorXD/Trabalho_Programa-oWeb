function comecar() { // Essa função esconde a página inicial e exibe o formulário do Quiz
    document.getElementById("paginaInicial").style.display = "none";
    document.getElementById("formulario").style.display = "block";
}

// Captura as respostas
const radioButtons = document.querySelectorAll('input[type="radio"]');
const botaoEnviar = document.querySelector('button[type="submit"]');


// Essa função habilita a opção de envio quando alguma pergunta é marcada
function verificarSelecao() {
    let selecionado = false;

    radioButtons.forEach(radio => {
        if (radio.checked) {
            selecionado = true;
        }
    });

    if (selecionado) {
        botaoEnviar.classList.add('active');
        botaoEnviar.disabled = false;
    }
}

radioButtons.forEach(radio => {
    radio.addEventListener('change', verificarSelecao);
});

var personagens = [0, 0, 0, 0]; // 4 personagens

function calcularPontuacao() {
    var questao1 = document.querySelector('input[name="questao1"]:checked');
    var questao2 = document.querySelector('input[name="questao2"]:checked');
    var questao3 = document.querySelector('input[name="questao3"]:checked');
    var questao4 = document.querySelector('input[name="questao4"]:checked');
    var questao5 = document.querySelector('input[name="questao5"]:checked');

    var Merida = 0, Sulley = 0, Carl = 0, Edna = 0;

    if (questao1) {
        switch (questao1.value) {
            case 'A':
                Merida += 3; Sulley += 4; Carl += 2; Edna += 4;
                break;
            case 'B':
                Merida += 5; Sulley += 2; Carl += 6; Edna += 4;
                break;
            case 'C':
                Merida += 3; Sulley += 0; Carl += 3; Edna += 6;
                break;
            case 'D':
                Merida += 4; Sulley += 3; Carl += 5; Edna += 1;
                break;
        }
    }

    if (questao2) {
        switch (questao2.value) {
            case 'A':
                Merida += 3; Sulley += 4; Carl += 2; Edna += 4;
                break;
            case 'B':
                Merida += 5; Sulley += 2; Carl += 6; Edna += 4;
                break;
            case 'C':
                Merida += 3; Sulley += 0; Carl += 3; Edna += 6;
                break;
        }
    }

    if (questao3) {
        switch (questao3.value) {
            case 'A':
                Merida += 3; Sulley += 4; Carl += 2; Edna += 4;
                break;
            case 'B':
                Merida += 5; Sulley += 2; Carl += 6; Edna += 4;
                break;
            case 'C':
                Merida += 3; Sulley += 0; Carl += 3; Edna += 6;
                break;
            case 'D':
                Merida += 4; Sulley += 3; Carl += 5; Edna += 1;
                break;
        }
    }

    if (questao4) {
        switch (questao4.value) {
            case 'A':
                Merida += 3; Sulley += 4; Carl += 2; Edna += 4;
                break;
            case 'B':
                Merida += 5; Sulley += 2; Carl += 6; Edna += 4;
                break;
            case 'C':
                Merida += 3; Sulley += 0; Carl += 3; Edna += 6;
                break;
            case 'D':
                Merida += 20; Sulley += 3; Carl += 5; Edna += 1;
                break;
        }
    }

    personagens = [Merida, Sulley, Carl, Edna]; // Array para armazenar a pontuação dos personagens


    //Calcula a maior pontuação dos personagens e mostra a imagem do vencedor
    var maiorPontuacao = Math.max(...personagens);
    var vencedor = personagens.indexOf(maiorPontuacao);

    var imagensPersonagens = [
        "Imagens/Merida.jpeg",
        "Imagens/Sulley.jpg",
        "Imagens/Carl.jpeg",
        "Imagens/Edna.webp",
    ];

    var imgVencedor = document.getElementById("personagemIdeal");
    imgVencedor.src = imagensPersonagens[vencedor];
    console.log("Personagem com maior pontuação é o Personagem " + (vencedor + 1) + " com " + maiorPontuacao + " pontos.");

}


// Reseta as opções do formulário
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    calcularPontuacao();
    document.getElementById("paginaInicial").style.display = "block";
    document.getElementById("formulario").style.display = "none";

    radioButtons.forEach(radio => {
        radio.checked = false; 
        });
   
});
