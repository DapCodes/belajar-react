import { useState } from 'react'
import '../App.css'
import Input from '../component/Input'
import Foto from '../component/Foto'

import Image from '../assets/ts.jpg'

const Form = () => {
    const [state, setState] = useState('Daffa Ramadhan');
    return (
        <div>
            <h1>Welcome to Form page</h1>
            <div style={{ width: '100%', overflow: 'hidden' }}>
                <Foto source={Image} width={500} height={500} border={'1000px'} />
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', gap: '10px', justifyContent: 'center' }}>
                    <Input />
                </div>
            </div>
        </div>
    );
}

export default Form