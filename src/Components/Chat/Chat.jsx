import React from 'react'
import "./chat.css";

function Chat({pp, contact, msg, time, unreadMsgs, active, setSelectedChat, chatData}){
    return(
        <div 
            className={`chat_container ${active ? 'active' : ''}`}
            onClick={() => setSelectedChat(chatData)}
        >
            <img className='chat_profile_pic' src={pp} alt='profile_pic'/>
            <div className='chat_right_container'>
                <div className='chat_row_top'>
                    <h1 className='chat_contact'>{contact}</h1>
                    <p className='chat_time'>{time}</p>
                </div>
                <div className='chat_row_bottom'>
                <p className={`chat_msg ${unreadMsgs ? 'unread' : ''}`}>{msg}</p>
                    {unreadMsgs && (
                        <div className='chat_unread'>
                            <p>{unreadMsgs}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Chat