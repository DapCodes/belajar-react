import { useState } from 'react'
import '../App.css'
import { Tombol2, Tombol } from '../component/Tombol'
import Input from '../component/Input'
import Palagraf from '../component/Palagraf'
import Foto from '../component/Foto'

import Image from '../assets/ts.jpg'

const Contact = () => {
    const [state, setState] = useState('Daffa Ramadhan');
    return (
        <div>
            <h1>Contact Us?</h1>
            <div style={{ width: '100%', overflow: 'hidden' }}>
                <Foto source={Image} width={500} height={500} border={'1000px'} />
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', gap: '10px', justifyContent: 'center' }}>
                    <Input />
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <Tombol2 text={'Hello'} warnaTombol={'teal'} warnaText={'yellow'} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact