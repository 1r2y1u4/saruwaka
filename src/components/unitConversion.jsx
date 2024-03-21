import React, { useState } from 'react';
import "../css/unit-conversion.css";

function ByteConverter() {
    const [inputValue, setInputValue] = useState('');
    const [baseUnit, setBaseUnit] = useState('MB');
    const units = ["B", "KB", "MB", "GB", "TB"];

    const convertBytes = (input, base) => {
        const baseValue = input * Math.pow(1024, units.indexOf(base));
        return units.map(unit => baseValue / Math.pow(1024, units.indexOf(unit)));
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleBaseUnitChange = (e) => {
        setBaseUnit(e.target.value);
    };

    const convertedValues = inputValue ? convertBytes(inputValue, baseUnit) : Array(units.length).fill(0);

    return (
        <div className='container'>
            <div className="function-name">バイト数変換</div>
            {units.map((unit) => (
                <label key={unit}>
                    <input
                        type="radio"
                        name="baseUnit"
                        value={unit}
                        checked={baseUnit === unit}
                        onChange={handleBaseUnitChange}
                    />
                    {unit}
                </label>
            ))}
            <input
                className='input'
                type="number"
                value={inputValue}
                onChange={handleInputChange}
                placeholder={`数値を入力 (${baseUnit})`}
            />
            <table className='table-container'>
                <thead>
                    <tr>
                        <th>変換結果</th>
                        <th>単位</th>
                    </tr>
                </thead>
                <tbody>
                    {convertedValues.map((value, index) => (
                        <tr key={units[index]}>
                            <td>{value.toFixed(2)}</td>
                            <td>{units[index]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ByteConverter;
