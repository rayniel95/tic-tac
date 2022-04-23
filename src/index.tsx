import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';


type SquareProps = {
    value: string
    onClick: (arg0: string) => void
}

function Square(props: SquareProps): JSX.Element {
    return (
        <button className="square" onClick={() => props.onClick(props.value)}>
            {props.value}
        </button>
    );
}

interface Player {
    playerNumber: boolean,
    setPlayerNumber: (arg0: boolean) => void
}

type BoardProps = {
    player: Player
}

function Board(): JSX.Element {
    const [board, setBoard] = useState(
        Array.from(Array(9).keys()).map((value: number)=>{
            console.log(value);
            return value.toString()
        })
    );
    const [playerNumber, setPlayerNumber] = useState(true);

    // REVIEW - this should be a hook
    function mutateState(index: string) {
        const indexNumber = Number(index);
        if(isNaN(indexNumber)){
            return;
        }
        const newBoard = board.slice();
        newBoard[indexNumber] = playerNumber? "X": "O";
        setBoard(newBoard);
        setPlayerNumber(!playerNumber);
    }

    function renderSquare(i: string) {
        return <Square value={i} onClick={mutateState} />;
    }
    const status = `Next player: ${playerNumber}`;

    return (
        <div>
            <div className="status">{status}</div>
            <div className="board-row">
                {renderSquare(board[0])}
                {renderSquare(board[1])}
                {renderSquare(board[2])}
            </div>
            <div className="board-row">
                {renderSquare(board[3])}
                {renderSquare(board[4])}
                {renderSquare(board[5])}
            </div>
            <div className="board-row">
                {renderSquare(board[6])}
                {renderSquare(board[7])}
                {renderSquare(board[8])}
            </div>
        </div>
    );
}

function Game(): JSX.Element {
    return (
        <div className="game">
            <div className="game-board">
                <Board />
            </div>
            <div className="game-info">
                <div>{/* status */}</div>
                <ol>{/* TODO */}</ol>
            </div>
        </div>
    );
}

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
