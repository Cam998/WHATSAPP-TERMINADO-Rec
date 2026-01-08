import React, { useEffect, useRef, useState, useCallback } from 'react';
import Message from '../Message/Message';
import RoundedBtn from '../Context/RoundedBtn';
import { messagesData } from '../../Data/whatsappData';
import { chat1, chat2 } from '../../Assets/whatsapp';
import './chatdetail.css';

function ChatDetail({ chat, onBack }) {
    const [messages, setMessages] = useState(messagesData);
    const [typing, setTyping] = useState(false);

    const inputRef = useRef(null);
    const bottomRef = useRef(null);

    const getTime = () => {
        return new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
        }).toLowerCase();
    };

    const addMessage = useCallback((msg) => {
        setMessages(prev => [...prev, msg]);
    }, []);

    const handleImgUpload = () => {
        addMessage({
            img: chat.pp,
            time: getTime(),
            sent: true,
        });
    };

    const handleInputSubmit = useCallback(() => {
        const val = inputRef.current.value.trim();
        if (val.length > 0) {
            addMessage({
                msg: val,
                time: getTime(),
                sent: true,
            });
            inputRef.current.value = "";
            inputRef.current.focus();
            setTyping(false);
        }
    }, [addMessage]);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({
            behavior: "smooth",
        })
    }, [messages])

    useEffect(() => {
        const listener = (e) => {
            if (e.code === "Enter") handleInputSubmit();
        };

        document.addEventListener("keydown", listener);
        return () => document.removeEventListener("keydown", listener);
    }, [handleInputSubmit]);
    return (
        <div className='chat_detail_main_container'>
            <div className='chat_detail_header'>
                <div className='chat_detail_info_container'>
                    <button className="back_btn" onClick={onBack}>
                        <i className="bi bi-arrow-left"></i>
                    </button>
                    <img className='chat_detail_profile_pic' src={chat.pp} alt='profile_picture' />
                    <div className='chat_detail_name_container'>
                        <h1>{chat.contact}</h1>
                        <p>En línea</p>
                    </div>
                </div>
                <div className='chat_detail_btn_container'>
                    <RoundedBtn icon={<i className="bi bi-search"></i>} className="chat_detail_btn" />
                    <RoundedBtn icon={<i className="bi bi-three-dots-vertical"></i>} className="chat_detail_btn" />
                </div>
            </div>
            <div className='chat_detail_messages_container'>
                {messages.map((message, index) => (
                    <Message
                        key={index}
                        msg={message.msg}
                        time={message.time}
                        isLink={message.isLink}
                        img={message.img}
                        sent={message.sent}
                    />
                ))}
                <div ref={bottomRef} />
            </div>
            <div className='chat_detail_bottom_container'>
                <RoundedBtn icon={<i className="bi bi-emoji-smile"></i>} className='chat_detail_btn' />
                <span>
                    <RoundedBtn icon={<i className="bi bi-paperclip"></i>} className='chat_detail_btn' />
                </span>
                <input type="text" placeholder='Escribe un mensaje' ref={inputRef} />
            </div>
        </div>
    )
}

export default ChatDetail