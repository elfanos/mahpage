/**
 * Created by Rasmus on 2018-05-13.
 */
/**
 * Created by Rasmus on 2018-05-11.
 */
import React from 'react';
import ItemTutorialView from '../components/tutorial/items/item.view';
import { withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Route, Switch } from 'react-router-dom';

export const TutorialRoutes = ( { location } ) => {

    <Route path="/tutorials/:tutorialId" component={ItemTutorialView}/>

};
export default withRouter(TutorialRoutes);