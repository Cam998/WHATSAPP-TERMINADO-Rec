import React from 'react';
import './loadingscreen.css';

function LoadingScreen({ progress = 0 }) {
    return (
        <div className="loading_screen_container">
            <div className="loading_screen_content">
                <div className="whatsapp_icon_wrapper">
                    <i className="bi bi-whatsapp"></i>
                </div>
                
                <div className="loading_bar_wrapper">
                    <div className="loading_bar_container">
                        <div 
                            className="loading_bar_progress" 
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                </div>

                <div className="loading_text_container">
                    <h1 className="loading_title">WhatsApp</h1>
                    <div className="loading_footer">
                        <i className="bi bi-lock-fill"></i>
                        <p>Cifrado de extremo a extremo</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoadingScreen;