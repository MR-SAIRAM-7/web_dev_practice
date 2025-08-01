import { useState } from "react";

export default function LudoBoard() {
    const [moves, setMoves] = useState({ blue: 0, yellow: 0, green: 0, red: 0 });

    function updateBlue() {
        setMoves((prevMoves) => ({
            ...prevMoves,
            blue: prevMoves.blue + 1,
        }));
    }

    function updateYellow() {
        setMoves((prevMoves) => ({
            ...prevMoves,
            yellow: prevMoves.yellow + 1,
        }));
    }

    function updateGreen() {
        setMoves((prevMoves) => ({
            ...prevMoves,
            green: prevMoves.green + 1,
        }));
    }

    function updateRed() {
        setMoves((prevMoves) => ({
            ...prevMoves,
            red: prevMoves.red + 1,
        }));
    }

    return (
        <div>
            <div className="board">
                <p>Blue moves = {moves.blue}</p>
                <button style={{ backgroundColor: "blue", color: "white" }} onClick={updateBlue}>+1</button>

                <p>Yellow moves = {moves.yellow}</p>
                <button style={{ backgroundColor: "yellow", color: "black" }} onClick={updateYellow}>+1</button>

                <p>Green moves = {moves.green}</p>
                <button style={{ backgroundColor: "green", color: "white" }} onClick={updateGreen}>+1</button>

                <p>Red moves = {moves.red}</p>
                <button style={{ backgroundColor: "red", color: "white" }} onClick={updateRed}>+1</button>
            </div>
        </div>
    );
}
