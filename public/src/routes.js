import React from "react";
import {Switch, Route} from "react-router-dom"
import Header from "./shared/header";
import {CSSTransition, TransitionGroup} from "react-transition-group";


export default () => {
    return (
        <TransitionGroup>
            <CSSTransition>
                <Switch>
                    <Route exact path='/'/>
                    <Route path='/header' component={Header}/>
                    {/*<Route path='/fish' component={Fish} />*/}
                    {/*Example setup ^^^^^^*/}
                </Switch>
            </CSSTransition>
        </TransitionGroup>
    )
}

