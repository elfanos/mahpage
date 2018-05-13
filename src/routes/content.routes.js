/**
 * Created by Rasmus on 2018-05-11.
 */
import React from 'react';
import OpenSourceView from '../components/open.source.view';
import WorkView from '../components/work.view';
import TutorialView from '../components/tutorial/tutorial.view';
import { withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Route, Switch } from 'react-router-dom';

export const ContentView = ( { location } ) => {

    return (
        <TransitionGroup>
            <CSSTransition key={location.key} classNames="fade" timeout={250}>
                <Switch location={location}>
                    <Route exact path="/" component={WorkView}/>
                    <Route exact path="/tutorials" component={TutorialView}/>
                    <Route exact path="/opensource" component={OpenSourceView} />
                    <Route exact path="/work" component={WorkView} />
                </Switch>
            </CSSTransition>
        </TransitionGroup>
    );

};
export default withRouter(ContentView);