const homeScore = document.getElementById("home-score")
const guestScore = document.getElementById("guest-score")
const homeDisplay = document.getElementById("home-header")
const guestDisplay = document.getElementById("guest-header")
const periodDisplay = document.getElementById("period")
const newGameBtn = document.getElementById("new-game")
const pauseBtn = document.getElementById("pause-game")

const homeOne = document.getElementById("home-one")
const homeTwo = document.getElementById("home-two")
const homeThree = document.getElementById("home-three")
const guestOne = document.getElementById("guest-one")
const guestTwo = document.getElementById("guest-two")
const guestThree = document.getElementById("guest-three")


let home = 0
let guest = 0
let period = 1
let isPaused = false
homeScore.textContent = home
guestScore.textContent = guest
periodDisplay.textContent = period
disableButtons()

function newGame() {
    home = 0
    guest = 0
    period = 1
    isPaused = false
    homeScore.textContent = home
    guestScore.textContent = guest
    homeDisplay.style.color = "white"
    guestDisplay.style.color = "white"
    document.getElementById('time').textContent = ""
    startClock()
    enableButtons()
}

function homePoints(points) {
    home = home + points
    homeScore.textContent = home
    highlightLeader()
}

function guestPoints(points) {
    guest = guest + points
    guestScore.textContent = guest
    highlightLeader()
}

function highlightLeader() {
    if (home > guest) {
        homeDisplay.style.color = "wheat"
        guestDisplay.style.color = "white"
    } else if (guest > home) {
        homeDisplay.style.color = "white"
        guestDisplay.style.color = "wheat"
    } else {
        homeDisplay.style.color = "white"
        guestDisplay.style.color = "white"
    }
}

function startTimer(duration, display) {
    let timer = duration, minutes, seconds
    let timerID = setInterval(function () {
        if (!isPaused) {
            minutes = parseInt(timer / 60, 10)
            seconds = parseInt(timer % 60, 10)

            minutes = minutes < 10 ? "0" + minutes : minutes
            seconds = seconds < 10 ? "0" + seconds : seconds

            display.textContent = minutes + ":" + seconds

            if (--timer < 0) {
                period++
                periodDisplay.textContent = period
                timer = duration
            }
            if (period == 5) {
                period = 4
                periodDisplay.textContent = period
                disableButtons()
                clearInterval(timerID)
            }
        }    
    }, 1000)
}

function startClock() {
    let tenMinutes = 60 * 10
    display = document.getElementById('time')
    startTimer(tenMinutes, display)
}

function disableButtons() {
    homeOne.disabled = true
    homeTwo.disabled = true
    homeThree.disabled = true
    guestOne.disabled = true
    guestTwo.disabled = true
    guestThree.disabled = true
}

function enableButtons() {
    homeOne.disabled = false
    homeTwo.disabled = false
    homeThree.disabled = false
    guestOne.disabled = false
    guestTwo.disabled = false
    guestThree.disabled = false
}

function pauseGame() {
    if (isPaused) {
        isPaused = false
        enableButtons()
        pauseBtn.textContent = "Pause game"
    } else {
        isPaused = true
        disableButtons()
        pauseBtn.textContent = "Resume game"
    }
}