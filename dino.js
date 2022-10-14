const dinoElem = document.querySelector("[data-dino]")
const JUMP_SPEED = 0.45
const GRAVITY = 0.011
const DINO_FRAME_COUNT = 2
const FRAME_TIME = 100

let isJumping
export function setUpDino() {
    isJumping = false
}

export function updateDino() {
    handleRun()
    handleJump()
}

function handleRun() {
    if (isJumping) {
        dinoElem.src = `img/dino-stationary.png`
        return
    }
}

function handleJump() {

}