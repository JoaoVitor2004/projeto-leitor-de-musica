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
        document.body.style.backgroundImage = 'linear-gradient(to right, #073A53, #073A53)'
    } else {
        musicaAtual += 1
        imagemAtual += 1
        if (musicaAtual === 2) {
            document.body.style.backgroundImage = 'linear-gradient(to right, #C7492F, #000)'
        } else if (musicaAtual === 3) {
            document.body.style.backgroundImage = 'linear-gradient(to right, #F1C856, #000)'
        }
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
        document.body.style.backgroundImage = 'linear-gradient(to right, #F1C856, #000)'
    } else {
        musicaAtual -= 1
        imagemAtual -= 1
        if (musicaAtual === 2) {
            document.body.style.backgroundImage = 'linear-gradient(to right, #C7492F, #000)'
        } else if (musicaAtual === 1) {
            document.body.style.backgroundImage = 'linear-gradient(to right, #073A53, #073A53)'
        }
    }
    audio.src = 'audio/postmalone/' + musicaAtual + '.mp3'
    img.src = 'images/' + imagemAtual + '.jpg'
    tocarFaixa()
    nomeMusica.innerText = 'Música ' + musicaAtual
}

botaoPlay.addEventListener('click', tocarOuPausar);
botaoAvancar.addEventListener('click', avancarFaixa);
botaoRetornar.addEventListener('click', voltarfaixa);