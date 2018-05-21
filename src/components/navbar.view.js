import React from 'react';
import Radium from 'radium'
import '../App.scss';
import test from '../vendor/test.jpg';
import { Col, Row }  from 'react-bootstrap';
import '../lib/css/animation.transition.css';
import { Link, NavLink } from 'react-router-dom';
import * as color from '../objects/color.scheme';
import * as type from './navbar.constants';

const size = ( x ) => {
    if( x % 2 === 0 ){ return { fontSize: '19px' } }
    else{ return { fontSize: '15px' } }
};

const normalizeCss = ( component, x ) => {
    if( x % 2 === 0 ){ component.style.fontSize  = '19px' }
    else{ component.style.fontSize  = '15px'  }
};
const normalizeLeave = ( id ) =>{
    let i = 1;
    for(let v of id){
        normalizeCss( document.getElementById( id + i ), i );
        i++;
    }
};
const onMouseLeaveEvent = (event,  id , props ) => {
    switch (event.currentTarget.id){
        case type.WORK:
            if(!props.currPath.startsWith("/work")) {
                normalizeLeave(type.WORK);
            }
            break;
        case type.CODE:
            if(!props.currPath.startsWith("/opensource")) {
                normalizeLeave(type.CODE);
            }
            break;
        case type.TUTORIALS:
            if(!props.currPath.startsWith("/tutorials")) {
                normalizeLeave(type.TUTORIALS);
            }
            break;
        default:
            break;
    }
};
const changeCss = ( component ) => {
    component.style.background = color.PRIMARY_DARK_BLACK;
    component.style.color = color.PRIMARY_BRIGHT_WHITE;
    component.style.fontSize = "17px";
};
const normalizeEnter = ( id ) => {
    let i = 1;
    for(let v of id){
        changeCss( document.getElementById( id + i ) );
        i++;
    }
};
const mouseInEvent = (event,  id ) => {
    switch (event.currentTarget.id){
        case type.WORK:
            normalizeEnter(type.WORK);
            break;
        case type.CODE:
            normalizeEnter(type.CODE);
            break;
        case type.TUTORIALS:
            normalizeEnter(type.TUTORIALS);
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
            fontSize: '17px'
        }
    }, value);
};
let characters = ( props, path, text, id ) => {
    let t = [];
    let i = 1;
    if(!props.currPath.startsWith(path)) {
        for (let v of text) {
            t.push(componentNotActive(v, id + i, i));
            i++
        }
    }else{
        for (let v of text) {
            t.push(componentActive(v, id + i, i));
            i++
        }
    }
    return t;
};
const SafeLink = ( props, path, text, id ) =>
    <div style={styles.hoverSet}
        id = {text}
        onMouseEnter={ ( event, text ) => mouseInEvent( event, text ) }
        onMouseLeave={ ( event, text ) => onMouseLeaveEvent(event,text, props) }
    >
        <Link to={path} replace={props.currPath === path}
            style={{
                  ...styles.linkStyle
            }}
        >
            { characters( props, path, text, id ) }
        </Link>
    </div>;

const NavBarView = ( props ) => {
    return (
        <div style={{
        }}
        className="nav-bar-react"
        >
            <Row center="md">
                <ul style={{
                    listStyle: 'none',
                    paddingLeft: '0px'
                }}>
                    <li>
                        <div id="imageHeader"
                             style={{
                                 marginBottom: '20px'
                             }}
                        >
                            <img src={test} width="100" height="100"/>
                        </div>
                    </li>
                    <li>Hi there!</li>
                    <li>My name is</li>
                    <li><strong>Ralle</strong></li>
                    <li>I like to</li>
                    <li>
                        { SafeLink( props, "/work", type.WORK, type.WORK ) }
                    </li>
                    <li>do</li>
                    <li>
                        { SafeLink(props, "/tutorials", type.TUTORIALS, type.TUTORIALS ) }
                    </li>
                    <li>and</li>
                    <li>some</li>
                    <li>
                        { SafeLink(props, "/opensource", type.CODE, type.CODE) }
                    </li>
                    <li>Follow me</li>
                    <li>
                        <a href="https://github.com/elfanos">
                            <div><i className="fa fa-github"></i></div>
                        </a>
                        <a href="https://twitter.com/pandam0ve">
                            <div><i className="fa fa-twitter"></i></div>
                        </a>
                    </li>
                </ul>
            </Row>
        </div>
    );
};

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
const styles = {
    hoverSet: {
      'a:hover':{
          color: 'black'
      }
    },
    linkStyle: {
        color: color.PRIMARY_ACTIVE_ORANGE,
        ':hover':{
            color: 'black'
        }
    },
    sidenav: {
        height: '100%', /* Full-height: remove this if you want "auto" height */
        position: 'fixed', /* Fixed Sidebar (stay in place on scroll) */
        zIndex: '1', /* Stay on top */
        top: '0', /* Stay at the top */
        left: '0',
        backgroundColor: 'white', /* Black */
        overflowX: 'hidden', /* Disable horizontal scroll */
        paddingTop: '20px'
    }
};
export default NavBarView;