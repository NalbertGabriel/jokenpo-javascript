function typeWrite(elementHTML, repete) {
    const textArray = elementHTML.innerHTML.split('');

    elementHTML.innerHTML = '';

    textArray.forEach((letter, i) => {
        setTimeout(() => {
            elementHTML.innerHTML += letter;
        }, 80 * i);
    });

    if (repete) {
        setTimeout(() => {
            typeWrite(elementHTML, repete);
        }, 3000);
    }


}

function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// pedra = 1
// tesoura = 2
// papel = 3

// ! Elementos
const txtTitle1Element = document.querySelector('#txtTitle1');
const optionElements = document.querySelectorAll('.option');
const audioElement = document.querySelector('audio');

const optionComputerElement = document.querySelector('.box2 .option');
const resultElement = document.querySelector('#result');

optionElements[0].addEventListener('click', event => {
    playerPlay(1);
});

optionElements[1].addEventListener('click', event => {
    playerPlay(2);
});

optionElements[2].addEventListener('click', event => {
    playerPlay(3);
});

optionElements[0].addEventListener('mouseenter', envt => {
    audioElement.currentTime = 0;
    audioElement.play();
});

optionElements[1].addEventListener('mouseenter', envt => {
    audioElement.currentTime = 0;
    audioElement.play();
});

optionElements[2].addEventListener('mouseenter', envt => {
    audioElement.currentTime = 0;
    audioElement.play();
});

// ///

// const game = true;

function animationText(element, repete) {
    typeWrite(element, repete);
}

function playerPlay(x) {

    let jogada = '';
    switch (x) {
        case 1:
            jogada = 'Pedra';
            break;
        case 2:
            jogada = 'Papel';
            break;
        case 3:
            jogada = 'Tesoura';
            break;
        default:
            break;
    }

    game(jogada);
}

function game(player) {
    // 0 - derrota
    // 1 - vitoria
    // 2 - empate
    let win = 0;
    const gm = ['Pedra', 'Papel', 'Tesoura'];

    let computer = gm[getRandom(1, 3) - 1];

    // aprova de falhas
    // Sortear 10x para o resultado ser diferente do anterior
    for (let index = 0; index < 10; index++) {
        computer = gm[getRandom(1, 3) - 1];
    };

    optionComputerElement.style.display = 'block';

    optionComputerElement.style.backgroundImage = '';

    if (computer == 'Pedra') {
        optionComputerElement.style.backgroundImage = 'url("../images/rock-on2.png")';
    } else if (computer == 'Papel') {
        optionComputerElement.style.backgroundImage = 'url("../images/paper-on.png")';
    } else {
        optionComputerElement.style.backgroundImage = 'url("../images/scissors-on.png")';
    }

    if (player == computer) {
        win = 2;
    } else if (player == 'Pedra') {
        if (computer == 'Tesoura') {
            win = 1;
        } else {
            win = 0;
        }
    } else if (player == 'Papel') {
        if (computer == 'Pedra') {
            win = 1;
        } else {
            win = 0;
        }
    } else {
        if (computer == 'Papel') {
            win = 1;
        } else {
            win = 0;
        }
    }

    let result = '';
    switch (win) {
        case 0:
            result = 'Lose';
            break;
        case 1:
            result = 'Win';
            break;
        case 2:
            result = 'Draw';
            break;
        default:
            break;
    }

    resultElement.style.display = 'block';
    resultElement.innerHTML = result;


}

function main() {
    animationText(txtTitle1Element, true);
}


main();