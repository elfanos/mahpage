/**
 * Created by Rasmus on 2018-05-11.
 */
import React from 'react';
import { PropTypes } from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { clickAction } from '../states/actions/navbar.actions';
import * as type from '../states/constants/navbar.contants';
class OpenSourceView extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.props.dispatch(clickAction(type.OPEN_SOURCE));
    }
    render(){
        return(
            <p>OPEN SOURCE</p>
        );
    }
}
export default withRouter(connect(null, null)(OpenSourceView));