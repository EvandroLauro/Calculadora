const execucao = {
    andamento : false,
    n1 : "",
    n2 : "",
    simbolo : ""

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
        let numeroVisorSemPonto = numeroVisor.replace(".", "")
        if (numeroVisorSemPonto.length < 8) { 
            if (execucao.andamento == false && numeroVisor == "0") {
                visor.atualiza(numero)
                execucao.n1 = numero
            } else if (execucao.andamento == false) {
                visor.atualiza(numeroVisor + numero)
                execucao.n1 = numeroVisor + numero
            } else if (execucao.andamento == true && execucao.n2 == "") {
                visor.atualiza(numero)
                execucao.n2 = numero
            } else if (execucao.andamento == true && numeroVisor == "0") {
                visor.atualiza(numero)
                execucao.n2 = numero
            } else if (execucao.andamento == true && execucao.n2 != "") {
                visor.atualiza(numeroVisor + numero)
                execucao.n2 = numeroVisor + numero
            }   
        }
    },
    ponto : function(ponto) {
        let numeroVisor = visor.exibido()
        if (execucao.andamento == false) {
            if (numeroVisor.indexOf(ponto) == -1) {
                visor.atualiza(numeroVisor + ponto)
                execucao.n1 = numeroVisor + ponto
            }
        } else {
            if (execucao.n2 == "") {
                visor.atualiza("0" + ponto)
                execucao.n2 = "0" + ponto
            } else if (numeroVisor.indexOf(ponto) == -1) {
                visor.atualiza(numeroVisor + ponto)
                execucao.n2 = numeroVisor + ponto
            }
        }
    }
};

const limpar = {
    c : function() {
        visor.atualiza("0")
        execucao.andamento = false
        execucao.n1 = ""
        execucao.n2 = ""
        execucao.operacao = ""
    },
    ce : function() {
        let numeroVisor = visor.exibido()
        let fatiado = fatiar(numeroVisor)
        if (execucao.andamento == false) {
            if (numeroVisor.length == 1) {
                visor.atualiza("0")
                execucao.n1 = ""
            } else {
                visor.atualiza(fatiado)
                execucao.n1 = fatiado
            }
        } else if (execucao.andamento == true) {
            if (numeroVisor.length == 1) {
                visor.atualiza("0")
                execucao.n2 = ""
            } else {
                visor.atualiza(fatiado)
                execucao.n2 = fatiado
            }
        }
    }
};

const operacao = {
    matematica : function(operador) {
        if (execucao.andamento == false) {
            execucao.andamento = true
            execucao.simbolo = operador
        }
    },
    igual : function() {
        if (execucao.andamento == true && execucao.n2 != "") {
            let x = parses(execucao.n1)
            let y = parses(execucao.n2)
            if (execucao.simbolo == "+") {
                console.log(x + y)
            } else if (execucao.simbolo == "-") {
                console.log(x - y)
            } else if (execucao.simbolo == "*") {
                console.log(x * y)
            } else if (execucao.simbolo == "/") {
                console.log(x / y)
            }
        }
    }
}

function parses(numero) {
    if (numero.indexOf(".") == -1) {
        return parseInt(numero)
    } else if (numero.indexOf(".") == numero.length - 1) {
        return parseInt(fatiar(numero))
    } else {
        return parseFloat(numero)
    }
}

function fatiar(numeroVisor) {
    let numeroLength = numeroVisor.length
    let tamanhanhoDoCorte = numeroLength - 1
    return numeroVisor.slice(0, tamanhanhoDoCorte)
}

