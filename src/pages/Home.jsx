import { useEffect, useState } from 'react'
import '../App.css'
import { Tombol2, Tombol } from '../component/Tombol'
import Input from '../component/Input'
import Palagraf from '../component/Palagraf'
import Foto from '../component/Foto'

import Image from '../assets/ts.jpg'

const Home = () => {
    const [state, setState] = useState('Daffa Ramadhan');

    return (
        <div>
            <h1>Welcome to the Home Page</h1>
            <div style={{ width: '100%', overflow: 'hidden' }}>
                <Foto source={Image} width={500} height={500} border={'1000px'} />
                <Palagraf nama={state} />
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', gap: '10px', justifyContent: 'center' }}>
                    <Input />
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <Tombol />
                        <Tombol2 text={'click me'} warnaTombol={'yellowgreen'} warnaText={'purple'} borderRadius={'20px'} />
                        <Tombol2 text={'click me'} warnaTombol={'yellowgreen'} warnaText={'purple'} borderRadius={'0px 10px 0px 10px'} />
                        <Tombol2 text={'Hello'} warnaTombol={'teal'} warnaText={'yellow'} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home