import { useState } from "react";
export default function ScoreKeeperExercise({ numPlayers = 3, target = 5 }) {
    const [scores, setScores] = useState(new Array(numPlayers).fill(0));

    // const incrementScore = (idx) => {
    //     setScores((prevScores) => {
    //       const copy = [...prevScores];
    //       copy[idx] += 1;
    //       return copy;
    //     });
    //   };

    const incrementScore = (idx) => {
        setScores((prevScores) => {
            return prevScores.map((score, i) => {
                if (idx === i) {
                    return score + 1;
                }
                return score;
            })
        })

    }

    const reset = () => {
        setScores(new Array(numPlayers).fill(0));
    };

    return (
        <div>
            <h1>Score Keeper</h1>
            <ul>
                {scores.map((score, i) => {
                    return (
                        <li key={i}>
                            Player{i + 1}: {score}
                            <button onClick={() => incrementScore(i)}>+1</button>
                            {score >= target && "Winner"}
                        </li>
                    );
                })}
            </ul>
            <button onClick={reset}>Reset</button>
        </div>
    );
}
