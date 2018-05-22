/**
 * Created by Rasmus on 2018-05-11.
 */

import React from 'react';
import '../App.scss';
import NavBarView from './navbar.view';
import { Col, Grid, Jumbotron } from 'react-bootstrap';
import '../lib/css/animation.transition.css';
import styles from '../animation/css.animation';
import { withRouter } from 'react-router-dom';
import ContentRoutes from '../routes/content.routes';
import { bootstrapUtils } from 'react-bootstrap/lib/utils'

bootstrapUtils.addStyle(Jumbotron, 'custom');
const HomeView = ( props ) => {
    const locationKey = props.location.pathname;
    return (
        <div>
            <style type="text/css">{`
              .jumbotron p {
                font-size: 15px;
              }
              .jumbotron h1 {
                font-size: 35px;
              }
              .jumbotron h2 {
                font-size: 20px;
                font-weight: 300;
              }
            `}</style>
            <div
                style={
                    {
                    ...styles.fill,
                    background: "white"
                    }

                }
                id="containerDiv"
            >
                <Grid center="container" id="appPage"
                    style={{
                        paddingTop: '0px',
                        paddingBottom: '0px',
                        marginBottom: '0px',
                        marginTop: '40px',
                        maxWidth: '900px'
                    }}
                   bsStyle="custom"
                >
                    <Col sm={2} md={2}>
                        <NavBarView currPath={locationKey} appProps={props}/>
                    </Col>
                    <Col sm={10} md={10}
                        style = {{
                            paddingLeft: '50px',
                            paddingRight: '50px'
                        }}
                    >
                        <ContentRoutes props={props}/>
                    </Col>
                </Grid>
            </div>
        </div>
    );
};

export default withRouter(HomeView);