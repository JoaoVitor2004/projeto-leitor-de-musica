const audio = document.getElementById('audio') as HTMLElement | null
const imagem = document.getElementById('capa') as HTMLElement | null
const btnPlay = document.getElementById('play-pause') as HTMLElement | null
const btnProximo = document.getElementById('proximo') as HTMLElement | null
const btnAnterior = document.getElementById('anterior') as HTMLElement | null
const tituloMusica = document.getElementById('faixa') as HTMLElement | null

let taTocando: boolean = false
let musicaAtual: number = 1
let quantidade: number = 3
const corpo = document.body

const musicas = [
    {musica: 'Goodbys', cor: '#073A53', corFont: '#BFC4C5'},
    {musica: 'Pycho', cor: '#E8592F', corFont: '#BFC4C5'},
    {musica: 'Sunflower', cor: '#CCC9CC', corFont: 'black'}
]

function atualizarInterface():void {
    if (tituloMusica) tituloMusica.innerHTML = musicas[musicaAtual - 1].musica
    if (imagem) imagem.src = musicas[musicaAtual - 1]
    corpo.style.background = musicas[musicaAtual - 1].cor
    corpo.style.color = musicas[musicaAtual - 1].corFont
    if (audio) audio.src = `audio/postmalone/${musicaAtual}.mp3`
    if (imagem) imagem.src = `images/${musicaAtual}.jpg`
}

function tocarAudio():void {
    audio?.play()
    btnPlay?.classList.remove('bi-play-circle-fill')
    btnPlay?.classList.add('bi-pause-circle-fill')
}

function pausarAudio():void {
    audio?.pause()
    btnPlay?.classList.add('bi-play-circle-fill')
    btnPlay?.classList.remove('bi-pause-circle-fill')
}

function tocarePausar():void {
    taTocando ? pausarAudio() : tocarAudio()
    taTocando = !taTocando
}

function avancarMusica():void {
    musicaAtual = musicaAtual === quantidade ? musicaAtual : musicaAtual + 1
    atualizarInterface()
    tocarAudio()
}

function voltarMusica():void {
    musicaAtual = musicaAtual === 1 ? quantidade : musicaAtual - 1
    atualizarInterface()
    tocarAudio()
}

btnPlay?.addEventListener('click', () => tocarePausar())
btnProximo?.addEventListener('click', () => avancarMusica())
btnAnterior?.addEventListener('click', () => voltarMusica())