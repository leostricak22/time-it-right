import { useState, useRef } from "react";

export default function Player() {
    const playerName = useRef();

    const [enteredPlayerName, setEnteredPlayerName] = useState();

    function handleClick() {
        let playerNameValue = playerName.current.value;

        if (playerNameValue === "") {
            return;
        }

        setEnteredPlayerName(playerNameValue);
        playerName.current.value = "";
    }

    return (
        <section id="player">
            <h2>Welcome, {enteredPlayerName ?? "Unknown entity"}!</h2>
            <p>
                <input ref={playerName} type="text" />
                <button onClick={handleClick}>Set name</button>
            </p>
        </section>
    );
}
