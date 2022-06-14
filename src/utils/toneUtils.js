import { start } from 'tone'

// start
const mainNode = document.querySelector('main')
const startBtn = document.getElementById('start')
startBtn.onclick = () => {
    start()
    startBtn.remove()
    mainNode.appendChild(playBtn)
}

// play
const playBtn = document.createElement('button')
playBtn.classList.add('btn', 'btn-secondary')
playBtn.innerText = 'Play'
playBtn.id = 'play'

// stop
const stopBtn = document.createElement('button')
stopBtn.classList.add('btn', 'btn-tertiary')
stopBtn.innerText = 'Stop'
stopBtn.id = 'play'

export const play = (callback) => {
    playBtn.onclick = callback
}

export const playWithStop = (callback) => {
    playBtn.onclick = () => {
        callback()
        playBtn.remove()
        mainNode.appendChild(stopBtn)
    }
}

export const stop = (callback) => {
    stopBtn.onclick = () => {
        callback()
        stopBtn.remove()
        mainNode.appendChild(playBtn)
    }
}
