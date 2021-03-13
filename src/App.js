import React from 'react';
import {
    BrowserRouter as Router
} from "react-router-dom";

import './App.scss';
import Navbar from "./Component/Navbar";
import Page from "./Page/_Routes";
import HomeHeader from "./Component/HomeHeader";
import 'util';

function App() {

    return (
        <div className="App">
            <HomeHeader/>
            <Router>
                <Navbar/>
                <section id="page">
                    <Page/>
                </section>
            </Router>
            <hr/>
            <footer data-testid="footer">
                <div>Env: {process.env.NODE_ENV} - {process.env.__WB_MANIFEST}</div>
            </footer>
        </div>
    );
}

export default App;
