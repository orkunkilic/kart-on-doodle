let code = [];
let funcNames = [
    "empty",
    "setObstacles",
    "whenPassObstacle",
    "whenHitToGround",
    "whenHitToObstacle",
    "flap",
    "setGameScore",
    "endGame",
    "setPipeSpeed",
    "whenClick",
    "whenRun"];
let prev = "";
let cnt = 0;

function addNewCard(id) {
    if (prev !== id) {
        $("#code-list").append(
            "<li id='" + funcNames[id] + cnt + "'>\n" +
            "<div class='card' style='width: 5rem;'>\n" +
            "<button class='close' onclick='remove(" + '"' + funcNames[id] + cnt + '"' + ")'>X</button>\n" +
            "<img src='../data/flappy/func_" + id + ".png' class='card-img' alt='...'>\n" +
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