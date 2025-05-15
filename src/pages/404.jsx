import { useState } from 'react'
import '../App.css'
import Foto from '../component/Foto'

import Image from '../assets/ts.jpg'

const NotFound = () => {
    const [state, setState] = useState('Daffa Ramadhan');
    return (
        <div>
            <h1>404 Not Found</h1>
            <Foto source={Image} width={500} height={500} border={'1000px'} />
        </div>
    );
}

export default NotFound