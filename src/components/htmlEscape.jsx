import React, { useState } from "react";
import Modal from "./modal";
import "../css/html-escape.css"

// HTMLエスケープを行う関数
function escapeHtml(text) {
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function SafeTextDisplay() {
    const [text, setText] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [message, setMessage] = useState('');


    const handleChange = (event) => {
        setText(event.target.value);
    };

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(escapeHtml(text));
            setMessage('コピーしました！')
            setIsModalOpen(true);
        } catch (err) {
            console.error('コピーに失敗しました', err);
        }
    }

    return (
        <div className="container">
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} message={message} />
            <div className="function-name">HTMLエスケープ</div>
            <textarea className="box" value={text} onChange={handleChange} placeholder="テキストを入力してください"/>
            <p className="result">&#9759;エスケープされた文字列&#9759;</p>
            <textarea className="box" value={escapeHtml(text)} readOnly placeholder="エスケープされたテキストがここに表示されます"/>
            <button className="button" onClick={handleCopy}>コピー</button>
        </div>
    );
}

export default SafeTextDisplay;

