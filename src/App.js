import React from 'react';
import Header from './components/header';
import {Routes, Route, Link, Router} from 'react-router-dom';
import Kids from './pages/Kids';
import Men from './pages/Men';
import Women from './pages/Women';

function App(props) {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Women/>}/>
                <Route path="/Men" element={<Men/>}/>
                <Route path="/Kids" element={<Kids/>}/>
            </Routes>
        </div>
    );
}

export default App;