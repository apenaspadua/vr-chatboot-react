import React, { useState, useEffect } from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'

import TextContainer from '../TextContainer/TextContainer';
import Messages from '../Messages/Messages';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';

import './Chat.css'

let socket

const Chat = ({ location }) => {
    const [name, setName ] = useState('')
    const [users, setUsers] = useState('')
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState('')
    const ENDPOINT = '' //link api

    useEffect(() => {
        const { name } = queryString.parse(location.search)
        socket = io(ENDPOINT)

        setName(name)

        socket.emit('home', { name }, (error) => {
            if(error) {}
                alert(error)
        })
    }, [ENDPOINT, location.search])

    useEffect(() => {
        socket.on('message', (message) => {
            setMessage([...messages, message])
        })

        socket.on('roomData', ({ users }) => {
            setUsers(users)
        })

        return () => {
            socket.emit('disconnect')
            socket.off()
        }
    }, [messages])

    const sendMessage = (event) => {
        event.preventDefault()

        if(message)
            socket.emit('sendMessage', message, () => setMessage(''))
    }

    return (
        <div className="outerContainer">
            <div className="container">
                <InfoBar room="Chat Thon"/>
                <Messages messages={messages} name={name}/>
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
            </div>
            <TextContainer users={users}/>
        </div>
    )    
}
export default Chat

