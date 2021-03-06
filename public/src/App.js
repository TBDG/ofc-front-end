// import logo from './logo.svg';
import './App.scss';
import Header from "./shared/header";
import Footer from "./shared/footer";
import RecentlyAdded from './shared/recently_added';
import Blank from "./shared/blank"
import {BrowserRouter, Route, Switch, withRouter} from "react-router-dom";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import React from "react";
import Landing from "./shared/landing";

function App() {
    const routes = ["/", "/header", "/blank"]
    // ***Example setup ^^^ add route in array***

    const AnimatedSwitch = withRouter(({location}) => {
        const currentScreen = routes.indexOf(location.pathname),
            {state} = location,
            previousScreen = state ? state.previousScreen : 0,
            animationClassNames =
                currentScreen > previousScreen ? "slide-forward" : "slide-backward";
        return (
            <TransitionGroup
                childFactory={child => React.cloneElement(child, {classNames: animationClassNames})}>
                <CSSTransition
                    key={location.key}
                    classNames="slide"
                    timeout={1000}>
                    <Switch location={location}>
                        <Route exact path='/' component={Landing}/>
                        <Route path='/header' component={Header}/>
                        <Route path='/blank' component={Blank}/>
                        {/*<Route path='/fish' component={Fish} />*/}
                        {/*Example setup ^^^^^^*/}
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
        )
    });

    return (
        <div className="App">
            <Header/>
            <BrowserRouter>
                <AnimatedSwitch/>
                <RecentlyAdded/>
            </BrowserRouter>
            <Footer/>
        </div>
    );
}

export default App;
