const botao = document.getElementById('botao')
const cor = document.getElementById('cor')
const span = document.querySelector('.color')

botao.addEventListener('click', () => {
    const corGerada = geraCorAleatoria()
    cor.innerHTML = corGerada
    span.style.color = corGerada
    document.body.style.backgroundColor = corGerada;
})

function geraCorAleatoria(){
    let corHex = '#'
    const letraHex = '0123456789abcdef'

    for(let i = 0; i < 6; i++){
        corHex += letraHex[Math.floor(Math.random() * 16)]
    }
    return corHex
}