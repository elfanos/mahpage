/**
 * Created by Rasmus on 2018-05-11.
 */
import React from 'react';
import '../App.scss';
import test from '../vendor/test.jpg';
import { Col, Row }  from 'react-bootstrap';
import '../lib/css/animation.transition.css';
import { Link } from 'react-router-dom';
const NavBarView = () => {
    return(
        <div>
            <Row center="md">
                <Col md={12} className="test">
                    <div id="imageHeader">
                        <img src={test} width="100" height="100" />
                    </div>
                    <h2>
                        Hi there!<br/>
                        My names is Rasmus
                    </h2>
                    <p>
                        I like to code and do music. <br/>
                        I also have a Master of science degree in <strong>Interaction design </strong><br/>
                    </p>
                </Col>
            </Row>
            <Row center="md">
                <Col md={12}>
                    <p>
                        <strong>Experince</strong>
                    </p>
                    <hr className="exp"/>
                </Col>
                <Link to = "/work"
                >
                    <Col md={4}>
                        Work
                    </Col>
                </Link>
                <Link to = "/tutorials"
                >
                    <Col md={4}>
                        Tutorials
                    </Col>
                </Link>
                <Link to = "/opensource" style={{ color: "inherit" }}
                >
                    <Col md={4}>
                        Open source
                    </Col>
                </Link>
            </Row>
        </div>
    );
};

export default NavBarView;