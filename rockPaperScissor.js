function rockPaperScissors() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    })

    const rock = 'Rock';
    const paper = 'Paper';
    const scissors = 'Scissors';
    let playerTurn;

    let recursivePlayAgain = function () {

        readline.question('\nDo you want to play again (Y/N): ', answer => {
            tries = 0;

            if (answer == 'y' || answer == 'Y') {
                console.log('')
                recursivePlayGame();
            } else if (answer == 'n' || answer == 'N') {
                console.log('\nGood Bye!');
                return readline.close();
            } else {
                console.log('\nY/N')
                recursivePlayAgain();
            }
        })
    }

    let recursivePlayGame = function () {

        readline.question('Choose Rock-Paper-Scissors: ', ask => {
            tries = 0;

            if (ask == 'r' || ask == 'rock') {
                playerTurn = rock;
            } else if (ask == 'p' || ask == 'paper') {
                playerTurn = paper;
            } else if (ask == 's' || ask == 'scissors') {
                playerTurn = scissors;
            } else {
                console.log('Invalid input! Try again...');
                recursivePlayGame();
                return;
            }

            console.log(`You choose ${playerTurn}.`);

            let computerRandomNumber = Math.floor(Math.random() * 3) + 1;
            let computerTurn;

            switch (computerRandomNumber) {
                case 1:
                    computerTurn = rock;
                    break;
                case 2:
                    computerTurn = paper;
                    break;
                case 3:
                    computerTurn = scissors;
                    break;
            }

            console.log(`The computer chooses ${computerTurn}.`);

            if ((playerTurn == rock && computerTurn == scissors) || (playerTurn == paper && computerTurn == rock) ||
                (playerTurn == scissors && computerTurn == paper)) {
                console.log(`\x1b[32mYou win! \x1b[0m`)
                recursivePlayAgain();
            } else if ((playerTurn == rock && computerTurn == paper) || (playerTurn == paper && computerTurn == scissors) ||
                (playerTurn == scissors && computerTurn == rock)) {
                console.log(`\x1b[31mYou loose! \x1b[0m`);
                recursivePlayAgain();
            } else {
                console.log('\x1b[33mDraw! \x1b[0m');
                recursivePlayAgain();
            }


        })
    }

    recursivePlayGame();
}

rockPaperScissors();