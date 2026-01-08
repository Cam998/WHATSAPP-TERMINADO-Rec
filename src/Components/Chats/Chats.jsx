import React, { useState, useEffect } from "react";
import Chat from "../Chat/Chat";
import { chatsData } from "../../Data/whatsappData"
import "./chats.css";

function Chats({ filter, setSelectedChat, selectedChat }) {
const [chats, setChats] = useState(chatsData);

useEffect(() => {
const newChats = filter
    ? chatsData.filter((chat) => chat.unreadMsgs)
    : chatsData;
    setChats(newChats);
}, [filter]);

return (
    <div className="chats_container">
        <div className="chats_archived_container">
            <div className="chats_archived_title">
                <span>
                    <i className="bi bi-folder-fill"></i>  
                </span>
                <h1>Archived</h1>
            </div>
            <p className="chats_paragraph_number">3</p>
        </div>
        {chats.map((chat) => {
            return (
            <Chat
            key={chat.id}
            pp={chat.pp}
            contact={chat.contact}
            msg={chat.msg}
            time={chat.time}
            unreadMsgs={chat.unreadMsgs}
            active={selectedChat?.id === chat.id}
            setSelectedChat={setSelectedChat}
            chatData={chat}
            />
            );
        })}
        </div>
    );
}

export default Chats