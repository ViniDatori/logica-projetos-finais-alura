// Definição da lista de números sorteados e variáveis:

let numSorteados = [];
let qtdDeNumero;
let intMin;
let intMax;
let botaoSortear;
let botaoReiniciar;

// Função que sorteia os numeros:

function sortear() {

    // Declaração de variáveis cujos valores serão os números fornecidos pelo usuário:
    qtdDeNumero = document.querySelector("#input1").value;
    intMin = document.querySelector("#input2").value;
    intMax = document.querySelector("#input3").value;
    
    // Estrutura de repetição que sorteia a quantidade de números definida pelo usuário (FALTA IMPEDIR QUE SEJA SORTEADO O MESMO NÚMERO):
    while(qtdDeNumero != 0) {
        intMin = Math.ceil(intMin);
        intMax = Math.floor(intMax) + 1;
        let numeroSorteado = Math.floor(Math.random() * (intMax - intMin) + intMin); // É necessário manter o "+ min" para que o valor sorteado seja maior ou igual ao número mínimo definido.
        numSorteados.push(numeroSorteado);
        qtdDeNumero--;
    }
    
    // Manipulação de texto que mostra ao usuário os números sorteados:
    resultadoSorteio("#resultado","Números sorteados: " + numSorteados);
    
    // Manipulação do Botão Reiniciar:
    botaoReiniciar = document.getElementById("btn-reiniciar");
    botaoReiniciar.style.cursor = "pointer";
    botaoReiniciar = document.getElementById("btn-reiniciar").removeAttribute("disabled");

    // Manipulação do Botão Sortear:
    botaoSortear = document.getElementById("btn-sortear");
    botaoSortear.style.cursor = "not-allowed";
    botaoSortear = document.getElementById("btn-sortear").setAttribute("disabled", true);
}

// Função que exibe os números sorteados na tela:

function resultadoSorteio(tag, texto) {
    let mensagem = document.querySelector(tag);
    mensagem.innerHTML = texto;
}

// Função para reiniciar o sorteador:

function reiniciar() {
    console.log("Está funcionando.");
    // Limpando a lista e os campos:
    numSorteados = [];
    qtdDeNumero.value = "";
    intMin.value = "";
    intMax.value = "";

    // Manipulando a mensagem ao usuário para retornar ao padrão:
    resultadoSorteio("#resultado","Números sorteados:  nenhum até agora");

    // Manipulando os botões:
    botaoReiniciar = document.getElementById("btn-reiniciar")
    botaoReiniciar.style.cursor = "not-allowed";
    botaoReiniciar = document.getElementById("btn-reiniciar").setAttribute("disabled", true);
    botaoSortear = document.getElementById("btn-sortear")
    botaoSortear.style.cursor = "pointer";
    botaoSortear = document.getElementById("btn-sortear").removeAttribute("disabled");
}