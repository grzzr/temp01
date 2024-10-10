const cores = [
    "red","green","blue",
    "cyan","magenta","yellow",
    "black","white"
]

const indiceCor = parseInt(Math.random()*cores.length)
const cor = cores[indiceCor]

const caixaDeCores = document.querySelector("#caixa-de-cores")
caixaDeCores.style.backgroundColor = cor;

// Sortear nomeDoArquivoDeImagem e atribuir ele a src
umElementoImg.src = nomeDoArquivoDeImagem