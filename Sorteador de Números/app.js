let numSorteados = [];

// Função que sorteia os numeros:

function sortear() {

    // Declaração de variáveis cujos valores serão os números fornecidos pelo usuário:
    let qtdDeNumero = document.querySelector("#input1").value;
    let intMin = document.querySelector("#input2").value;
    let intMax = document.querySelector("#input3").value;
    
    // Estrutura de repetição que sorteia a quantidade de números definida pelo usuário: 
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
    let botaoReiniciar = document.getElementById("btn-reiniciar");
    botaoReiniciar.style.cursor = "pointer";
    botaoReiniciar = document.getElementById("btn-reiniciar").removeAttribute("disabled");

    // Manipulação do Botão Sortear:
    let botaoSortear = document.getElementById("btn-sortear");
    botaoSortear.style.cursor = "not-allowed";
    botaoSortear = document.getElementById("btn-sortear").setAttribute("disabled", true);


}

// Função que exibe os números sorteados na tela:

function resultadoSorteio(tag, texto) {
    let mensagem = document.querySelector(tag);
    mensagem.innerHTML = texto;
}

// Função para reiniciar o sorteador:

