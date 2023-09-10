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

    const findWinner = (sign) => {
        const currentPositions = [];

        for (let i = 0; i < 9; i++) {
            if (board[i] == sign) {
                currentPositions.push(i);
            }
        }

        if (currentPositions.length === 3) {
            for (let i = 0; i < winCombinations.length - 1; i++) {
                for (let j = 0; j < length)
            }
        }  
    };

    return { setSign, getSign, resetBoard, findWinner };
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

    const checkForWinner = () => {
        const result = gameBoard.findWinner(lastSign);
        console.log(result);
    };

    const gameSquares = document.querySelectorAll('.game-square');
    gameSquares.forEach(function(currentSquare) {
        currentSquare.addEventListener('click', (e) => placeSign(e.target.dataset.index));
    });
    return {  };    
})();