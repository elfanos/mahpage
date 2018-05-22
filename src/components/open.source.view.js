/**
 * Created by Rasmus on 2018-05-11.
 */
import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
class OpenSourceView extends React.Component{
    render(){
        return(
            <p>Gonna add some code here--></p>
        );
    }
}
export default withRouter(connect(null, null)(OpenSourceView));