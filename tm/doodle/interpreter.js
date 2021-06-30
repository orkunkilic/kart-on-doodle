let addPlatform = false;
let addEndGamewithGround = false;
let addJump = false;
let isRunning = false;

let isUpClicked = false;
let isLeftClicked = false;
let isRightClicked = false;
let hitToGround = false;

let scoreAmount = 1;

function whenUpClick() {
    isUpClicked = true;
    isLeftClicked = false;
    isRightClicked = false;
    hitToGround = false;
}
function whenLeftClick() {
    isLeftClicked = true;
    isUpClicked = false;
    isRightClicked = false;
    hitToGround = false;
}
function whenRightClick() {
    isRightClicked = true;
    isLeftClicked = false;
    isUpClicked = false;
    hitToGround = false;
}

function whenHitToGround() {
    isRightClicked = false;
    isLeftClicked = false;
    isUpClicked = false;
    hitToGround = true;
    isRunning = false;
}


function whenRun() {
    isRightClicked = false;
    isLeftClicked = false;
    isUpClicked = false;
    hitToGround = false;
    isRunning = true;
}

function endGame() {
    if (hitToGround) {
        addEndGamewithGround = true;
    } else {
        console.log("It might be better to use it under other cards.");
    }
}

function whenCreatePlatforms() {
    addPlatform = true;
}



function runCodeFromTM(idList) {
    for (let i = 0; i < idList.length; i++) {

        eval(idList[i].replace(/[0-9]/g, '') + "()");
    }
}

function runGame() {
    new p5(sketch, 'grid');
}