const dino = document.getElementById('dino')
const cactus = document.getElementById('cactus')
const cloud = document.getElementById('cloud')
const road = document.getElementById('road')
const score = document.getElementById('score')
const first = document.getElementById('first')
const last = document.getElementById('last')

let point = 0

document.addEventListener('keydown', (e) => {
    if (e.code == 'KeyW' || e.code == 'ArrowUp') {
        cactus.classList.add('cactusActive')
        road.classList.add('roadActive')
        cloud.classList.add('roadActive')


        first.style.display = 'none'
        last.style.display = 'none'
        score.innerText = point

        if (dino.className != 'dinoActive') {
            dino.classList.add('dinoActive')
            point += 20
            score.innerText = point
            setTimeout(() => {
                dino.classList.remove('dinoActive')
            }, 1000)
        }
    }
})


let control = setInterval(() => {
    let dinoBottom = parseInt(getComputedStyle(dino).bottom)
    let csleftEdge = parseInt(getComputedStyle(cactus).left)
    let csrightEdge = csleftEdge + 120

    if (dinoBottom <= 80 &&
        ((csleftEdge >= 50 && csleftEdge <= 130) ||
            (csrightEdge >= 50 && csrightEdge <= 130))) {
        cactus.classList.remove('cactusActive')
        road.classList.remove('roadActive')
        cloud.classList.remove('roadActive')

        last.style.display = 'flex'
        point = 0
    }
})