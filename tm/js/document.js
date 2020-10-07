let code = [];
let funcNames = [
    "empty",
    "whenClick",
    "whenRun",
    "whenPassObstacle",
    "whenHitToObstacle",
    "whenHitToGround",
    "flap",
    "setGameScore",
    "setPipeSpeed",
    "setObstacles",
    "endGame"];

let prev = "";
let cnt = 0;

function addNewCard(id) {
    if (prev !== id) {
        $("#code-list").append(
            "<li id='" + funcNames[id] + cnt + "'>\n" +
            "<div class='card' style='width: 5rem;'>\n" +
            "<button class='close' onclick='remove(" + '"' + funcNames[id] + cnt + '"' + ")'>X</button>\n" +
            "<img src='../data/flappy-modern/func_" + id + ".png' class='card-img' alt='...'>\n" +
            "</div>\n" +
            "</li>\n"
        )
    }
    prev = id;
    cnt++;
}

function remove(id) {
    $("li#" + id).remove();
}

function runCards() {
    let idList = [];
    $("#code-list").find("li").map(function () {
        idList.push(this.id);
    }).get();
    runCodeFromTM(idList);
}

function showNextLevelExplanation(level) {
    if (level < _levels.length){
        $("#level-container").html(_levels[level + 1]);
    }
}