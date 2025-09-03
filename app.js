// Definição da lista de números sorteados e variáveis:

let numSorteados = [];
let botaoSortear;
let botaoReiniciar;

// Função que sorteia os numeros:

function sortear() {

    // Declaração de variáveis cujos valores serão fornecidos pelo usuário:
    let inputQtd = document.querySelector("#input1");
    let inputMin = document.querySelector("#input2");
    let inputMax = document.querySelector("#input3");
    
    let qtdDeNumero = parseInt(inputQtd.value);
    let intMin = parseInt(inputMin.value);
    let intMax = parseInt(inputMax.value);
    
    // Para evitar bugs:
    if(qtdDeNumero > intMax) {
        alert("A quantidade de números sorteados não pode ser maior que o intervalo máximo definido.");
        limparCampos();
    } else {
        if(qtdDeNumero > 20) {
            alert("A quantidade de números sorteados não pode ser maior que 20.")
            limparCampos();
        } else {
            // Estrutura de repetição que sorteia a quantidade de números definida pelo usuário sem repetir o mesmo número na mesma rodada:
            while (qtdDeNumero != 0) {

                intMin = Math.ceil(intMin);
                intMax = Math.floor(intMax);
                let numeroSorteado = Math.floor(Math.random() * (intMax - intMin + 1) + intMin);

                if (numSorteados.includes(numeroSorteado)) {

                    numeroSorteado = "";
                    intMin = Math.ceil(intMin);
                    intMax = Math.floor(intMax);
                    numeroSorteado = Math.floor(Math.random() * (intMax - intMin + 1) + intMin);

                } else {
                    numSorteados.push(numeroSorteado);
                    qtdDeNumero--;
                }
            }

            // Manipulação de texto que mostra ao usuário os números sorteados:
            resultadoSorteio("#resultado", "Números sorteados: " + numSorteados);

            // Manipulação do Botão Reiniciar:
            botaoReiniciar = document.getElementById("btn-reiniciar");
            botaoReiniciar.style.cursor = "pointer";
            botaoReiniciar = document.getElementById("btn-reiniciar").removeAttribute("disabled");

            // Manipulação do Botão Sortear:
            botaoSortear = document.getElementById("btn-sortear");
            botaoSortear.style.cursor = "not-allowed";
            botaoSortear = document.getElementById("btn-sortear").setAttribute("disabled", true);
        }
    }
}

// Função para exibir os números sorteados na tela:

function resultadoSorteio(tag, texto) {
    let mensagem = document.querySelector(tag);
    mensagem.innerHTML = texto;
}

// Função para reiniciar o sorteador:

function reiniciar() {
    // Limpando a lista e os campos:
    numSorteados = [];
    limparCampos();

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

// Função que esvazia os campos de input ao reiniciar:

function limparCampos() {
    document.querySelector("#input1").value = "";
    document.querySelector("#input2").value = "";
    document.querySelector("#input3").value = "";
}