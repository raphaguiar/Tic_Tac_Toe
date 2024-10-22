const cells = document.querySelectorAll('.cell');
const resetButton = document.querySelector('.reset');
let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let isGameActive = true;

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const handleCellClick = (event) => {
    const index = event.target.getAttribute('data-index');

    if (board[index] === '' && isGameActive) {
        board[index] = currentPlayer;
        event.target.textContent = currentPlayer;
        event.target.style.color = currentPlayer === 'X' ? '#FF69B4' : '#6A5ACD';
        checkResult();
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
};

const checkResult = () => {
    let roundWon = false;

    for (let condition of winningConditions) {
        const [a, b, c] = condition;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        alert(`o jogador ${currentPlayer} venceu!`);
        isGameActive = false;
        return;
    }

    if (!board.includes('')) {
        alert('empate!');
        isGameActive = false;
    }
};

const resetBoard = () => {
    board = ['', '', '', '', '', '', '', '', ''];
    isGameActive = true;
    currentPlayer = 'X';
    cells.forEach(cell => {
        cell.textContent = '';
        cell.style.color = '#8B4513';
    });
};

cells.forEach(cell => cell.addEventListener('click', handleCellClick));
resetButton.addEventListener('click', resetBoard);
