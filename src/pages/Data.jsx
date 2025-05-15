import { useState, useEffect } from 'react'
import '../App.css'
import Input from '../component/Input'
import Foto from '../component/Foto'

import Image from '../assets/ts.jpg'

const Data = () => {
    const [state, setState] = useState('Daffa Ramadhan');
    const [todos, setTodos] = useState([])

    useEffect(() => {

        const fetcher = async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/user')
            const data = await res.json()
            setTodos(data)
        }

        fetcher()

    }, [])
    return (
        <div>
            <h1>Fetch API</h1>
            <div style={{ width: '100%', overflow: 'hidden' }}>
                <Foto source={Image} width={500} height={500} border={'1000px'} />
            </div>
            <div>
                {
                    todos.length > 0 && todos.map((todo, index) => (
                        <div key={index} style={{ border: '1px solid white', margin: '10px 0' }} >
                            {todo.id} {todo.title}
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Data