import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Footer from './Layout/Footer/Footer';
import Game from './Game/Game';
import Header from './Layout/Header/Header';

ReactDOM.render(
    <React.StrictMode>
    <Header />
        <div className="container-fluid text-center">
            <Game />
        </div>
    <Footer />
    </React.StrictMode>,
    document.getElementById('root')
);
