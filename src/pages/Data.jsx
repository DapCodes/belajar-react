import { useState } from 'react'
import '../App.css'
import Foto from '../component/Foto'
import Image from '../assets/ts.jpg'

const Data = () => {
    const [state, setState] = useState('Daffa Ramadhan')
    const [data, setData] = useState([])
    const [category, setCategory] = useState('')

    const fetchData = async (type) => {
        setCategory(type)
        try {
            const res = await fetch(`https://jsonplaceholder.typicode.com/${type}`)
            const result = await res.json()
            setData(result)
        } catch (err) {
            console.error('Error fetching data:', err)
        }
    }

    return (
        <div>
            <h1>Fetch API by Button</h1>

            <div style={{ width: '100%', overflow: 'hidden' }}>
                <Foto source={Image} width={500} height={500} border={'1000px'} />
            </div>

            <div style={{ margin: '20px 0' }}>
                <button onClick={() => fetchData('comments')}>Load Comments</button>
                <button onClick={() => fetchData('albums')}>Load Albums</button>
                <button onClick={() => fetchData('users')}>Load Users</button>
                <button onClick={() => fetchData('todos')}>Load Todos</button>
            </div>

            <div>
                <h2>Data: {category}</h2>
                {data.length > 0 ? data.map((item, index) => (
                    <div key={index} style={{ border: '1px solid white', margin: '10px 0', padding: '10px' }}>
                        {
                            category === 'comments' && (
                                <>
                                    <strong>{item.name}</strong><br />
                                    <small>{item.email}</small><br />
                                    <p>{item.body}</p>
                                </>
                            )
                        }
                        {
                            category === 'albums' && (
                                <>
                                    <strong>Album Title:</strong> {item.title}
                                </>
                            )
                        }
                        {
                            category === 'users' && (
                                <>
                                    <strong>{item.name}</strong><br />
                                    <small>{item.email}</small>
                                </>
                            )
                        }
                        {
                            category === 'todos' && (
                                <>
                                    <strong>Task:</strong> {item.title}<br />
                                    <em>Status:</em> {item.completed ? 'Done' : 'Pending'}
                                </>
                            )
                        }
                    </div>
                )) : <p>No data loaded.</p>}
            </div>
        </div>
    )
}

export default Data
