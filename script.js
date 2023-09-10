const gameBoard = (() => {
    const board = ['X', 'O', 'O', 'O', 'X', 'O', 'O', 'O', 'X'];
    const displayBoard = () => {
        for (let i = 0; i < 9; i++) {
            const currentSquare = document.getElementById(`gs${i}`);
            currentSquare.textContent = board[i];
        }
    };
    return { displayBoard };
})();

const player = () => {
    
    return {};
};

const gameSquares = document.querySelectorAll('.game-square');
gameSquares.forEach(function(currentSquare) {
    currentSquare.addEventListener('click', (e) => console.log(e.target.dataset.index));
});