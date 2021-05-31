var numeroVisor = {
    numVisor : "0"
}

function atualizaVisor(numero) {
    document.getElementById("visor").innerHTML = numero;
}

function enviaNumero(numero) {
    if (numeroVisor.numVisor.length < 8) {
        if (numero == "0" && numero == numeroVisor.numVisor) {
            numeroVisor.numVisor = "0"
        } else {
            if (numeroVisor.numVisor == "0") {
                numeroVisor.numVisor = numero
            } else {
                numeroVisor.numVisor = numeroVisor.numVisor + numero 
            }
        }
        atualizaVisor(numeroVisor.numVisor)
    }
}

function limpa() {
    if (numeroVisor.numVisor.length == 1) {
        atualizaVisor(numeroVisor.numVisor = "0")
    } else {
        let numero = numeroVisor.numVisor
        let numeroLength =  numero.length
        let tamanhanhoDoCorte = numeroLength - 1
        let fatiado = numero.slice(0, tamanhanhoDoCorte)
        atualizaVisor(numeroVisor.numVisor = fatiado)
    }
}

function limparTudo() {
    document.getElementById("visor").innerHTML = 0
    numeroVisor.numVisor = "0"
}

