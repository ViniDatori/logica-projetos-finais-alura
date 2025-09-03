let numSorteados = [];

// Função que sorteia os numeros:

function sortear() {

    // let qtdDeNumero = document.getElementById("quantidade").value;
    
    let intMin = document.querySelector("#input2").value;
    let intMax = document.querySelector("#input3").value;
    
    intMin = Math.ceil(intMin);
    intMax = Math.floor(intMax) + 1;
    let numeroSorteado = Math.floor(Math.random() * (intMax - intMin) + intMin); // É necessário manter o "+ min" para que o valor sorteado seja maior ou igual ao número mínimo definido.
    
    numSorteados.push(numeroSorteado);
    console.log(numeroSorteado);
}