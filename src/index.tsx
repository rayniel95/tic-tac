import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';


type SquareProps = {
    value: number
    playerNumber: boolean
}

function Square(props: SquareProps): JSX.Element {
    const [clicked, setClicked] = useState(false);

    return (
        <button className="square" onClick={() => setClicked(!clicked)}>
            {clicked ? "X" : props.value}
        </button>
    );
}

type BoardProps = {
    playerNumber: boolean
}

function Board({ playerNumber }: BoardProps): JSX.Element {
    const [board, setBoard] = useState(
        [...Array(3)].map(
            (_, indexFirst: number) => {
                return [...Array(3)].map(
                    (valueSecond: number) => (3 * indexFirst + valueSecond).toString()
                )
            }
        )
    );

    function renderSquare(i: any) {
        return <Square value={i} playerNumber={playerNumber} />;
    }
    const status = 'Next player: X';

    return (
        <div>
            <div className="status">{status}</div>
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    );
}

function Game(): JSX.Element {
    const [player, setPlayer] = useState(true);

    return (
        <div className="game">
            <div className="game-board">
                <Board playerNumber={player} />
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
