const player = () => {

    return {};
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
    const displayBoard = () => {
        for (let i = 0; i < 9; i++) {
            const currentSquare = document.getElementById(`gs${i}`);
            currentSquare.textContent = gameBoard.getSign(i);
        }
    };

    return { displayBoard };
})();

const gameSquares = document.querySelectorAll('.game-square');
gameSquares.forEach(function(currentSquare) {
    currentSquare.addEventListener('click', (e) => console.log(e.target.dataset.index));
});