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
        if (execucao.andamento == true) {
                visor.atualiza(numero)
                execucao.n2 = numero
                execucao.andamento = false
        } else {
            let numeroVisor = visor.exibido()
            let numeroVisorSemVirgula = numeroVisor.replace(",", "")
            if (numeroVisorSemVirgula.length < 8) {
                if (numero == 0 && numero == numeroVisor) {
                    visor.atualiza(0)
                } else {
                    if (execucao.n2 != "") {
                        visor.atualiza(numeroVisor + numero)
                        execucao.n2 = numeroVisor + numero
                    } else if (numeroVisor == 0) {
                        visor.atualiza(numero)
                        execucao.n1 = numero
                    } else {
                        visor.atualiza(numeroVisor + numero)
                        execucao.n1 = numeroVisor + numero
                    }
                }
            }
        }
    },
    virgula : function(virgula) {
        let numeroVisor = visor.exibido()
         if (numeroVisor.indexOf(virgula) == -1) {
            visor.atualiza(numeroVisor + virgula)
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
        let numeroVisor = visor.exibido()
        if (numeroVisor.length == 1) {
            visor.atualiza(0)
        } else {
            let numeroLength = numeroVisor.length
            let tamanhanhoDoCorte = numeroLength - 1
            let fatiado = numeroVisor.slice(0, tamanhanhoDoCorte)
            visor.atualiza(fatiado)
        }
    }
};

function operacao(operador) {
    if (execucao.n2 == "") {
        execucao. andamento = true
        let numeroVisor = visor.exibido()
        execucao.n1 = numeroVisor + operador
    } 
    
    /*
    if (numeroVisorSemVirgula != 0) {
        if (execucao.n1 == "") {
            execucao.n1 = numeroVisor + operador
            visor.atualiza(0)
            console.log(execucao.n1)
        } else if (execucao.n2 == ""){
            execucao.n2 = numeroVisor
            let resultado = eval(execucao.n1 + execucao.n2)
            execucao.n1 = resultado
            execucao.n2 = ""
            visor.atualiza(resultado)
            console.log("visor", visor.exibido())
            console.log("resultado", resultado)
        }
    }
    */
}

