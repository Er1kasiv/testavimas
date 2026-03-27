import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [isAIMode, setIsAIMode] = useState(false);
  const winner = calculateWinner(board);
  const isDraw = !winner && board.every((square) => square !== null);

  useEffect(() => {
    if (isAIMode && !isXNext && !winner) {
      const timer = setTimeout(() => {
        setBoard((prevBoard) => {
          const emptySquares = prevBoard.reduce(
            (acc, val, idx) => (val === null ? [...acc, idx] : acc),
            []
          );
          if (emptySquares.length === 0) return prevBoard;
          const randomMove = emptySquares[Math.floor(Math.random() * emptySquares.length)];
          return prevBoard.map((val, i) => (i === randomMove ? "O" : val));
        });
        setIsXNext(true);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isAIMode, isXNext, winner]);

  const handleClick = (index) => {
    if (board[index] || winner) return;
    setBoard((prevBoard) =>
      prevBoard.map((val, i) => (i === index ? (isXNext ? "X" : "O") : val))
    );
    setIsXNext(!isXNext);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  return (
    <div className="game">
      <h1>Tic-Tac-Toe</h1>
      <div className="board">
        {board.map((value, index) => (
          <button key={index} className="square" onClick={() => handleClick(index)}>
            {value}
          </button>
        ))}
      </div>
      <h2>{winner ? `Winner: ${winner}` : isDraw ? "Draw" : `Next Player: ${isXNext ? "X" : "O"}`}</h2>
      <button className="reset" onClick={resetGame}>Reset</button>
      <button className="play-ai" onClick={() => { resetGame(); setIsAIMode(!isAIMode); }}>
        {isAIMode ? "Play 2-Player" : "Play vs AI"}
      </button>
    </div>
  );
};

export const calculateWinner = (board) => {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];
  for (let [a, b, c] of lines) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
};

export default App;