import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import LeftMenu from '../Components/LeftMenu/LeftMenu';
import ChatDetail from '../Components/ChatDetail/ChatDetail'
import { chatsData } from '../Data/whatsappData';
import './whatsapp.css'

function WhatsApp(){
    const { chatId } = useParams();
    const navigate = useNavigate();
    const [selectedChat, setSelectedChat] = useState(null);

    useEffect(() => {
        if (chatId) {
            const chat = chatsData.find(c => c.id === parseInt(chatId));
            if (chat) {
                setSelectedChat(chat);
            } else {
                navigate('/');
            }
        } else {
            setSelectedChat(null);
        }
    }, [chatId, navigate]);

    return(
        <div className='main_container'>
            <div className={`left_menu_wrapper ${selectedChat ? 'mobile-hidden' : ''}`}>
                <LeftMenu setSelectedChat={(chat) => navigate(`/chat/${chat.id}`)} selectedChat={selectedChat}/>
            </div>
            <div className={`chat_detail_wrapper ${!selectedChat ? 'mobile-hidden' : ''}`}>
                {selectedChat ? (
                    <ChatDetail chat={selectedChat} onBack={() => navigate('/')}/>
                ) : (
                    <div className="landing_placeholder">
                        <h1>WhatsApp Web</h1>
                        <p>Envía y recibe mensajes sin necesidad de tener tu teléfono conectado.</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default WhatsApp