const execucao = {
    status : false,
    n1 : 0,
    n2 : 0,
    pontoN1 : false,
    pontoN2: false,
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

            if (execucao.status == false  && execucao.limite == 0) {execucao.n2 = 0}

            if (execucao.status == false && numero == 0 && execucao.limite == 0) {
                visor.atualiza(numero)
                execucao.n1 = numero
            } else if (execucao.status == false && numeroVisor == 0 && execucao.limite == 0) {
                visor.atualiza(numero)
                execucao.n1 = numero
                execucao.limite = execucao.limite + 1
            } else if (execucao.status == false && numero != 0 && execucao.limite == 0) {
                visor.atualiza(numero)
                execucao.n1 = numero
                execucao.limite = execucao.limite + 1
            } else if (execucao.status == false && numeroVisor == "0.") {
                visor.atualiza(numeroVisor + numero)
                execucao.n1 = numeroVisor + numero
                execucao.limite = execucao.limite + 1
            } else if (execucao.status == false && numeroVisor != 0) {
                visor.atualiza(numeroVisor + numero)
                execucao.n1 = numeroVisor + numero
                execucao.limite = execucao.limite + 1
            } else if (execucao.status == true && numero == 0 && execucao.limite == 0) {
                visor.atualiza(numero)
                execucao.n2 = numero
            } else if (execucao.status == true && numeroVisor == 0 && execucao.limite == 0) {
                visor.atualiza(numero)
                execucao.n2 = numero
                execucao.limite = execucao.limite + 1
            } else if (execucao.status == true && numero != 0 && execucao.limite == 0) {
                visor.atualiza(numero)
                execucao.n2 = numero
                execucao.limite = execucao.limite + 1
            } else if (execucao.status == true && numeroVisor == "0.") {
                visor.atualiza(numeroVisor + numero)
                execucao.n2 = numeroVisor + numero
                execucao.limite = execucao.limite + 1
            } else if (execucao.status == true && numeroVisor != 0) {
                visor.atualiza(numeroVisor + numero)
                execucao.n2 = numeroVisor + numero
                execucao.limite = execucao.limite + 1
            }
        }
    },
    ponto : function(ponto) {
        let numeroVisor = visor.exibido()
        if (execucao.pontoN1 == false && execucao.status == false) {
            if (execucao.n1 == 0 || execucao.n1 == 0 && execucao.limite == 0) {
                visor.atualiza(0 + ponto)
                execucao.n1 = 0 + ponto
                execucao.pontoN1 = true
                execucao.limite = execucao.limite + 1
            }else if (numeroVisor.indexOf(ponto) == -1) {
                visor.atualiza(numeroVisor + ponto)
                execucao.n1 = numeroVisor + ponto
                execucao.pontoN1 = true
            }
        } else if (execucao.pontoN2 == false && execucao.status != false) {
            if (execucao.n2 == 0) {
                visor.atualiza(0 + ponto)
                execucao.n2 = 0 + ponto
                execucao.pontoN2 = true
                execucao.limite = execucao.limite + 1
            } else if (numeroVisor.indexOf(ponto) == -1) {
                visor.atualiza(numeroVisor + ponto)
                execucao.n2 = numeroVisor + ponto
                execucao.pontoN2 = true
            }
        }
    }
};

const limpar = {
    ce : function() {
        visor.atualiza(0)
        execucao.status = false
        execucao.n1 = 0
        execucao.n2 = 0
        execucao.pontoN1 = false
        execucao.pontoN2 = false
        execucao.sinal = ""
        execucao.limite = 0
    },
    delete : function() {
        if (execucao.limite > 0) {
            let numeroVisor = visor.exibido()
            let fatiado = fatiar(numeroVisor)
            let ultimo = numeroVisor.substr(-1, 1)
            if (execucao.status == false) {
                if (numeroVisor.length == 1 || numeroVisor == "0.") {
                    visor.atualiza(0)
                    execucao.n1 = 0
                    execucao.pontoN1 = false
                    execucao.limite = execucao.limite - 1
                } else {
                    visor.atualiza(fatiado)
                    if (ultimo != ".") {
                        execucao.n1 = fatiado
                        execucao.limite = execucao.limite - 1
                    } else if (ultimo == ".") {
                        execucao.n1 = fatiado
                        execucao.pontoN1 = false
                    }
                }
            } else if (execucao.status == true) {
                if (numeroVisor.length == 1 || numeroVisor == "0.") {
                    visor.atualiza(0)
                    execucao.n2 = 0
                    execucao.pontoN2 = false
                    execucao.limite = execucao.limite - 1
                } else {
                    visor.atualiza(fatiado)
                    if (ultimo != ".") {
                        execucao.n2 = fatiado
                        execucao.limite = execucao.limite - 1
                    } else if (ultimo == ".") {
                        execucao.n2 = fatiado
                        execucao.pontoN2 = false
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
        execucao.status = true
        execucao.n2 = 0
        execucao.pontoN1 = false
        execucao.sinal = operador
        execucao.limite = 0
    },
    igual : function(numero) {
        visor.atualiza(numero)
        execucao.status = false
        execucao.n1 = numero
        execucao.pontoN1 = false
        execucao.pontoN2 = false
        execucao.limite = 0
   },
    matematica_E_igual : function(numero, operador){
        visor.atualiza(numero)
        execucao.n1 = numero
        execucao.n2 = 0
        execucao.status = true
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
