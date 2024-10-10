const btSortear = document.querySelector('#btSortear')
btSortear.addEventListener('click', revelarSorteado)

function revelarSorteado() {
    const nomes = [
        "Bernar",
        "João",
        "Cristiano",
        "Natiele",
        "Stef",
        "Vitor",
        "Tamires",    
        "Stefani",
        "Francisca"
    ]    

    const txQtd = document.querySelector("#txQtd")
    const n = parseInt(txQtd.value)
    
    let nomesSorteados = []

    for(let i=0; i<n; i++) {
        let indiceNome = parseInt(Math.random()*nomes.length)
        let nomeSorteado = nomes[indiceNome]
        nomesSorteados.push(nomeSorteado)
        nomes.splice(indiceNome, 1)
    }

    const divNome = document.querySelector('#nome')
    
   divNome.innerText = nomesSorteados
}

