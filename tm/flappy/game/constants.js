const CANVAS_WIDTH = (document.getElementById("game-container").clientWidth < 479) ? 480 : document.getElementById("game-container").clientWidth;
const CANVAS_HEIGHT = 650;
const MIN_PIPE_GAP = CANVAS_HEIGHT / 5;
const MAX_PIPE_GAP = CANVAS_HEIGHT / 4;
const MIN_PIPE_HEIGHT = CANVAS_HEIGHT / 7;
const MAX_PIPE_HEIGHT = CANVAS_HEIGHT / 2;
const PIPE_WIDTH = CANVAS_WIDTH / 5;
const MaxPipeOffset = CANVAS_WIDTH * 0.8;
const MinPipeOffset = CANVAS_WIDTH * 0.6;
let PipeSpeed = 2;
const BIRDSIZE = { Width: 70, Height: 50 };
const BIRDANIMATIONFRAME = [200, 272, 344, 416];
const FLOOROFFSET = 70;

