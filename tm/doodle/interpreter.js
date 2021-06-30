let addPlatform = false;
let addEndGamewithGround = false;
let addJump = false;
let isRunning = false;
let hitToGround = false;
let addMovePlatforms = false;


let isUpClicked = false;
let isLeftClicked = false;
let isRightClicked = false;
let isHitToGround = false;
let isHitToPlatform = false;

let scoreAmount = 1;

function whenUpClick() {
    isUpClicked = true;
    isLeftClicked = false;
    isRightClicked = false;
    isHitToGround = false;
    isHitToPlatform = false;
}

function goStraight() {
    if (isUpClicked) upClicked = true;
}

function whenLeftClick() {
    isLeftClicked = true;
    isUpClicked = false;
    isRightClicked = false;
    isHitToGround = false;
    isHitToPlatform = false;
}

function goLeft() {
    if (isLeftClicked) leftClicked = true;
}

function whenRightClick() {
    isRightClicked = true;
    isLeftClicked = false;
    isUpClicked = false;
    isHitToGround = false;
    isHitToPlatform = false;
}

function goRight() {
    if (isRightClicked) rightClicked = true;
}

function whenHitToGround() {
    isRightClicked = false;
    isLeftClicked = false;
    isUpClicked = false;
    isHitToGround = true;
    isRunning = false;
    isHitToPlatform = false;
}

function endGame() {
    if (isHitToGround) hitToGround = true;
}

function whenHitToPlatform() {
    isRightClicked = false;
    isLeftClicked = false;
    isUpClicked = false;
    isHitToGround = false;
    isRunning = false;
    isHitToPlatform = true;
}

function jump() {
    if (isHitToPlatform) addJump = true;
}


function whenRun() {
    isRightClicked = false;
    isLeftClicked = false;
    isUpClicked = false;
    isHitToGround = false;
    isRunning = true;
}

function movePlatforms() {
    if (isRunning) addMovePlatforms = true;
}


function setPlatforms() {
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