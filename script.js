const gameSquare = document.querySelectorAll('.game-square');

const gameBoard = (() => {
    const board = ['X', 'O', 'O', 'O', 'X', 'O', 'O', 'O', 'X'];
    const displayBoard = () => {
        for (let i = 1; i <= 9; i++) {
            const currentSquare = document.getElementById(`gs${i}`);
            currentSquare.textContent = board[i-1];
        }
    };
    return { displayBoard };
})();

const player = () => {
    
    return {};
};

