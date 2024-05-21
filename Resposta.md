Atividade proposta para desenvolver a habilidade de escrita de algoritmos

Escreva um algoritmo que calcule a média das notas de um aluno em quatro avaliações.
Devem ser observados os seguintes critérios:
Sempre considerar as notas das 4 avaliações, caso o aluno não tenha realizado, deve-se atribuir, para cada avaliação não realizada, a nota igual a zero;
Realize o cálculo da média;
Caso a média seja maior ou igual a 7, informe que o aluno está aprovado;
Caso a média seja maior ou igual a 5, informe que o aluno está em recuperação;
Caso a média seja menor do que 5, informe que o aluno está reprovado;

Escreva um algoritmo que calcule a média das notas de um aluno em quatro avaliações.
Devem ser observados os seguintes critérios:
Sempre considerar as notas das 4 avaliações, caso o aluno não tenha realizado, deve-se atribuir, para cada avaliação não realizada, a nota igual a zero;
Realize o cálculo da média;
Caso a média seja maior ou igual a 7, informe que o aluno está aprovado;
Caso a média seja maior ou igual a 5, informe que o aluno está em recuperação;
Caso a média seja menor do que 5, informe que o aluno está reprovado;
Descrição do Algoritmo para Calcular a Média das Notas de um Aluno
Objetivo
Desenvolver um algoritmo que calcule a média das notas de um aluno em quatro avaliações e determine sua situação (aprovado, em recuperação ou reprovado) com base na média obtida.

Passos do Algoritmo
Entrada das Notas:

Receber as notas das quatro avaliações do aluno.
Caso alguma nota não tenha sido fornecida (o aluno não realizou a avaliação), atribuir nota zero para essa avaliação.
Cálculo da Média:

Somar as quatro notas.
Dividir a soma das notas por 4 para obter a média.
Determinação da Situação do Aluno:

Se a média for maior ou igual a 7, informar que o aluno está aprovado.
Se a média for maior ou igual a 5 e menor que 7, informar que o aluno está em recuperação.
Se a média for menor que 5, informar que o aluno está reprovado.


IINÍCIO

    // Passo 1: Entrada das notas
    LER nota1
    LER nota2
    LER nota3
    LER nota4
    
    // Passo 2: Verificar notas não realizadas e atribuir zero
    SE nota1 não foi fornecida ENTÃO
        nota1 <- 0
    SE nota2 não foi fornecida ENTÃO
        nota2 <- 0
    SE nota3 não foi fornecida ENTÃO
        nota3 <- 0
    SE nota4 não foi fornecida ENTÃO
        nota4 <- 0

    // Passo 3: Cálculo da média
    media <- (nota1 + nota2 + nota3 + nota4) / 4

    // Passo 4: Determinação da situação do aluno
    SE media >= 7 ENTÃO
        IMPRIMIR "Aluno aprovado com média: ", media
    SENÃO SE media >= 5 ENTÃO
        IMPRIMIR "Aluno em recuperação com média: ", media
    SENÃO
        IMPRIMIR "Aluno reprovado com média: ", media

FIM

Implementação em JavaScript
javascript
Copiar código
function calcularMedia(nota1, nota2, nota3, nota4) {
    // Passo 2: Verificar notas não realizadas e atribuir zero
    nota1 = nota1 || 0;
    nota2 = nota2 || 0;
    nota3 = nota3 || 0;
    nota4 = nota4 || 0;

    // Passo 3: Cálculo da média
    let media = (nota1 + nota2 + nota3 + nota4) / 4;

    // Passo 4: Determinação da situação do aluno
    let resultado;
    if (media >= 7) {
        resultado = "Aluno aprovado com média: " + media.toFixed(2);
    } else if (media >= 5) {
        resultado = "Aluno em recuperação com média: " + media.toFixed(2);
    } else {
        resultado = "Aluno reprovado com média: " + media.toFixed(2);
    }

    return resultado;
}

// Exemplos de uso:
console.log(calcularMedia(8, 7.5, 6, 9)); // Aprovado
console.log(calcularMedia(5, 5.5, 4, 6)); // Recuperação
console.log(calcularMedia(3, 4.5, 2, 1)); // Reprovado

Conclusão
Este algoritmo simples permite calcular a média das notas de um aluno, tratar casos de notas não fornecidas atribuindo zero, e determinar a situação do aluno com base na média calculada. A implementação em JavaScript permite aplicar este algoritmo em uma aplicação web de forma interativa.git status
