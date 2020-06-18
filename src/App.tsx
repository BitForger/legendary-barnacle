import React, {Component} from 'react';
import './App.scss';
import {Switch, Route, withRouter} from 'react-router-dom';
import {HomePage} from "./pages/home/HomePage";
import {Header} from "./components/Header";
import {Content} from "carbon-components-react";
import {Footer} from "./components/Footer/Footer";
import {Projects} from "./pages/projects/Projects";

export class App extends Component<any, any>{
    render() {
        const {location} = this.props;
        return (
            <>
                <Header/>
                <Content id={location?.pathname?.replace('/', '') || 'home'}>
                    <Switch>
                        <Route exact path="/" component={HomePage}/>
                        <Route path="/projects" component={Projects}/>
                    </Switch>
                </Content>
                <Footer/>
            </>
        );
    }
}

export const AppWithRouter = withRouter(App)
