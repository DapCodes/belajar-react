import { useState } from "react";

export const Tombol = () => {


    const [hitung, setHitung] = useState(0);

    return (

        <div className="tombol" style={{ display: 'flex', gap: '10px' }}>
            <button onClick={() => setHitung(prev => prev - 1)}>
                -
            </button>
            <button>
                {hitung}
            </button>
            <button onClick={() => setHitung(prev => prev + 1)}>
                +
            </button>
        </div>
    );
}

export const Tombol2 = ({ text, warnaTombol, borderRadius, warnaText }) => {
    const handleClick = () => {
        alert("Button clicked!");
    };

    return (
        <div className="tombol">
            <button onClick={handleClick} style={{ backgroundColor: warnaTombol, borderRadius: borderRadius, color: warnaText }} className="border border-gray-300 rounded p-2">
                {text}
            </button>
        </div>
    );
}
