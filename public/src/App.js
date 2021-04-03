// import logo from './logo.svg';
import './App.scss';
import Header from "./shared/header";
import Footer from "./shared/footer";
import RecentlyAdded from './shared/recently_added';
import {BrowserRouter, Link, Route, Switch, withRouter} from "react-router-dom";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import React from "react";

function App() {
    const routes = ["/", "/header"]

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
                        <Route exact path='/'/>
                        <Route path='/header' component={Header}/>
                        {/*<Route path='/fish' component={Fish} />*/}
                        {/*Example setup ^^^^^^*/}
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
        )
    });

    return (
        <div className="App">
            <BrowserRouter>
                <AnimatedSwitch/>
                {/*<Header/>*/}
                <Link to={'/header'}> Header </Link>
                {/*Example for routing^^^^^^ (remove when some routes are set up)*/}
                <RecentlyAdded/>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;
