import React, { useEffect } from "react";
import '../css/modal.css'

function ErrorModal({ isOpen, onClose, message }) {
    // モーダルが開いている間にのみタイマーを設定
    useEffect(() => {
    if (isOpen) {
        const timer = setTimeout(() => {
          onClose(); // 3秒後にモーダルを閉じる
        }, 6000); // CSSアニメーションの3秒と合わせて、合計6秒後に閉じるように設定

        return () => clearTimeout(timer); // コンポーネントのアンマウント時にタイマーをクリア
    }
    }, [isOpen, onClose]); // 依存配列にisOpenとonCloseを指定

    // モーダルが非表示の場合は何もレンダリングしない
    if (!isOpen) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <p className="modal-message">{message}</p>
                <span onClick={onClose}>&times;</span>
            </div>
        </div>
    );
}

export default ErrorModal;
