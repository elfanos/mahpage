/**
 * Created by Rasmus on 2018-05-11.
 */
import React from 'react';
import HomeView from '../components/home.view';
import OpenSourceView from '../components/open.source.view';
import TutorialView from '../components/tutorial/tutorial.view';
import WorkView from '../components/work/work.view';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import '../lib/css/animation.transition.css';
import styles from '../animation/css.animation';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import  Store  from '../states/store';
export const ApplicationRouter = (  ) => {
    //const locationKey = props.location.pathname;
    return(
        <Provider store ={Store.store} >
            <PersistGate persistor={Store.persistor}>
              <BrowserRouter>
                  <Route
                      render={ ( { location } ) => (
                          <div style={styles.fill}>
                              <HomeView/>
                          </div>
                      )}
                  />
              </BrowserRouter>
            </PersistGate>
        </Provider>
    );
};
