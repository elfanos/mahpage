/**
 * Created by Rasmus on 2018-05-11.
 */
import React from 'react';
import { PropTypes } from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { clickAction } from '../states/actions/navbar.actions';
import * as type from '../states/constants/navbar.contants';

class WorkView extends React.Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        console.log("two times?");
        this.props.dispatch(clickAction(type.WORK));
    }
    render(){
        return(
           <p>work view</p>
        );
    }
}

export default withRouter(connect(null, null)(WorkView));