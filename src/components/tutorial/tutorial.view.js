/**
 * Created by Rasmus on 2018-05-11.
 */
import React from 'react';
import { PropTypes } from 'prop-types';
import { Col, Row, Grid } from 'react-bootstrap';
import TutorialGridComponent from './tutorial.grid.component';
import { tutorialsArray } from '../../objects/tutorial.objects';
import { Link, Route } from 'react-router-dom';

const TutorialView = ( ) =>{

    return(
        <div
            style={{
                marginTop: "60px"
            }}
        >
            <Row md=""
            >
                <Col md={12}
                     style={style.tutorialFill}
                >
                        {
                            tutorialsArray().map(function(item,i) {
                                return (
                                    <Link to={`tutorials/${item.id}`} key={item.id}>
                                        <TutorialGridComponent key={i} data={item} duration={100} index={i} id={item.id}/>
                                    </Link>
                                );
                            })
                        }
                </Col>
            </Row>
        </div>
    );

};
const style = {
    tutorialFill: {
        marginTop: "0",
    },
    tutorialGridPadding: {
        paddingRight: '0px',
        paddingLeft: '0px',
    },
};
export default TutorialView;