import React from 'react'

import onlineIcon from '../../icons/onlineIcon.png'
import './TextContainer.css'

const TextContainer = ({ users }) => (
    <div className="textContainer">
        <div>
            <h1>Conheça o Thon<span role="img" aria-label="emoji">💬</span></h1>
            <h2>Nosso chatboot para te auxiliar em suas dúvidas e problemas<span role="img" aria-label="emoji">❤️</span></h2>
            <h2>Faça um teste agora mesmo! <span role="img" aria-label="emoji">⬅️</span></h2> 
        </div>
        {
            users
            ? (
                <div>
                    <h1>Pessoas atualmente conversando</h1>
                    <div className="activeItem">
                        <h2>
                            {users.map(({name}) => (
                                <div key={name} className="activeItem">
                                    {name}
                                    <img alt="Online Icon" src={onlineIcon}/>
                                </div>
                            ))}
                        </h2>
                    </div>
                </div>
            )
            : null
        }
    </div>
)
export default TextContainer