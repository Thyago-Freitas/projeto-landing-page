var setaDireita = window.document.getElementById("seta-direita")
var Leornado = window.document.getElementById("leonardo")
var Samantha = window.document.getElementById("samantha")
var Bruna = window.document.getElementById("bruna")
var setaEsquerda = window.document.getElementById("seta-esquerda")

function RolarParaDireita() {
    Leornado.style ="display:none"
    Bruna.style ="display:flex;"
    Samantha.style ="margin-left:0px"
    setaDireita.style ="display:none"
    setaEsquerda.style ="display:flex; margin-top:75%; margin-left:-30px"
}

function RolarParaEsquerda() {
    Leornado.style ="display:flex"
    Bruna.style ="display:none"
    Samantha.style ="margin-left:25px"
    setaDireita.style ="display:flex"
    setaEsquerda.style ="display:none"
}