/**
 * Created by Rasmus on 2018-05-11.
 */
import React from 'react';
import OpenSourceView from '../components/open.source.view';
import WorkView from '../components/work/work.view';
import TutorialView from '../components/tutorial/tutorial.view';
import { withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Route, Switch } from 'react-router-dom';
import ItemTutorialView from '../components/tutorial/items/item.view';

export const ContentRoutes = ( props ) => {
    const locationKey = props.location.pathname;
    return (
        <TransitionGroup>
            <CSSTransition key={locationKey} classNames="fade" timeout={250}>
                <Switch location={props.location}>
                    <Route exact path="/" component={WorkView}/>
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