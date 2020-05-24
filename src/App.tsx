import React from 'react';
import './App.scss';
import {Switch, Route} from 'react-router-dom';
import {HomePage} from "./pages/home/HomePage";
import {Header} from "./components/Header";
import {Content} from "carbon-components-react";
import {Footer} from "./components/Footer/Footer";
import {Projects} from "./pages/projects/Projects";

function App() {
    return (
        <>
            <Header/>
            <Content>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route path="/projects" component={Projects}/>
                </Switch>
            </Content>
            <Footer/>
        </>
    );
}

export default App;
