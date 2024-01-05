import { useState } from "react";
import "./ColorBox.css";

function randomChoice(colors) {
    const randIndex = Math.floor(Math.random() * colors.length);
    return colors[randIndex];
}

export default function ColorBox({ colors }) {
    const [color, setColor] = useState(randomChoice(colors));
    const changeColor = () => {
        const randomColor = randomChoice(colors);
        setColor(randomColor);
    };
    return (
        <div
            className="ColorBox"
            style={{ backgroundColor: color }}
            onClick={changeColor}
        ></div>
    )
}
