const execucao = {
    andamento : false,
    n1 : "",
    n2 : "",
    simbolo : "",
    total : 0,
    resposta : false
}

const visor = {
    atualiza : function(numero) {
        if (execucao.resposta == false) {
            document.getElementById("visor").innerHTML = numero
        } else if (execucao.resposta == true) {
            document.getElementById("visor").innerHTML = numero
        }
    },
    exibido : function() {
        return document.getElementById("visor").innerHTML
    }
};

const envia = {
    numero : function(numero) {
        if (execucao.total < 8) {           
            resposta()
            let numeroVisor = visor.exibido()
            if (execucao.andamento == false && numeroVisor == "") {
                execucao.total = execucao.total + 1
                visor.atualiza(numero)
                execucao.n1 = numero
            } else if (execucao.andamento == false && numeroVisor == "0") {
                execucao.total = execucao.total + 1
                visor.atualiza(numero)
                execucao.n1 = numero
            } else if (execucao.andamento == false) {
                execucao.total = execucao.total + 1
                visor.atualiza(numeroVisor + numero)
                execucao.n1 = numeroVisor + numero
            } else if (execucao.andamento == true && execucao.n2 == "") {
                execucao.total = execucao.total + 1
                visor.atualiza(numero)
                execucao.n2 = numero
            } else if (execucao.andamento == true && numeroVisor == "0") {
                execucao.total = execucao.total + 1
                visor.atualiza(numero)
                execucao.n2 = numero
            } else if (execucao.andamento == true && execucao.n2 != "") {
                execucao.total = execucao.total + 1
                visor.atualiza(numeroVisor + numero)
                execucao.n2 = numeroVisor + numero
            }
        }
        function resposta() {
            if (execucao.resposta == true) {
                execucao.resposta = false
                document.getElementById("visor").innerHTML = ''
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
        execucao.simbolo = ""
        execucao.total = 0
        execucao.resposta = false

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
        if (execucao.andamento == false && execucao.n1 != "") {
            execucao.andamento = true
            execucao.simbolo = operador
            execucao.total = 0
        }
    },
    igual : function() {
        if (execucao.andamento == true && execucao.n2 != "") {
            let x = parses(execucao.n1)
            let y = parses(execucao.n2)
            if (execucao.simbolo == "+") {
                let numero = x + y
                reset(numero)
            } else if (execucao.simbolo == "-") {
                console.log(x, y)
                let numero = x - y
                reset(numero)
            } else if (execucao.simbolo == "*") {
                let numero = x * y
                reset(numero)
            } else if (execucao.simbolo == "/") {
                let numero = x / y
                reset(numero)
            }
        }
        function reset(numero) {
            visor.atualiza(numero)
            execucao.andamento = false
            execucao.n1 = ""
            execucao.n2 = ""
            execucao.simbolo = ""
            execucao.total = 0
            execucao.resposta = true
        }
    }
}

function parses(numero) {
    if (typeof numero === 'number') {
        return numero
    } else if (numero.indexOf(".") == -1) {
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