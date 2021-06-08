const execucao = {
    andamento : false,
    n1 : "",
    n2 : "",
    operacao : ""

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
        execucao.operacao = ""
    },
    ce : function() {
        let numeroVisor = visor.exibido()
        let fatiado = fatiar(numeroVisor)
        if (execucao.andamento == false) {
            if (numeroVisor.length == 1) {
                visor.atualiza(0)
                execucao.n1 = ""
            } else {
                visor.atualiza(fatiado)
                execucao.n1 = fatiado
            }
        } else if (execucao.andamento == true) {
            if (numeroVisor.length == 1) {
                visor.atualiza(0)
                execucao.n2 = ""
            } else {
                visor.atualiza(fatiado)
                execucao.n2 = fatiado
            }
        }
        function fatiar(numero) {
            let numeroLength = numero.length
            let tamanhanhoDoCorte = numeroLength - 1
            return numero.slice(0, tamanhanhoDoCorte)
        }
    }
};

const operadores = {
    soma : function(operador) {
        if (execucao.andamento == false && operador == "+") {
            execucao.andamento = true
            execucao.operacao = operador
        }
    },
    igual : function(operador) {
        if (execucao.andamento == true && operador == "=" && execucao.n2 != "") {
            console.log(execucao.n1, execucao.operacao, execucao.n2)
        }
    }
}


