import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import React, { useState, useEffect } from 'react';
import './global.css';
import WhatsApp from './Pages/Whatsapp';
import LoadingScreen from './Components/LoadingScreen/LoadingScreen';

function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return <LoadingScreen progress={progress} />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WhatsApp />} />
        <Route path="/chat/:chatId" element={<WhatsApp />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
