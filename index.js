const execucao = {
    andamento : false,
    n1 : "",
    n2 : ""
}

const visor = {
    atualiza : function(numero) {
        document.getElementById("visor").innerHTML = numero
    },
    exibido : function() {
        return document.getElementById("visor").innerHTML
    }
};

const envia = {
    numero : function(numero) {
        let numeroVisor = visor.exibido()
        let numeroVisorSemVirgula = numeroVisor.replace(",", "")
        if (numeroVisorSemVirgula.length < 8) { 
            if (execucao.andamento == false && numeroVisor == 0) {
                visor.atualiza(numero)
                execucao.n1 = numero
            } else if (execucao.andamento == false) {
                visor.atualiza(numeroVisor + numero)
                execucao.n1 = numeroVisor + numero
            } else if (execucao.andamento == true && execucao.n2 == "") {
                visor.atualiza(numero)
                execucao.n2 = numero
            } else if (execucao.andamento == true && numeroVisor == 0) {
                visor.atualiza(numero)
                execucao.n2 = numero
            } else if (execucao.andamento == true && execucao.n2 != "") {
                visor.atualiza(numeroVisor + numero)
                execucao.n2 = numeroVisor + numero
            }   
        }
    },
    virgula : function(virgula) {
        let numeroVisor = visor.exibido()
        if (execucao.andamento == false) {
            if (numeroVisor.indexOf(virgula) == -1) {
                visor.atualiza(numeroVisor + virgula)
                execucao.n1 = numeroVisor + virgula
            }
        } else {
            if (execucao.n2 == "") {
                visor.atualiza(0 + virgula)
                execucao.n2 = 0 + virgula
            } else if (numeroVisor.indexOf(virgula) == -1) {
                visor.atualiza(numeroVisor + virgula)
                execucao.n2 = numeroVisor + virgula
            }
        }
    }
};

const limpar = {
    c : function() {
        visor.atualiza(0)
        execucao.andamento = false
        execucao.n1 = ""
        execucao.n2 = ""
    },
    ce : function() {
        if (execucao.andamento == false) {
            let numeroVisor = visor.exibido()
            if (numeroVisor.length == 1) {
                visor.atualiza(0)
                execucao.n1 = ""
            } else {
                visor.atualiza(fatiar(numeroVisor))
                execucao.n1 = fatiar(numeroVisor)
            }
        } else if (execucao.andamento == true) {
            let numeroVisor = visor.exibido()
            if (numeroVisor.length == 1) {
                visor.atualiza(0)
                execucao.n2 = ""
            } else {
                visor.atualiza(fatiar(numeroVisor))
                execucao.n2 = fatiar(numeroVisor)
            }
        }
        function fatiar(numeroVisor) {
            let numeroLength = numeroVisor.length
            let tamanhanhoDoCorte = numeroLength - 1
            return fatiado = numeroVisor.slice(0, tamanhanhoDoCorte)
        }
    }
};

function operacao(operador) {
    if (execucao.n2 == "") {
        execucao. andamento = true
        let numeroVisor = visor.exibido()
        execucao.n1 = numeroVisor + operador
    }
}


