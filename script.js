
// função para esconder a div inicial

function comecar(){
document.getElementById("paginaInicial").style.display = "none";
document.getElementById("formulario").style.display = "block";
document.getElementById("startButton").addEventListener("click", function() {
    // Mostra o container do quiz
    document.getElementById("formulario").style.display = "block";
    
    // Rola a página para as perguntas
    document.getElementById("formulario").scrollIntoView({ behavior: "smooth" });
});

}
