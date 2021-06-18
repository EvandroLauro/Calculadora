const execucao = {
    n1 : 0,
    n2 : 0,
    ponto : false,
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
            if (execucao.sinal == "" && numero == 0 && execucao.limite == 0) {
                visor.atualiza(numero)
                execucao.n1 = numero
            } else if (execucao.sinal == "" && numeroVisor == 0 && execucao.limite == 0) {
                visor.atualiza(numero)
                execucao.n1 = numero
                execucao.limite = execucao.limite + 1
            } else if (execucao.sinal == "" && numero != 0 && execucao.limite == 0) {
                visor.atualiza(numero)
                execucao.n1 = numero
                execucao.limite = execucao.limite + 1
            } else if (execucao.sinal == "" && numeroVisor == "0.") {
                visor.atualiza(numeroVisor + numero)
                execucao.n1 = numeroVisor + numero
                execucao.limite = execucao.limite + 1
            } else if (execucao.sinal == "" && numeroVisor != 0) {
                visor.atualiza(numeroVisor + numero)
                execucao.n1 = numeroVisor + numero
                execucao.limite = execucao.limite + 1
            } else if (execucao.sinal != "" && numero == 0 && execucao.limite == 0) {
                visor.atualiza(numero)
                execucao.n2 = numero
            } else if (execucao.sinal != "" && numeroVisor == 0 && execucao.limite == 0) {
                visor.atualiza(numero)
                execucao.n2 = numero
                execucao.limite = execucao.limite + 1
            } else if (execucao.sinal != "" && numero != 0 && execucao.limite == 0) {
                visor.atualiza(numero)
                execucao.n2 = numero
                execucao.limite = execucao.limite + 1
            } else if (execucao.sinal != "" && numeroVisor == "0.") {
                visor.atualiza(numeroVisor + numero)
                execucao.n2 = numeroVisor + numero
                execucao.limite = execucao.limite + 1
            } else if (execucao.sinal != "" && numeroVisor != 0) {
                visor.atualiza(numeroVisor + numero)
                execucao.n2 = numeroVisor + numero
                execucao.limite = execucao.limite + 1
            }
        }
    },
    ponto : function(ponto) {
        let numeroVisor = visor.exibido()
        if (execucao.ponto == false && execucao.sinal == "") {
            if (execucao.n1 == 0 || execucao.n1 == 0 && execucao.limite == 0) {
                visor.atualiza(0 + ponto)
                execucao.n1 = 0 + ponto
                execucao.ponto = true
                execucao.limite = execucao.limite + 1
            }else if (numeroVisor.indexOf(ponto) == -1) {
                visor.atualiza(numeroVisor + ponto)
                execucao.n1 = numeroVisor + ponto
                execucao.ponto = true
            }
        } else if (execucao.ponto == true && execucao.sinal != "") {
            if (execucao.n2 == 0) {
                visor.atualiza(0 + ponto)
                execucao.n2 = 0 + ponto
                execucao.ponto = false
                execucao.limite = execucao.limite + 1
            } else if (numeroVisor.indexOf(ponto) == -1) {
                visor.atualiza(numeroVisor + ponto)
                execucao.n2 = numeroVisor + ponto
                execucao.ponto = false
            }
        }
    }
};

const limpar = {
    ce : function() {
        visor.atualiza(0)
        execucao.n1 = 0
        execucao.n2 = 0
        execucao.ponto = false
        execucao.sinal = ""
        execucao.limite = 0
    },
    delete : function() {
        if (execucao.limite > 0) {
            let numeroVisor = visor.exibido()
            let fatiado = fatiar(numeroVisor)
            let ult = numeroVisor.substr(-1, 1)
            if (execucao.sinal == "") {
                if (numeroVisor.length == 1 || numeroVisor == "0.") {
                    visor.atualiza(0)
                    execucao.n1 = 0
                    execucao.ponto = false
                    execucao.limite = execucao.limite - 1
                } else {
                    visor.atualiza(fatiado)
                    if (ult != ".") {
                        execucao.n1 = fatiado
                        execucao.limite = execucao.limite - 1
                    } else if (ult == ".") {
                        execucao.n1 = fatiado
                        execucao.ponto = false
                    }
                }
            } else if (execucao.sinal != "") {
                if (numeroVisor.length == 1 || numeroVisor == "0.") {
                    visor.atualiza(0)
                    execucao.n2 = 0
                    execucao.ponto = true
                    execucao.limite = execucao.limite - 1
                } else {
                    visor.atualiza(fatiado)
                    if (ult != ".") {
                        execucao.n2 = fatiado
                        execucao.limite = execucao.limite - 1
                    } else if (ult == ".") {
                        execucao.n2 = fatiado
                        execucao.ponto = true
                    }
                }
            }
        }
    }
};

const operacao = {
    matematica : function(operador) {
        if (execucao.n1 == 0) {
            reconfig.matematica(operador)
        } else if (execucao.sinal == "")  {
            reconfig.matematica(operador)
        } else if (execucao.limite == 0) {
            reconfig.matematica(operador)
        } else if (execucao.sinal != "") {
            let resposta = operacao.calculando()
            reconfig.matematica_E_igual(resposta, operador)
        }
    },
    igual : function() {
        if (execucao.n1 != "" && execucao.sinal != "" || execucao.n1 != null && execucao.sinal != "") {
            let resultado = operacao.calculando()
            reconfig.igual(resultado)
        }
    },
    calculando : function() {
        let {x, y} = reconfig.valores()
        if (execucao.sinal == "+") {
            return numero = x + y
        } else if (execucao.sinal == "-") {
            return numero = x - y
        } else if (execucao.sinal == "*") {
            return numero = x * y
        } else if (execucao.sinal == "/") {
            return numero = x / y
        }
    }
}

const reconfig = {
    matematica : function(operador) {
        execucao.n2 = 0
        execucao.ponto = true
        execucao.sinal = operador
        execucao.limite = 0
    },
    igual : function(numero) {
        visor.atualiza(numero)
        execucao.n1 = numero
        execucao.ponto = false
        execucao.limite = 0
   },
    matematica_E_igual : function(numero, operador){
        visor.atualiza(numero)
        execucao.n1 = numero
        execucao.n2 = 0
        execucao.ponto = true
        execucao.sinal = operador
        execucao.limite = 0
   },
   valores : function() {
        if (execucao.n2 == 0) { execucao.n2 = execucao.n1 }
        let x = parses(execucao.n1)                         
        let y = parses(execucao.n2)
        return {x, y}         
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
