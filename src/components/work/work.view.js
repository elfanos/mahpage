/**
 * Created by Rasmus on 2018-05-11.
 */
import React from 'react';
import { PropTypes } from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Col, Row, Grid } from 'react-bootstrap';
import { clickAction } from '../../states/actions/navbar.actions';
import googleglass from '../../vendor/work/googleglass.jpeg';
import thirty from '../../vendor/work/thirty.jpg';
import magazinos from '../../vendor/work/magazinos.jpeg';
import onebas from '../../vendor/work/onebas.jpeg';
import * as type from './work.contants';
import * as color from'../../objects/color.scheme';
import { Link, NavLink } from 'react-router-dom';

const size = ( x ) => {
    if( x % 2 === 0 ){ return { fontSize: '28px' } }
    else{ return { fontSize: '20px' } }
};

const normalizeCss = ( component, x ) => {
    if( x % 2 === 0 ){ component.style.fontSize  = '28px' }
    else{ component.style.fontSize  = '20px'  }
};
const normalizeLeave = ( id ) =>{
    let i = 1;
    for(let v of id){
        normalizeCss( document.getElementById( id + i ), i );
        i++;
    }
};

const changeCss = ( component ) => {
    component.style.background = color.PRIMARY_DARK_BLACK;
    component.style.color = color.PRIMARY_BRIGHT_WHITE;
    component.style.fontSize = "24px";
};
const normalizeEnter = ( id ) => {
    let i = 1;
    for(let v of id){
        changeCss( document.getElementById( id + i ) );
        i++;
    }
};


const onMouseLeaveEvent = (event,  id , props ) => {
    switch (event.currentTarget.id){
        case type.LAGG:
            normalizeLeave(type.LAGG);
            break;
        case type.ONEBAS:
            normalizeLeave(type.ONEBAS);
            break;
        case type.MAGAZINOS:
            normalizeLeave(type.MAGAZINOS);
            break;
        case type.YATZY:
            normalizeLeave(type.YATZY);
            break;
        default:
            break;
    }
};

const mouseInEvent = (event,  id ) => {
    switch (event.currentTarget.id){
        case type.MAGAZINOS:
            normalizeEnter(type.MAGAZINOS);
            break;
        case type.LAGG:
            normalizeEnter(type.LAGG);
            break;
        case type.ONEBAS:
            normalizeEnter(type.ONEBAS);
            break;
        case type.YATZY:
            normalizeEnter(type.YATZY);
            break;
        default:
            break;
    }
};
const componentNotActive = ( value, id, i ) => {

    return React.createElement('p', {
        key:id,
        id: id,
        style:{
            ...interact(),
            ...size( i ),
        }
    }, value);
};
const componentActive = ( value, id, i ) => {

    return React.createElement('p', {
        key:id,
        id: id,
        style:{
            ...interact(),
            fontSize: '24px'
        }
    }, value);
};
let characters = ( props, path, text, id ) => {
    let t = [];
    let i = 1;

    for (let v of text) {
        t.push(componentNotActive(v, id + i, i));
        i++
    }

    return t;
};

const SafeLink = ( props, path, text, id ) =>
    <div
         id = {text}
         onMouseEnter={ ( event, text ) => mouseInEvent( event, text ) }
         onMouseLeave={ ( event, text ) => onMouseLeaveEvent( event,text, props ) }
    >
        <a href={path} >
            { characters( props, path, text, id ) }
        </a>
    </div>;


class WorkView extends React.Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
    }
    render(){
        return(
            <div
                style={{
                    textAlign:'left'
                }}
            >
                <div>
                    <div
                        style={{
                            marginTop: '60px',
                            marginBottom: '30px'
                        }}
                    >
                        <Row md=""
                        >
                            <Col sm={4} md={4}>
                                <h3
                                    style={{
                                        fontWeight:'300'
                                    }}
                                >{SafeLink(this.props, 'https://www.magazinos.com/', type.MAGAZINOS, type.MAGAZINOS)}</h3>
                                <img src={magazinos} className= "image-responsive" height="100px"/>
                            </Col>
                            <Col sm ={8} md={8}>
                                <p>
                                    In this project I developed an api for ebooks by the help of Elib. In the project I learned a lot
                                    about coding in ruby and rails, how to structure a project involving a group of engineers.
                                    I worked during this project as a back-end developer.
                                </p>
                            </Col>
                        </Row>
                        <hr/>
                    </div>
                    <div
                        style={{
                            marginTop: '60px'
                        }}
                    >
                        <Row md=""
                        >
                            <Col sm={4} md={4}>
                                <h3
                                    style={{
                                        fontWeight:'300'
                                    }}
                                >{SafeLink(this.props, 'https://www.onebas.com/', type.ONEBAS, type.ONEBAS)}</h3>
                                <img src={onebas} className= "image-responsive" height="100px"/>
                            </Col>
                            <Col sm ={8} md={8}>
                                <p>
                                    This was my first ruby on rails project from start to finish.
                                    I developed the site with a friend during a summer internship.
                                    The site is for artist that can upload music, a lot like soundcloud.
                                </p>
                            </Col>
                        </Row>
                        <hr/>
                    </div>
                    <div
                        style={{
                            marginTop: '60px'
                        }}
                    >
                        <Row md=""
                        >
                            <Col sm={4} md={4}>
                                <h3
                                    style={{
                                        fontWeight:'300'
                                    }}
                                >{SafeLink(this.props, 'https://github.com/elfanos/yatzyproject', type.YATZY, type.YATZY)}</h3>
                                <img src={thirty} className= "image-responsive" height="100px"/>
                            </Col>
                            <Col sm ={8} md={8}>
                                <p>
                                    The famouse game Yatzy developed for android smart phones. In this project
                                    I developed a game that use openGL to visualize a 3D-throw. The game consist of
                                    two fragments one is the game board and the other is the scorekeeper. The code is available on github.
                                </p>
                            </Col>
                        </Row>
                        <hr/>
                    </div>
                    <div
                        style={{
                            marginTop: '60px'
                        }}
                    >
                        <Row md=""
                        >
                            <Col sm={4} md={4}>
                                <h3
                                    style={{
                                        fontWeight:'300'
                                    }}
                                >{SafeLink(this.props, 'https://github.com/elfanos/GgLAGG', type.LAGG, type.LAGG)}</h3>
                                <img src={googleglass} className= "image-responsive" height="100px"/>
                            </Col>
                            <Col sm ={8} md={8}>
                                <p>
                                    In this project we developed a navigation service for the ambulance.
                                    In this project we used google glasses for the application.
                                    Then we developed an android application developed for normal users.
                                </p>
                            </Col>
                        </Row>
                        <hr/>
                    </div>
                </div>
            </div>
        );
    }
}
const interact = () => {
    return {
        background: color.PRIMARY_DARK_BLACK,
        color: color.PRIMARY_BRIGHT_WHITE,
        display: ' inline-block',
        marginRight: '1px',
        marginLeft: '1px',
        transition: 'font-size 200ms ease-out, color 200ms ease-out'
    };
};
export default withRouter(connect(null, null)(WorkView));