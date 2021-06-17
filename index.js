const execucao = {
    andamento : false,
    n1 : "",
    n2 : 0,
    sinal : "",
    limite : 0,
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
        if (execucao.limite < 8) {           
            let numeroVisor = visor.exibido()
            if (execucao.andamento == false && numeroVisor == "") {
                visor.atualiza(numero)
                execucao.n1 = numero
                execucao.limite = execucao.limite + 1
            } else if (execucao.andamento == false && numero != 0 && execucao.limite == 0) {
                visor.atualiza(numero)
                execucao.n1 = numero
                execucao.limite = execucao.limite + 1
            } else if (execucao.andamento == false && numeroVisor != "0") {
                visor.atualiza(numeroVisor + numero)
                execucao.n1 = numeroVisor + numero
                execucao.limite = execucao.limite + 1
            } else if (execucao.andamento == true && execucao.n2 == "" && numero != 0) {
                visor.atualiza(numero)
                execucao.n2 = numero
                execucao.limite = execucao.limite + 1
            } else if (execucao.andamento == true && numero != 0 && execucao.limite == 0) {
                visor.atualiza(numero)
                execucao.n2 = numero
                execucao.limite = execucao.limite + 1
            } else if (execucao.andamento == true && execucao.n2 != "") {
                visor.atualiza(numeroVisor + numero)
                execucao.n2 = numeroVisor + numero
                execucao.limite = execucao.limite + 1
            }
        }
    },
    ponto : function(ponto) {
        let numeroVisor = visor.exibido()
        if (execucao.andamento == false) {
            if (execucao.n1 == "") {
                visor.atualiza("0" + ponto)
                execucao.n1 = "0" + ponto
                execucao.limite = execucao.limite + 1
            } else if (numeroVisor.indexOf(ponto) == -1) {
                visor.atualiza(numeroVisor + ponto)
                execucao.n1 = numeroVisor + ponto
                execucao.limite = execucao.limite + 1
            }
        } else {
            if (execucao.n2 == "") {
                visor.atualiza("0" + ponto)
                execucao.n2 = "0" + ponto
                execucao.limite = execucao.limite + 1
            } else if (numeroVisor.indexOf(ponto) == -1) {
                visor.atualiza(numeroVisor + ponto)
                execucao.n2 = numeroVisor + ponto
                execucao.limite = execucao.limite + 1
            }
        }
    }
};

const limpar = {
    ce : function() {
        visor.atualiza("0")
        execucao.andamento = false
        execucao.n1 = ""
        execucao.n2 = ""
        execucao.sinal = ""
        execucao.limite = 0
    },
    delete : function() {
        if (execucao.limite > 0) {
            let numeroVisor = visor.exibido()
            let fatiado = fatiar(numeroVisor)
            if (execucao.andamento == false) {
                if (numeroVisor.length == 1) {
                    visor.atualiza("0")
                    execucao.n1 = "0"
                    execucao.limite = execucao.limite - 1
                } else {
                    visor.atualiza(fatiado)
                    execucao.n1 = fatiado
                    execucao.limite = execucao.limite - 1
                }
            } else if (execucao.andamento == true) {
                if (numeroVisor.length == 1) {
                    visor.atualiza("0")
                    execucao.n2 = "0"
                    execucao.limite = execucao.limite - 1
                } else {
                    visor.atualiza(fatiado)
                    execucao.n2 = fatiado
                    execucao.limite = execucao.limite - 1
                }
            }
        }
    }
};

const operacao = {
    matematica : function(operador) {
        if (execucao.n1 != "") {
            execucao.andamento = true
            execucao.n2 = 0
            execucao.sinal = operador
            execucao.limite = 0
        } 
    },
    igual : function() {
        if (execucao.n1 != "" && execucao.sinal != "") {
            if (execucao.n2 == 0) { execucao.n2 = execucao.n1 }
            let x = parses(execucao.n1)
            let y = parses(execucao.n2)
            if (execucao.sinal == "+") {
                let numero = x + y
                visor.atualiza(numero)
                execucao.andamento = false
                execucao.n1 = numero
                execucao.limite = 0
            } else if (execucao.sinal == "-") {
                let numero = x - y
                visor.atualiza(numero)
                execucao.andamento = false
                execucao.n1 = numero
                execucao.limite = 0
            } else if (execucao.sinal == "*") {
                let numero = x * y
                visor.atualiza(numero)
                execucao.andamento = false
                execucao.n1 = numero
                execucao.limite = 0
            } else if (execucao.sinal == "/") {
                let numero = x / y
                visor.atualiza(numero)
                execucao.andamento = false
                execucao.n1 = numero
                execucao.limite = 0
            }
        }
    }
}

function fatiar(numeroVisor) {
    let numeroLength = numeroVisor.length
    let tamanhanhoDoCorte = numeroLength - 1
    return numeroVisor.slice(0, tamanhanhoDoCorte)
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
