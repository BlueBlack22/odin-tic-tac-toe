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
    const board = ['X', 'O', 'O', 'O', 'X', 'O', 'O', 'O', 'X'];
    
    const newSign = (index, sign) => {
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

    return { newSign, getSign, resetBoard };
})();

const displayController = (() => {
    const gameSquares = document.querySelectorAll('.game-square');
    gameSquares.forEach(function(currentSquare) {
        currentSquare.addEventListener('click', (e) => console.log(e.target.dataset.index));
    });

    const displayBoard = () => {
        for (let i = 0; i < 9; i++) {
            const currentSquare = document.getElementById(`gs${i}`);
            currentSquare.textContent = gameBoard.getSign(i);
        }
    };

    const resetBoard = () => {
        gameBoard.resetBoard();
        displayBoard();
    }

    return { displayBoard, resetBoard };
})();

const gameController = (() => {
    let isOver = false;

    

    return {  };    
})();