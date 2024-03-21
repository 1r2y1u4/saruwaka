import React, { useState } from "react";
import "../css/count-character.css"

function CountCharacters(){
    const [character, setCharacter] = useState('')

    const handleInputChange = (event) => {
        setCharacter(event.target.value);
    }

    return (
        <div className="container">
            <input className="input" type="text" value={character} onChange={handleInputChange} placeholder="テキストを入力してください"/>
            <span className="result">文字数：{character.length}</span>
        </div>
    );
}

export default CountCharacters;
