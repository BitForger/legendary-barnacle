import React, {Component, ComponentClass} from 'react';
import './App.scss';
import {Switch, Route, withRouter} from 'react-router-dom';
import {HomePage} from "./pages/home/HomePage";
import {Header} from "./components/Header";
import {Content} from "carbon-components-react";
import {Footer} from "./components/Footer/Footer";
import {Projects} from "./pages/projects/Projects";
import {nanoid} from "nanoid";

export class App extends Component<any, any> {

    protected routes: RouteDefinition[] = [
        {component: HomePage, path: '/', exact: true, meta: {title: 'Noah Kovacs | Home'}},
        {component: Projects, path: '/projects', exact: false, meta: {title: 'Noah Kovacs | Projects'}}
    ];

    componentDidMount() {
        const {location} = this.props;
        const thisRoute = this.routes.find(value => value.path === location.pathname);
        document.title = thisRoute?.meta?.title ?? 'Noah Kovacs | Home';
    }

    componentDidUpdate(nextProps: Readonly<any>, nextState: Readonly<any>, nextContext: any): boolean {
        const thisRoute = this.routes.find(value => value.path === nextProps.history.location.pathname);
        document.title = thisRoute?.meta?.title ?? 'Noah Kovacs';
        return true;
    }

    render() {
        const {location} = this.props;
        return (
            <>
                <Header/>
                <Content id={location?.pathname?.replace('/', '') || 'home'}>
                    <Switch>
                        {this.routes.map(value => <Route exact={value.exact}
                                                         path={value.path}
                                                         component={value.component}
                                                         title={value.meta?.title}
                                                         key={nanoid(6)}
                        />)}
                    </Switch>
                </Content>
                <Footer/>
            </>
        );
    }
}

interface RouteDefinition {
    component: ComponentClass;
    path: string;
    exact: boolean;
    meta?: {
        title?: string
    }
}

export const AppWithRouter = withRouter(App)
