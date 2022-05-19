import React, {useState} from 'react'
import Message from "./Message";
import s from './Message.module.css'
import {Button, Input} from "antd";

const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Marina',
    message: 'Some text',
    time: '22:00',
}

function HW1() {
    const [messages, setMessages] = useState([messageData])
    const [inputValue, setInputValue] = useState('');

    return (
        <div>
           <h3 className={s.subTitle}>homework 1</h3>
            <hr/>

            {/*should work (должно работать)*/}

            {
                messages.map((message, i) => (
                    <Message
                        avatar={message.avatar}
                        name={message.name}
                        message={message.message}
                        time={message.time}
                    />
                ))
            }
            <Input
                style={{width: '200px'}}
                onChange={(event) => {
                    setInputValue(event.target.value)
                }}
                value={inputValue}
                type="text"
            />
            <Button
                onClick={() => {
                    setMessages([...messages, {...messageData, message: inputValue}])
                    setInputValue('')
                }}
            >
                Отправить
            </Button>
            {/*<AlternativeMessage/>*/}


        </div>
    )
}

export default HW1
