/**
 * Created by Rasmus on 2018-05-11.
 */

import React, { Component } from 'react';
import '../App.scss';
import test from '../vendor/test.jpg';
import NavBarView from './navbar.view';
import { Col, Row, Grid } from 'react-bootstrap';
import '../lib/css/animation.transition.css';
import styles from '../animation/css.animation';
import { Link, withRouter } from 'react-router-dom';
import ContentView from '../routes/content.routes';
import { connect } from 'react-redux';
import {PropTypes} from 'prop-types';
import { clickAction } from '../states/actions/navbar.actions';

const mapDispatchToProps = ( dispatch ) => {
      return {
          onNavClick: ( button ) => { dispatch( clickAction( button ) ) }
      }
};

const HomeView = ({ onNavClick }) =>{
    return (
        <div
            style={{
                ...styles.fill,
                background: "white"
            }}
        >
            <Grid center="md" id="appPage">
                <Col sm={3} md={3}>
                    <NavBarView/>
                </Col>
                <Col sm={9} md={9}>
                    <ContentView/>
                </Col>
            </Grid>
        </div>
    );
};

HomeView.propTypes = {
    onNavClick: PropTypes.func,
};

export default withRouter(connect(null, mapDispatchToProps)(HomeView));