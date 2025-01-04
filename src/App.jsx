// React-Router
import { HashRouter, Routes, Route } from 'react-router-dom'

// Pages
import Home from './pages/Home'
import KeyboardPage from './pages/KeyboardPage'
import DrumsPage from './pages/DrumsPage';

// CSS
import './App.css'


function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/keyboard" element={<KeyboardPage />} />
        <Route path="/drums" element={<DrumsPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App
