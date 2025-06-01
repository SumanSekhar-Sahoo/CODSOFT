// script.js
const HUMAN = 'X';
const AI = 'O';
let board = Array(9).fill(null);
let gameOver = false;

const winPatterns = [
  [0,1,2],[3,4,5],[6,7,8],
  [0,3,6],[1,4,7],[2,5,8],
  [0,4,8],[2,4,6]
];

const boardEl = document.getElementById('board');
const statusEl = document.getElementById('status');
const restartBtn = document.getElementById('restartBtn');
const cells = Array.from(document.querySelectorAll('.cell'));

function updateStatus(msg) {
  statusEl.textContent = msg;
}
function updateBoard() {
  cells.forEach((cell, i) => {
    cell.textContent = board[i] || '';
    cell.classList.toggle('disabled', board[i] !== null || gameOver);
  });
}
function isWinner(player, b) {
  return winPatterns.some(pattern => pattern.every(i => b[i] === player));
}
function isDraw(b) {
  return b.every(cell => cell !== null);
}
function gameResult(b) {
  if (isWinner(HUMAN, b)) return HUMAN;
  if (isWinner(AI, b)) return AI;
  if (isDraw(b)) return 'draw';
  return null;
}
function minimax(newBoard, player) {
  let availSpots = newBoard.map((v, i) => v === null ? i : null).filter(v => v !== null);
  let result = gameResult(newBoard);
  if (result === HUMAN) return { score: -10 };
  else if (result === AI) return { score: 10 };
  else if (result === 'draw') return { score: 0 };

  let moves = [];
  for (let i of availSpots) {
    let move = { index: i };
    newBoard[i] = player;
    move.score = player === AI ? minimax(newBoard, HUMAN).score : minimax(newBoard, AI).score;
    newBoard[i] = null;
    moves.push(move);
  }

  return player === AI
    ? moves.reduce((a, b) => (a.score > b.score ? a : b))
    : moves.reduce((a, b) => (a.score < b.score ? a : b));
}

function makeMove(index, player) {
  if (board[index] !== null || gameOver) return false;
  board[index] = player;
  updateBoard();
  return true;
}
function aiTurn() {
  if (gameOver) return;
  let best = minimax(board, AI);
  makeMove(best.index, AI);
  let result = gameResult(board);
  result ? endGame(result) : updateStatus("Your turn!");
}
function playerTurn(e) {
  if (gameOver || !e.target.classList.contains('cell')) return;
  let idx = +e.target.getAttribute('data-index');
  if (!makeMove(idx, HUMAN)) return;
  let result = gameResult(board);
  if (result) endGame(result);
  else {
    updateStatus("AI is thinking...");
    setTimeout(aiTurn, 250);
  }
}
function endGame(result) {
  gameOver = true;
  updateStatus(result === HUMAN ? "You win! 🎉" : result === AI ? "AI wins!" : "It's a draw!");
  cells.forEach(cell => cell.classList.add('disabled'));
}
function resetGame() {
  board = Array(9).fill(null);
  gameOver = false;
  updateStatus("Your turn! Click a cell to play.");
  updateBoard();
}

boardEl.addEventListener('click', playerTurn);
restartBtn.addEventListener('click', resetGame);
resetGame();
