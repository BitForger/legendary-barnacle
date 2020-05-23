import React from 'react';
import './App.scss';
import {Switch, Route} from 'react-router-dom';
import {HomePage} from "./pages/home/HomePage";
import {Header} from "./components/Header";
import {Content} from "carbon-components-react";
import {Footer} from "./components/Footer/Footer";

function App() {
    return (
        <>
            <Header/>
            <Content>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                </Switch>
            </Content>
            <Footer/>
        </>
    );
}

export default App;
