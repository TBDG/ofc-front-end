// import logo from './logo.svg';
import './app.scss';
import Header from "./shared/header";
import Footer from "./shared/footer";
import routes from "./routes";
import {Link, Route, Switch, withRouter} from "react-router-dom";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import React from "react";

function App() {

    const AnimatedSwitch = withRouter(({location}) => (
        <TransitionGroup>
            <CSSTransition
                key={location.key}
                classNames="slide"
                timeout={1000}>
                <Switch>
                    <Route exact path='/'/>
                    <Route path='/header' component={Header}/>
                    {/*<Route path='/fish' component={Fish} />*/}
                    {/*Example setup ^^^^^^*/}
                </Switch>
            </CSSTransition>
        </TransitionGroup>
    ));

    return (
        <div className="App">
            <AnimatedSwitch/>
            {/*{routes()}*/}
            <Header/>
            <Link to={'/header'}> Header </Link>
            {/*Example for routing^^^^^^ (remove when some routes are set up)*/}
            <Footer/>
        </div>
    );
}

export default App;
