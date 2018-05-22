/**
 * Created by Rasmus on 2018-05-11.
 */
import React from 'react';
import OpenSourceView from '../components/open.source.view';
import WorkView from '../components/work/work.view';
import TutorialView from '../components/tutorial/tutorial.view';
import { withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Route, Switch, Redirect } from 'react-router-dom';
import ItemTutorialView from '../components/tutorial/items/item.view';


/**
 * @ALERT CSSTransition call the components four times
 *
 * **/
const HomePage = ( { locationKey } ) => {
    console.log( locationKey );

        return (
            <Redirect to="/work"/>
        );

};

export const ContentRoutes = ( props ) => {
    const locationKey = props.location.pathname;

    return (
        <TransitionGroup>
            <Route exact path="/" render={() => <HomePage locationKey={locationKey}/>} />

            <CSSTransition key={locationKey} classNames="fade" timeout={250}>
                <Switch location={props.location}>
                    <Route exact path="/tutorials" component={TutorialView}/>
                    <Route exact path="/tutorials/:tutorialId" render={() => <ItemTutorialView height="2"/>} />
                    <Route exact path="/opensource" component={OpenSourceView} />
                    <Route exact path="/work" component={WorkView} />
                </Switch>
            </CSSTransition>
        </TransitionGroup>
    );

};

export default withRouter(ContentRoutes);