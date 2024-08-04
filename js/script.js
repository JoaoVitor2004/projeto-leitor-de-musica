"use strict";
const audio = document.getElementById('audio');
const imagem = document.getElementById('capa');
const btnPlay = document.getElementById('play-pause');
const btnProximo = document.getElementById('proximo');
const btnAnterior = document.getElementById('anterior');
const tituloMusica = document.getElementById('faixa');
let taTocando = false;
let musicaAtual = 1;
let quantidade = 3;
const corpo = document.body;
const musicas = [
    { musica: 'Circles', cor: '#073A53', corFont: '#BFC4C5' },
    { musica: 'Pycho', cor: '#E8592F', corFont: '#BFC4C5' },
    { musica: 'Sunflower', cor: '#CCC9CC', corFont: 'black' }
];
function atualizarInterface() {
    if (tituloMusica)
        tituloMusica.innerHTML = musicas[musicaAtual - 1].musica;
    if (imagem)
        imagem.src = musicas[musicaAtual - 1];
    corpo.style.background = musicas[musicaAtual - 1].cor;
    corpo.style.color = musicas[musicaAtual - 1].corFont;
    if (audio)
        audio.src = `audio/postmalone/${musicaAtual}.mp3`;
    if (imagem)
        imagem.src = `images/${musicaAtual}.jpg`;
}
function tocarAudio() {
    audio === null || audio === void 0 ? void 0 : audio.play();
    btnPlay === null || btnPlay === void 0 ? void 0 : btnPlay.classList.remove('bi-play-circle-fill');
    btnPlay === null || btnPlay === void 0 ? void 0 : btnPlay.classList.add('bi-pause-circle-fill');
}
function pausarAudio() {
    audio === null || audio === void 0 ? void 0 : audio.pause();
    btnPlay === null || btnPlay === void 0 ? void 0 : btnPlay.classList.add('bi-play-circle-fill');
    btnPlay === null || btnPlay === void 0 ? void 0 : btnPlay.classList.remove('bi-pause-circle-fill');
}
function tocarePausar() {
    taTocando ? pausarAudio() : tocarAudio();
    taTocando = !taTocando;
}
function avancarMusica() {
    musicaAtual = musicaAtual === quantidade ? musicaAtual : musicaAtual + 1;
    atualizarInterface();
    tocarAudio();
}
function voltarMusica() {
    musicaAtual = musicaAtual === 1 ? quantidade : musicaAtual - 1;
    atualizarInterface();
    tocarAudio();
}
btnPlay === null || btnPlay === void 0 ? void 0 : btnPlay.addEventListener('click', () => tocarePausar());
btnProximo === null || btnProximo === void 0 ? void 0 : btnProximo.addEventListener('click', () => avancarMusica());
btnAnterior === null || btnAnterior === void 0 ? void 0 : btnAnterior.addEventListener('click', () => voltarMusica());
