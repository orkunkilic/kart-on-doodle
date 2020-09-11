/* global tm */

const mainEl = document.querySelector('#container');

const wizard = new tm.Wizard({
    introduction: {
        title: tm.html`Let’s teach your computer to recognize your programming commands.`,
        description: tm.html`Click "Start", You'll need to allow access to your webcam. Note that your images stay private to you and do not leave your computer.`
    },
    classes: [
        {
            name: "9",
            title: "Record examples for 'When Clicked' event",
            description:
                "'When Clicked' event allows us to define operations when the player clicks on the screen. Hold the button and take at least 10 pictures."
        },
        {
            name: "3",
            title: "Record examples to train model for 'When Hit to Ground' event",
            description:
                "After 'When Hit to Ground' event, you can define what will happen in the game after player hits to ground. Hold the button and take at least 10 pictures."
        },
        {
            name: "10",
            title: "Record examples to train model for 'When the Game Starts' event",
            description:
                "'When the Game Starts' event allows us to define operations when the player starts the game. Hold the button and take at least 10 pictures."
        },
        {
            name: "2",
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
            title: "Record examples to train model for 'Flap' command",
            description:
                "Flap command jumps the bird. Hold the button and take at least 10 pictures."
        },
        {
            name: "8",
            title: "Record examples to train model for 'Change Speed' command.",
            description:
                "'Change Speed' command changes the speed of the bird. Hold the button and take at least 10 pictures.."
        },
        {
            name: "1",
            title: "Record examples to train model for this command.",
            description:
                "'Place Obstacles' command places obstacles on the game canvas. Hold the button and take at least 10 pictures."
        },
        {
            name: "6",
            title: "Record examples to train model for this command.",
            description:
                "'Change the Score' command increases or decreases the score. Hold the button and take at least 10 pictures."
        },
        {
            name: "7",
            title: "Record examples to train model for this command.",
            description:
                "'End the Game' command ends the game. Hold the button and take at least 10 pictures."
        }
    ],
    onLoad: () => {
        console.log("model has loaded");
    },
    onPrediction: predictions => {
        const images = document.querySelectorAll('.prediction-image');
        let highestProb = Number.MIN_VALUE;
        let highestIndex = -1;
        predictions.forEach((pred, i) => {
            if (pred.probability > highestProb) {
                highestProb = pred.probability;
                highestIndex = i;
            }
        });
        images.forEach((img, i) => {
            if (i === highestIndex) {
                img.classList.remove('hidden');
            } else {
                img.classList.add('hidden');
            }
        });
    },
    onSampleAdded: added => {
        console.log(added);
    },
    onTrain: () => console.log("train begins"),
    onReady: () => {
        const inferenceCamera = wizard.createInferenceCamera({
            size: 270
        });
        const cameraContainer = document.querySelector('#inference-camera-container');
        cameraContainer.appendChild(inferenceCamera);
        mainEl.classList.add('ready');
    }
});

document.querySelector('#train-model-button').addEventListener('click', () => wizard.open());
