const _levels = [
    "Level 1: Every game needs some player input. In this game, players click on the screen to make the bird jump. Code this behaviour",
    "Level 2: What is the challenge of your game? When will the game end? Let's code what happens when the bird hits to ground",
    "Level 3: Now, we have already coded some basic functions of the game. Now, add some pipes as obstacles and set the bird's speed",
    "Level 4: If you pass the obstacle, increase the score",
    "Level 5: If you cannot pass the obstacle end the game"
];

const _training_classes = [
    {
        name: "1",
        title: "Record examples for 'When Clicked' event",
        description:
            "'When Clicked' event allows us to define operations when the player clicks on the screen. Hold the button and take at least 10 pictures."
    },
    {
        name: "2",
        title: "Record examples to train model for 'When the Game Starts' event",
        description:
            "'When the Game Starts' event allows us to define operations when the player starts the game. Hold the button and take at least 10 pictures."
    },
    {
        name: "3",
        title: "Record examples to train model for 'When Pass the Obstacle' event",
        description:
            "'When Pass the Obstacle' event runs when the player passes each obstacle. Hold the button and take at least 10 pictures."
    },
    {
        name: "4",
        title: "Record examples to train model for 'When Hit the Obstacle' event",
        description:
            "'When Hit the Obstacle' event runs when the player hits each obstacle. Hold the button and take at least 10 pictures."
    },
    {
        name: "5",
        title: "Record examples to train model for 'When Hit to Ground' event",
        description:
            "After 'When Hit to Ground' event, you can define what will happen in the game after player hits to ground. Hold the button and take at least 10 pictures."
    },
    {
        name: "6",
        title: "Record examples to train model for 'Flap' command",
        description:
            "Flap command jumps the bird. Hold the button and take at least 10 pictures."
    },
    {
        name: "7",
        title: "Record examples to train model for 'Change Score' command.",
        description:
            "'Change the Score' command increases or decreases the score. Hold the button and take at least 10 pictures."
    },
    {
        name: "8",
        title: "Record examples to train model for 'Change Speed' command.",
        description:
            "'Change Speed' command changes the speed of the bird. Hold the button and take at least 10 pictures.."
    },
    {
        name: "9",
        title: "Record examples to train model for 'Place Obstacles' command.",
        description:
            "'Place Obstacles' command places obstacles on the game canvas. Hold the button and take at least 10 pictures."
    },
    {
        name: "10",
        title: "Record examples to train model for 'End the Game' command.",
        description:
            "'End the Game' command ends the game. Hold the button and take at least 10 pictures."
    }
];

const _title = "Program the Flappy Bird Game";
const _explanation = "Show the programming cards to camera and start coding! <a href='./codelab/en/index.html'>If you need a guide, visit our tutorial.</a>";
const _camera_title = "Show the Programming Cards";
const _tm_link_text ="... use your own cards with AI";

function fillPage() {
    $("#title").html(_title);
    $("#intro-text").html(_explanation);
    $("#camera-title").html(_camera_title);
    $("#train-model-button").html(_tm_link_text);
    $("#level-container").html(_levels[0]);
}