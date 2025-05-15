import { useState } from 'react';

const Input = () => {

    const [text, setText] = useState('');

    return (
        <div>
            <input
                type="text"
                value={text}
                style={{ height: '40px', width: 'auto', margin: '10px', borderRadius: '5px', border: '1px solid #ccc', textAlign: 'center' }}
                placeholder="Your Name"
                onChange={(e) => setText(e.target.value)}
            />
            <div style={{ width: '500px', overflow: 'auto' }} >{text}</div>
        </div >
    );
}

export default Input;