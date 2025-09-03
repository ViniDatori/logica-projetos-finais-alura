let numSorteados = [];

// Função que sorteia os numeros:

function sortear() {

    let qtdDeNumero = document.querySelector("#input1").value;
    let intMin = document.querySelector("#input2").value;
    let intMax = document.querySelector("#input3").value;
    
    while(qtdDeNumero != 0) {
        intMin = Math.ceil(intMin);
        intMax = Math.floor(intMax) + 1;
        let numeroSorteado = Math.floor(Math.random() * (intMax - intMin) + intMin); // É necessário manter o "+ min" para que o valor sorteado seja maior ou igual ao número mínimo definido.
        numSorteados.push(numeroSorteado);
        qtdDeNumero--;
    }
    
    resultadoSorteio("#resultado","Números sorteados: " + numSorteados);

}

function resultadoSorteio(tag, texto) {
    let mensagem = document.querySelector(tag);
    mensagem.innerHTML = texto;
}