const sketch = p5 => {
    const doodler = document.createElement('div')

    const grid = document.querySelector('.grid')
    let doodlerLeftSpace = 100
    let startPoint = 150
    let doodlerBottomSpace = startPoint
    let isGameOver = false
    let platformCount = 5
    let platforms = []
    let upTimerId
    let downTimerId
    let isFirstJump = false
    let isJumping = true
    let isGoingLeft = false
    let isGoingRight = false
    let leftTimerId
    let rightTimerId
    let score = 0

    function createDoodler() {
        grid.appendChild(doodler)
        doodler.classList.add('doodler')
        doodlerLeftSpace = doodlerLeftSpace
        doodler.style.left = doodlerLeftSpace + 'px'
        doodler.style.bottom = doodlerBottomSpace + 'px'
    }

    class Platform {
        constructor(newPlatBottom) {
            this.bottom = newPlatBottom
            this.left = Math.random() * 315
            this.visual = document.createElement('div')

            const visual = this.visual
            visual.classList.add('platform')
            visual.style.left = this.left + 'px'
            visual.style.bottom = this.bottom + 'px'

            grid.appendChild(visual)
        }
    }

    function createGamePlatforms() {
        if (addPlatform) {
            for (let i = 0; i < platformCount; i++) {
                let platformGap = 600 / platformCount
                let newPlatBottom = 100 + i * platformGap
                let newPlatform = new Platform(newPlatBottom)
                platforms.push(newPlatform)
            }
        }
    }

    function moveGamePlatforms() {
        if (addMovePlatforms) {
            if (doodlerBottomSpace > 100) {
                platforms.forEach(platform => {
                    platform.bottom -= 2
                    let visual = platform.visual
                    visual.style.bottom = platform.bottom + 'px'

                    if (platform.bottom < 10) {
                        let firstPlatform = platforms[0].visual
                        firstPlatform.classList.remove('platform')
                        platforms.shift()
                        if (isFirstJump) {
                            score++

                        }
                        let newPlatform = new Platform(600)
                        platforms.push(newPlatform)

                    }
                })
            }
        }

    }

    function jumpDoodle() {
        if (addJump) {
            clearInterval(downTimerId)
            isJumping = true
            upTimerId = setInterval(function () {
                doodlerBottomSpace += 15
                doodler.style.bottom = doodlerBottomSpace + 'px'
                console.log(doodlerBottomSpace)
                if (doodlerBottomSpace > startPoint + 200) {
                    fall()
                    isJumping = false
                }
                if (doodlerBottomSpace > 580) {
                    fall()
                    isJumping = false
                }
            }, 30)
        }

    }

    function fall() {
        isJumping = false
        clearInterval(upTimerId)
        downTimerId = setInterval(function () {
            doodlerBottomSpace -= 5
            doodler.style.bottom = doodlerBottomSpace + 'px'
            if (doodlerBottomSpace <= 0) {
                gameOver()
            }
            platforms.forEach(platform => {
                if (doodlerBottomSpace >= platform.bottom &&
                    doodlerBottomSpace <= platform.bottom + 15 &&
                    doodlerLeftSpace + 60 >= platform.left &&
                    doodlerLeftSpace <= platform.left + 85 &&
                    !isJumping) {
                    startPoint = doodlerBottomSpace
                    jumpDoodle()
                    isJumping = true
                }
            })
        }, 20)
    }

    function gameOver() {
        if (hitToGround) {
            isGameOver = true

            while (grid.firstChild) {
                grid.removeChild(grid.firstChild);
            }

            grid.innerHTML = score

            clearInterval(upTimerId)
            clearInterval(downTimerId)
            clearInterval(leftTimerId)
            clearInterval(rightTimerId)
        }
    }

    function moveLeft() {
        if (isGoingRight) {
            clearInterval(rightTimerId)
            isGoingRight = false
        }
        isGoingLeft = true
        leftTimerId = setInterval(function () {
            if (doodlerLeftSpace >= 0) {
                doodlerLeftSpace -= 2
                doodler.style.left = doodlerLeftSpace + 'px'
            } else moveRight()
        }, 10)
    }

    function moveRight() {
        if (isGoingLeft) {
            clearInterval(leftTimerId)
            isGoingLeft = false
        }
        isGoingRight = true
        rightTimerId = setInterval(function () {
            if (doodlerLeftSpace <= 313) {
                doodlerLeftSpace += 2
                doodler.style.left = doodlerLeftSpace + 'px'
            } else moveLeft()
        }, 10)
    }

    function moveStraight() {
        clearInterval(leftTimerId)
        clearInterval(rightTimerId)
        isGoingLeft = false
        isGoingRight = false
    }




    function start() {
        if (!isGameOver) {
            createDoodler()
        }

    }

    p5.setup = () => {
        start()
    }

    p5.draw = () => {
        if (!isGameOver) {
            if (addPlatform) {
                createGamePlatforms()
                addPlatform = false
            }
            if (addEndGamewithGround) {
                isGameOver = true;
            }
            if (isGameOver) {
                gameOver()
            }
            if (isRunning) {
                moveGamePlatforms()
            }
        }

    }

    p5.keyPressed = (e) => {
        if (isRunning && !isGameOver) {
            if (e.key === ' ') {
                if (isRunning && !isFirstJump) {
                    isFirstJump = true
                    jumpDoodle();
                }
            }

            doodler.style.bottom = doodlerBottomSpace + 'px'
            if (e.key === 'ArrowLeft') {
                if (leftClicked) {
                    moveLeft()
                } else console.log("Use another card")
            }

            if (e.key === 'ArrowRight') {
                if (rightClicked) {
                    moveRight()
                } else console.log("Use another card")
            }

            if (e.key === 'ArrowUp') {
                if (upClicked) {
                    moveStraight()
                } else console.log("Use another card")
            }

        }
    }


}
