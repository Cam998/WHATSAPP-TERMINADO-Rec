import { createRoot } from 'react-dom/client';
import { ThemeProvider } from './Components/Context/ThemeContext';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <ThemeProvider>
        <App />
    </ThemeProvider>
)
