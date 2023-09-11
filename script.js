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
    }

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
    }
    return { displayBoard, displayInfo };
})();

const gameController = (() => {
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

    const findMatches = (currentPositions, currentCombination) => {
        return currentCombination.every(item => currentPositions.includes(item));
    }

    const checkForWinner = () => {
        const currentPositions = [];
        const board = gameBoard.getBoard();
        let isFull = false;
        let doesMatch = false;

        for (let i = 0; i < 9; i++) {
            if (board[i] == lastSign) {
                currentPositions.push(i);
            }
        }

        board.includes('') ? isFull = false : isFull = true;

        for (let i = 0; i < 8; i++) {
            if (findMatches(currentPositions, winCombinations[i])) {
                doesMatch = true;
                break;
            }
        }
        
        if (doesMatch) {
            //declare winner
        } else if (isFull) {
            //declare draw
        }
    };

    const gameSquares = document.querySelectorAll('.game-square');
    gameSquares.forEach(function(currentSquare) {
        currentSquare.addEventListener('click', (e) => placeSign(e.target.dataset.index));
    });
    return {  };    
})();