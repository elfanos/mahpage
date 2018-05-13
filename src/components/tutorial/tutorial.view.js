/**
 * Created by Rasmus on 2018-05-11.
 */
import React from 'react';
import { PropTypes } from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { clickAction } from '../../states/actions/navbar.actions';
import {TransitionGroup, CSSTransition } from 'react-transition-group';
import * as type from '../../states/constants/navbar.contants';
import { Col, Row, Grid } from 'react-bootstrap';
import TutorialGridComponent from './tutorial.grid.component';
import spotifyapi  from '../../vendor/spotifyapi.jpg';
import { tutorialsArray } from '../../objects/tutorial.objects';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

let index = 0;
const tutorialAdapter = ( data ) => {
    return (
        <Col sm={4} md={4}
                style={{
                    ...style.tutorialGridPadding,
                }}
        >
            {/*console.log(data)*/};
                <TutorialGridComponent
                    image={data.image}
                    header={data.header}
                />
        </Col>
    );
};


let delayTransition = ( callback, data ) => {
    setTimeout(() => {
            console.log("data");
            callback(tutorialAdapter( data ));
        },
    index*300);
    index += 1;
    if(index === tutorialsArray().size){
        index = 0;
    }
};


const mapStateToProps = ( state ) => {
    return {
        getAdapters: async () => {
            tutorialsArray().map(data => {
                    console.log(delayTransition(
                        (data) => {
                            return (data);
                        }
                        , data
                    ));
                }
            )
        }
    }
};

const TutorialView = ( { getAdapters, somthing } ) =>{

    return(
        <div
        >
            <Row md="">
                <h3>Tutorials</h3>
                <Col md={12}
                     style={style.tutorialFill}
                >
                        {
                            tutorialsArray().map(function(item,i) {
                                return (
                                    <TutorialGridComponent key={i} data={item} duration={100} index={i}/>
                                );
                            })
                        }
                </Col>
            </Row>
        </div>
    );

};
TutorialView.propTypes = {
    getAdapters: PropTypes.func,
};
const style = {
    tutorialFill: {
        marginTop: "50px",
    },
    tutorialGridPadding: {
        paddingRight: '0px',
        paddingLeft: '0px'
    },
};
export default withRouter(connect(mapStateToProps, null)(TutorialView));