import React, { useState } from "react";
import "../css/count-character.css"

function CountCharacters(){
    const [character, setCharacter] = useState('')
    const characterWithoutLines = character.replace(/\n/g, '');

    const handleInputChange = (event) => {
        setCharacter(event.target.value);
    }

    return (
        <div className="container">
            <div className="function-name">文字数のカウント</div>
            <textarea className="input" value={character} onChange={handleInputChange} placeholder="テキストを入力してください"/>
            <p className="result">改行を含めた文字数：{character.length}</p>
            <p className="result">改行を含めない文字数：{characterWithoutLines.length}</p>
        </div>
    );
}

export default CountCharacters;
