import React from 'react'
import styles from './Message.module.css'

type PropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message({ avatar, name, message, time }: PropsType) {
    return (
        <div>
            <div className={styles.messageBlock}>
                <img className={styles.img} src={avatar} alt="img"/>
                <div className={styles.textBlock}>
                    <p className={styles.name}>{name}</p>
                    <p className={styles.text}>{message}</p>
                    <p className={styles.time}>{time}</p>
                    <div className={styles.arrow}/>
                </div>
            </div>
        </div>
    )
}

export default Message
