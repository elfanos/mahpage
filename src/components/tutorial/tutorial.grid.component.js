/**
 * Created by Rasmus on 2018-05-11.
 */
import React from 'react';
import { PropTypes } from 'prop-types';
import { Col } from 'react-bootstrap';
class TutorialGridComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
        }
    }
    componentDidMount() {
        setTimeout(() => this.setState({loaded:true}), this.props.duration*this.props.index );
    };
    render() {
        if (this.state.loaded === true) {
            return (
                <div>
                        <Col sm={4} md={4}
                             style={{
                                 ...style.tutorialGridPadding,
                             }}
                        >
                            <div
                                style={{
                                    ...style.tutorialGridFill,
                                    backgroundImage: 'linear-gradient('
                                    + 'rgba(0, 0, 0, 0.4),'
                                    + 'rgba(0, 0, 0, 0.4)'
                                    + '), url(' + this.props.data.image + ')',
                                    backgroundSize: 'cover',
                                    WebkitFilter: 'saturate(2)'
                                }}
                            >
                            </div>
                            <p style = {{
                                ...style.tutorialHeader
                            }}>
                                {this.props.data.header}
                            </p>
                        </Col>
                </div>
            );
        }
        else {
            return (<div/> )
        }
    };
}
const style = {
    tutorialGridPadding: {
        paddingRight: '0px',
        paddingLeft: '0px'
    },
    tutorialGridFill: {
        marginLeft: '5px',
        marginTop: '5px',
        height: '150px'
    },
    tutorialHeader: {
        color: 'white',
        position: 'absolute',
        top: '30%',
        fontSize: '15px',
        margin: '5px'
    }

};

TutorialGridComponent.propTypes = {
    data: PropTypes.object.isRequired,
    duration: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired
};

export default TutorialGridComponent;