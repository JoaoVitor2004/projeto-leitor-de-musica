const botaoPlay = document.getElementById('play-pause')
const audio = document.getElementById('audio')
const botaoAvancar = document.getElementById('proximo')
const botaoRetornar = document.getElementById('anterior')
const nomeMusica = document.getElementById('faixa')
const img = document.getElementById('capa')

const quant = 3
let taTocando = 0
let musicaAtual = 1
let imagemAtual = 1

function tocarFaixa() {
    audio.play();
    botaoPlay.classList.remove('bi-play-circle-fill')
    botaoPlay.classList.add('bi-pause-circle-fill')
}

function pausarFaixa() {
    audio.pause();
    botaoPlay.classList.add('bi-play-circle-fill')
    botaoPlay.classList.remove('bi-pause-circle-fill')
}

function tocarOuPausar() {
    if (taTocando === 0) {
        tocarFaixa()
        taTocando = 1
    } else {
        pausarFaixa()
        taTocando = 0
    }
}

function avancarFaixa() {

    if (musicaAtual >= quant) {
        musicaAtual = 1
        imagemAtual = 1
    } else {
        musicaAtual += 1
        imagemAtual += 1
    }
    audio.src = 'audio/postmalone/' + musicaAtual + '.mp3'
    img.src = 'images/' + imagemAtual + '.jpg'
    tocarFaixa();
    nomeMusica.innerText = 'Música ' + musicaAtual
}

function voltarfaixa() {
    if (musicaAtual === 1) {
        musicaAtual = quant
        imagemAtual = quant
    } else {
        musicaAtual -= 1
        imagemAtual -= 1
    }
    audio.src = 'audio/postmalone/' + musicaAtual + '.mp3'
    img.src = 'images/' + imagemAtual + '.jpg'
    tocarFaixa()
    nomeMusica.innerText = 'Música ' + musicaAtual
}

botaoPlay.addEventListener('click', tocarOuPausar);
botaoAvancar.addEventListener('click', avancarFaixa);
botaoRetornar.addEventListener('click', voltarfaixa);