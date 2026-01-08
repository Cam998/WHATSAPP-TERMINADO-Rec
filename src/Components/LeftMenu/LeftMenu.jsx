import React, { useState } from "react";
import { useTheme } from "../Context/ThemeContext";
import Chats from "../Chats/Chats";
import RoundedBtn from "../Context/RoundedBtn";
import { perfil } from "../../Assets/whatsapp";
import "./leftmenu.css";

function LeftMenu({ setSelectedChat, selectedChat }) {
    const [filter, setFilter] = useState(false);
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="left_menu_container">
            <div className="left_menu_nav_container">
                <img className='left_menu_profile_pic' src={perfil} alt='profile_picture' />
                <div className="left_menu_btn_container">
                    <RoundedBtn
                        icon={<i className={`bi ${theme === 'dark' ? 'bi-sun-fill' : 'bi-moon-fill'}`}></i>}
                        className="left_menu_btn"
                        onClick={toggleTheme}
                    />
                    <RoundedBtn icon={<i className="bi bi-people-fill"></i>} className="left_menu_btn" />
                    <RoundedBtn icon={<i className="bi bi-chat-left-text-fill"></i>} className="left_menu_btn" />
                    <RoundedBtn icon={<i className="bi bi-three-dots-vertical"></i>} className="left_menu_btn" />
                </div>
            </div>

            <div className="left_menu_bottom_container">
                <input className="left_menu_input_container" placeholder="Buscar o iniciar un nuevo chat" />
                <button className="filter_btn" onClick={() => setFilter(!filter)}>
                    <i className="bi bi-filter"></i>
                </button>
            </div>
            <Chats filter={filter} setSelectedChat={setSelectedChat} selectedChat={selectedChat} />
        </div>
    );
}

export default LeftMenu