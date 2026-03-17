import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './styles/Navbar.css';
import Home from './pages/Home';
import Music from './pages/Music';
import Mood from './pages/Mood';
import About_us from './pages/About_us';
import My_page from './pages/My_page';
import './styles/Home.css';
import './styles/Music.css';
import './styles/About_us.css';
import './styles/Mood.css';
import './styles/My_page.css';

function App() {
    return (
        <BrowserRouter>
            <div className="logo">
                <Navbar/>
                
                <main className="main-content">
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/music" element={<Music/>} />
                        <Route path="/mood" element={<Mood/>} />
                        <Route path="/about_us" element={<About_us/>}/>
                        <Route path="/my_page" element={<My_page/>}/>
                    </Routes>
                </main>
            </div>
        
        </BrowserRouter>
  );
}

export default App;
