const visor = {
    atualiza : function(numero) {
        document.getElementById("visor").innerHTML = numero
    },
    numero : function() {
        return document.getElementById("visor").innerHTML
    }
}

const envia = {
    numero : function(numero) {
        let numeroVisor = visor.numero()
        let numeroVisorSemVirgula = numeroVisor.replace(",", "")
        if (numeroVisorSemVirgula.length < 8) {
            if (numero == 0 && numero == numeroVisor) {
                visor.atualiza(0)
            } else {
                if (numeroVisor == 0) {
                    visor.atualiza(numero)
                } else {
                    visor.atualiza(numeroVisor + numero) 
                }
            }
        }
    },
    virgula : function(virgula) {
        let numeroVisor = visor.numero()
         if (numeroVisor.indexOf(virgula) == -1) {
            visor.atualiza(numeroVisor + virgula)
        }
    }
};

function limpaUltimo() {
    let numeroVisor = visor.numero()
    if (numeroVisor.length == 1) {
        visor.atualiza(0)
    } else {
        let numeroLength = numeroVisor.length
        let tamanhanhoDoCorte = numeroLength - 1
        let fatiado = numeroVisor.slice(0, tamanhanhoDoCorte)
        visor.atualiza(fatiado)
    }
}

function limparTudo() {
    visor.atualiza(0)
}