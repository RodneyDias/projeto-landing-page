var Leonardo = window.document.getElementById("Leonardo")
var Samantha = window.document.getElementById("Samantha")
var Bruna = window.document.getElementById("Bruna")

var SetaDireita = window.document.getElementById('seta-direita')
var SetaEsquerda = window.document.getElementById("seta-esquerda")

function RolarParaDireita() {
    Leonardo.style = "display:none"
    Bruna.style = "display:flex"
    SetaDireita.style = "display:none"
    SetaEsquerda.style = "display:flex"
}

function RolarParaEsquerda() {
    Bruna.style = "display:none"
    Leonardo.style = "display:flex"
    SetaDireita.style = "display:flex"
    SetaEsquerda.style = "display.none"
}