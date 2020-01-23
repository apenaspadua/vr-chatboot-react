import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './Home.css'

export default function SignIn() {
    const [name, setName] = useState('')
    
    return (
        <div className="homeOuterContainer">
            <div className="homeInnerContainer">
                <h1 className="heading">Thon</h1>
                <div>
                    <input 
                        placeholder="Informe seu nome" 
                        className="homeInput"
                        type="text"
                        onChange={(event) => setName(event.target.value)}>
                    </input>
                </div>
                <Link onClick={e => (!name) ? e.preventDefault(): null} to={`/chat?name=${name}`}>
                    <button className={'button mt-20'} type="submit">Entrar</button>
                </Link>
            </div>
        </div>
    )
}