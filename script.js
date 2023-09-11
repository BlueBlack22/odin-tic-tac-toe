const winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const player = (sign) => {
    this.sign = sign;
    this.score = 0;

    const addScore = () => {
        this.score++;
    };

    const getScore = () => {
        return this.score;
    }

    return { addScore, getScore };
};

const gameBoard = (() => {
    const board = ['', '', '', '', '', '', '', '', ''];

    const getBoard = () => {
        return board;
    }
    
    const setSign = (index, sign) => {
        board[index] = sign;
    };

    const getSign = (index) => {
        return board[index];
    };

    const resetBoard = () => {
        for (let i = 0; i < 9; i++) {
            board[i] = '';
        }
    };

    return { getBoard, setSign, getSign, resetBoard};
})();

const displayController = (() => {
    const infoLine = document.querySelector('.info-line');
    
    const displayBoard = () => {
        for (let i = 0; i < 9; i++) {
            const currentSquare = document.getElementById(`gs${i}`);
            currentSquare.textContent = gameBoard.getSign(i);
        }
    };

    const displayInfo = (message) => {
        infoLine.textContent = message;
    };

    const removeGridHighlight = () => {
        for (let i = 0; i < 9; i++) {
            document.getElementById(`gs${i}`).classList.remove('gs-highlighted');
        }
    };

    const highlightGrid = (winningCombination) => {
        for (let i = 0; i < 3; i++) {
            document.getElementById(`gs${winCombinations[winningCombination][i]}`).classList.add('gs-highlighted');
        }
    };
    return { displayBoard, displayInfo, removeGridHighlight, highlightGrid };
})();

const gameController = (() => {
    const playAgainBtn = document.getElementById('play-again');

    let isOver = false;
    let lastSign = '';    

    const placeSign = (position) => {
        if (gameBoard.getSign(position) === '' && isOver !== true) {
            if (lastSign === 'O' || lastSign === '') {
                gameBoard.setSign(position, 'X');
                lastSign = 'X';
                displayController.displayInfo(`Player O's move`);
            } else {
                gameBoard.setSign(position, 'O');
                lastSign = 'O';
                displayController.displayInfo(`Player X's move`);
            }
            displayController.displayBoard();
            checkForWinner();
        }
    };

    const findMatches = (currentPositions, currentCombination) => {
        return currentCombination.every(item => currentPositions.includes(item));
    };

    const checkForWinner = () => {
        const currentPositions = [];
        const board = gameBoard.getBoard();
        let isFull = false;
        let doesMatch = false;
        let winningCombination;

        for (let i = 0; i < 9; i++) {
            if (board[i] == lastSign) {
                currentPositions.push(i);
            }
        }

        board.includes('') ? isFull = false : isFull = true;

        for (let i = 0; i < 8; i++) {
            if (findMatches(currentPositions, winCombinations[i])) {
                doesMatch = true;
                winningCombination = i;
                break;
            }
        }
        
        if (doesMatch) {
            declareWinner(winningCombination);
        } else if (isFull) {
            declareDraw();
        }
    };

    const declareWinner = (winningCombination) => {
        endRound();
        displayController.displayInfo(`Player ${lastSign} wins!`);
        displayController.highlightGrid(winningCombination);
    };

    const declareDraw = () => {
        endRound();
        displayController.displayInfo('Draw!');
    };

    const endRound = () => {
        isOver = true;
        playAgainBtn.classList.toggle('play-again-hidden');
    };

    const newRound = () => {
        isOver = false;
        playAgainBtn.classList.toggle('play-again-hidden');
        displayController.removeGridHighlight();
        displayController.displayInfo(`Player X's move`);
        gameBoard.resetBoard();
        displayController.displayBoard();
    };

    const gameSquares = document.querySelectorAll('.game-square');
    gameSquares.forEach(function(currentSquare) {
        currentSquare.addEventListener('click', (e) => placeSign(e.target.dataset.index));
    });

    playAgainBtn.addEventListener('click', (e) => newRound());
    return {  };    
})();