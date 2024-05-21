function calcularMedia() {
    // Obtém os valores das notas do formulário
    let nota1 = parseFloat(document.getElementById("nota1").value) || 0;
    let nota2 = parseFloat(document.getElementById("nota2").value) || 0;
    let nota3 = parseFloat(document.getElementById("nota3").value) || 0;
    let nota4 = parseFloat(document.getElementById("nota4").value) || 0;

    // Calcula a média das notas
    let media = (nota1 + nota2 + nota3 + nota4) / 4;

    // Verifica a situação do aluno
    let resultado = "";
    if (media >= 7) {
        resultado = "Aluno aprovado com média: " + media.toFixed(2);
    } else if (media >= 5) {
        resultado = "Aluno em recuperação com média: " + media.toFixed(2);
    } else {
        resultado = "Aluno reprovado com média: " + media.toFixed(2);
    }

    // Exibe o resultado
    document.getElementById("resultado").innerText = resultado;
}

