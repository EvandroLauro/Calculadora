
function atualizaVisor(numero) {
    document.getElementById("visor").innerHTML = numero
}

function enviaNumero(numero) {
    let numeroVisor = document.getElementById("visor").innerHTML
    let numeroVisorSemVirgula = numeroVisor.replace(",", "")
    if (numeroVisorSemVirgula.length < 8) {
        if (numero == 0 && numero == numeroVisor) {
            atualizaVisor(0)
        } else {
            if (numeroVisor == 0) {
                atualizaVisor(numero)
            } else {
                atualizaVisor(numeroVisor + numero) 
            }
        }
    }
}

function enviaVirgula(virgula) {
    let numeroVisor = document.getElementById("visor").innerHTML
    if (numeroVisor.indexOf(virgula) == -1) {
        atualizaVisor(numeroVisor + virgula)
    }
}

function limpaUltimo() {
    let numeroVisor = document.getElementById("visor").innerHTML
    if (numeroVisor.length == 1) {
        atualizaVisor(0)
    } else {
        let numeroLength = numeroVisor.length
        let tamanhanhoDoCorte = numeroLength - 1
        let fatiado = numeroVisor.slice(0, tamanhanhoDoCorte)
        atualizaVisor(fatiado)
    }
}

function limparTudo() {
    atualizaVisor(0)
}

