import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './styles/Navbar.css';
import Home from './pages/Home';
import Music from './pages/Music';
import Mood from './pages/Mood';

import './styles/Home.css';

function App() {

    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/music" element={<Music/>} />
                <Route path="/mood" element={<Mood/>} />
            </Routes>
        </BrowserRouter>
  );
}

export default App;
