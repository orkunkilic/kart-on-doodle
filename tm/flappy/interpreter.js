let addPipe = false;
let addEndGamewithObstacle = false;
let addEndGamewithGround = false;
let changeScoreOnHitG = false;
let changeScoreOnHitO = false;
let changeScoreOnPass = false;
let changeScoreOnRun = false;
let changeScoreOnClick = false;
let addFlap = false;
let addSpeed = false;

let isClicked = false;
let hitToGround = false;
let hitToObstacle = false;
let passObstacle = false;
let isRunning = false;

let scoreAmount = 1;

function whenClick() {
    isClicked = true;
    hitToGround = false;
    hitToObstacle = false;
    passObstacle = false;
    isRunning = false;
}

function whenHitToGround() {
    isClicked = false;
    hitToGround = true;
    passObstacle = false;
    isRunning = false;
}

function whenHitToObstacle() {
    isClicked = false;
    hitToObstacle = true;
    passObstacle = false;
    isRunning = false;
}

function whenPassObstacle() {
    isClicked = false;
    hitToGround = false;
    hitToObstacle = false;
    passObstacle = true;
    isRunning = false;
}

function whenRun() {
    isClicked = false;
    hitToGround = false;
    hitToObstacle = false;
    passObstacle = false;
    isRunning = true;
}

function flap() {
    if (isClicked) {
        addFlap = true;
    } else {
        console.log("It might be better to use it under other cards.");
    }
}

function endGame() {
    if (hitToGround) {
        addEndGamewithGround = true;
    } else if (hitToObstacle) {
        addEndGamewithObstacle = true;
    } else {
        console.log("It might be better to use it under other cards.");
    }
}

function setObstacles() {
    addPipe = true;
}

function setPipeSpeed(s) {
    if (typeof s === 'undefined') {
        s = 4;
    }
    if (s > 5) {
        s = 8;
    }
    PipeSpeed = s;
}

function setGameScore(x) {
    if (typeof x === 'undefined') {
        x = 1;
    }
    scoreAmount = x;
    if (isClicked) {
        changeScoreOnClick = true;
    }
    if (hitToGround) {
        changeScoreOnHitG = true;
    }
    if (hitToObstacle) {
        changeScoreOnHitO = true;
    }
    if (passObstacle) {
        changeScoreOnPass = true;
    }
    if (isRunning) {
        changeScoreOnRun = true;
    }
}

function initInterpreter() {
    const fuseOptions = {
        keys: ['title'],
        shouldSort: true,
        includeScore: true
    };
    fuse = new Fuse(codeList, fuseOptions);
}

function addCodeInput(code_text) {
    let code_sub = "";
    if (code_text.indexOf("\n") > 0) {
        code_sub = code_text.substring(0, code_text.indexOf("\n"));
    } else {
        code_sub = code_text;
    }
    code_sub = code_sub.toLowerCase();
    code_sub = code_sub.replace(/\s+/g, " ").trim();
    let result = fuse.search(code_sub.replace(/\s+/g, " ").trim().substring(0, (code_sub.indexOf(':') > 0) ? code_sub.indexOf(':') : code_sub.length));
    let resultCode = result[0].item.code;
    let inputs = [];
    if (result[0].item.input === "numeric") {
        inputs.push(code_sub.match(/\d+/g).map(Number));
        resultCode = resultCode.format(inputs);
    } else if (result[0].item.input === "string") {
        let index = code_sub.indexOf(":");
        resultCode = resultCode.format(code_sub.substring(index + 1, code_sub.length).trim());
    }
    console.log(resultCode)
    eval(resultCode);
}

function runCodeFromTM(idList) {
    console.log(idList)
    for (let i = 0; i < idList.length; i++) {
        eval(idList[i].replace(/[0-9]/g, '') + "()");
    }
}

function runP5Code() {
    new p5(sketch, 'game-container');
}