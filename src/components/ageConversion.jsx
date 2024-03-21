import React, { useState } from "react";
import "../css/count-character.css"

function AgeConversion(){
    const [age, setAge] = useState('');
    const [birthYear, setBirthYear] = useState('');
    const [era, setEra] = useState('');
    const [zodiac, setZodiac] = useState('');
    const zodiacSigns = ['子（ねずみ）', '丑（うし）', '寅（とら）', '卯（うさぎ）', '辰（たつ）', '巳（へび）', '午（うま）', '未（ひつじ）', '申（さる）', '酉（とり）', '戌（いぬ）', '亥（いのしし）'];
    const currentYear = new Date().getFullYear();
    const maxAge = 156;
    const minAge = 0;
    
    const handleInputChange = (event) => {
        const inputAge = event.target.value;
        const numericAge = Number(inputAge);
        // 年齢が0から156の範囲外の場合は、変更を無視する
        if (numericAge < 0 || numericAge > 156 || inputAge === '') {
            setAge('');
            return;
        }

        setAge(inputAge);
        
        if(inputAge === ''){
            setBirthYear('');
            setEra('');
            setZodiac('');
            return;
        }
        const birthYear = currentYear - inputAge;
        setBirthYear(birthYear);

        // 和暦の計算（明治以降）
        const eras = [
            { name: '令和', year: 2019 },
            { name: '平成', year: 1989 },
            { name: '昭和', year: 1926 },
            { name: '大正', year: 1912 },
            { name: '明治', year: 1868 }
        ];
        const eraFound = eras.find(era => birthYear >= era.year);
        if (eraFound) {
            const yearInEra = birthYear - eraFound.year;
            setEra(`${eraFound.name}${yearInEra === 0 ? '元' : yearInEra + 1}年`);
        }

        const zodiacIndex = (birthYear - 4) % 12;
        setZodiac(zodiacSigns[zodiacIndex]);
    }
    

    return (
        <div className="container">
            <div className="function-name">年齢検索</div>
            <input className="input" type="number" max={maxAge} min={minAge} value={age} onChange={handleInputChange} placeholder="年齢を入力してください"/>
            <p className="result">生まれ年：{birthYear}</p>
            <p className="result">和暦：{era}</p>
            <p className="result">干支：{zodiac}</p>
        </div>
    );
}

export default AgeConversion;
