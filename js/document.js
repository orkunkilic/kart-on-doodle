let code = [];
let prev = "";
let cnt = 0;

function addNewCard(id) {
    if (prev !== id) {
        $("#code-list").append(
            "<li id='" + cnt + "'>\n" +
            "<div class='card' style='width: 5rem;'>\n" +
            "<button class='close' onclick='remove(" + cnt + ")'>X</button>\n" +
            "<img src='../data/flappy/func_" + id + ".png' class='card-img' alt='...'>\n" +
            "</div>\n" +
            "</li>\n"
        )
    }
    prev = id;
    cnt++;
}

function remove(id) {
    $("#" + id).empty();
}