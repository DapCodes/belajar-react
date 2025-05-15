import { useState } from 'react'
import '../App.css'
import { Tombol2, Tombol } from '../component/Tombol'
import Foto from '../component/Foto'

import Image from '../assets/ts.jpg'

const About = () => {
    const [namaAwal, setNamaAwal] = useState('Daffa');
    const [namaTengah, setNamaTengah] = useState('Ramadhan');
    const [namaAkhir, setNamaAkhir] = useState('Maulana');
    return (
        <div>
            <h1>About Us</h1>
            <h5>{namaAwal + " " + namaTengah + " " + namaAkhir}</h5>
            <div style={{ width: '100%', overflow: 'hidden' }}>
                <Foto source={Image} width={500} height={500} border={'1000px'} />
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', gap: '10px', justifyContent: 'center' }}>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <Tombol2 text={'click me'} warnaTombol={'yellowgreen'} warnaText={'purple'} borderRadius={'0px 10px 0px 10px'} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About