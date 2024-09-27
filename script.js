function comecar() { // Essa função esconde a página inicial e exibe o formulário do Quiz
    document.getElementById("paginaInicial").style.display = "none";
    document.getElementById("formulario").style.display = "block";
    document.getElementById("Resultado").style.display = "none";
    document.getElementById("descPersonagem").innerHTML = '';
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

    let descricao ='';

    switch(vencedor) {
        case 0: // Merida
            descricao = 'Você é a Merida! Assim como Mérida, <br> sua independência e espírito aventureiro caracterizam sua personalidade. <br> Você não têm medo de lutar por aquilo em que acredita e sua força de vontade inspira as pessoas ao seu redor. <br>  Não importa qual seja o obstáculo, você sempre encontra uma maneira de superá-lo com determinação. <br> Mantenha-se forte e determinado(a), nunca perdendo a vontade de encontrar e seguir o seu próprio caminho. <br> Sua coragem é seu maior tesouro!';
            break;
        case 1: // Sulley
            descricao = 'Você é o Sulley!<br> Você é leal e cuidadoso(a). <br> Sempre pronto(a) para proteger e apoiar aqueles ao seu redor. Sua paciência e calma mesmo nos momentos difíceis farão de você um grande amigo. À primeira vista você pode parecer reservado(a), mas quem te conhece sabe que você tem um coração grande e está sempre disposto a ajudar. <br> Sua capacidade de manter a calma mesmo nas situações mais complexas é admirável. Continue sendo uma pessoa gentil e confiável que une as pessoas ao seu redor!';
            break;
        case 2: // Carl
            descricao = 'Você é o Carl! <br> Assim como Carl, você possui uma imensa sabedoria que adquiriu ao longo da vida. <br> Embora às vezes você prefira ficar na sua zona de conforto e valorizar a paz e o sossego, sua lealdade e seu grande coração brilham quando alguém realmente precisa de você. <br> Valorize o que é importante para você e nunca desista, mesmo em tempos difíceis. <br> Sua determinação e capacidade de pensar sobre a vida fazem de você uma boa pessoa. Continue a seguir seus princípios e viva com autenticidade!';
            break;
        case 3: // Edna
            descricao = 'Você é a Edna! <br> Você é uma pessoa criativa, eficiente e confiante. <br> Assim como Edna, você é uma pessoa que resolve problemas de forma rápida e direta, sem se perder em detalhes desnecessários. <br> Você tem um talento natural para a criatividade e a inovação e sempre adota uma abordagem única e elegante. <br> A confiança que têm em si  e nas suas capacidades é inspiradora. <br> Continue compartilhando suas grandes ideias com o mundo, afinal, você nasceu para brilhar!';
            break;
    }
    
    document.getElementById("descPersonagem").innerHTML = descricao;
    document.getElementById('formulario').style.display = 'none';
    document.getElementById('Resultado').style.display = 'block';
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
