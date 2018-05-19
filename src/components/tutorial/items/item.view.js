/**
 * Created by Rasmus on 2018-05-13.
 */
import React from 'react';
import { tutorialsArray } from '../../../objects/tutorial.objects';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as type from '../constants/tutorial.persenter.contants';
import SpotifyApiPresenter from '../presenter/spotifyapi.presenter';
import UnderDevelopmentPresenter from '../presenter/under.development.presenter';
import HomeView from '../../home.view';
import PropTypes from 'prop-types';


const getPresenter = ( presenterID, bodyHeight ) => {
    console.log(bodyHeight);
    switch ( presenterID  ) {
        case type.SPOTIFY_API:
            return <SpotifyApiPresenter bodyHeight={bodyHeight} />;
        default:
            return <UnderDevelopmentPresenter/>;
    }
};

const ItemTutorialView = ( { match, height } ) =>  {
    console.log(height);
    console.log(match);
    return (
        <div>
            { getPresenter(match.params.tutorialId, '0') }
        </div>

    );


};

ItemTutorialView.propTypes = {
    height: PropTypes.string.isRequired
};

export default withRouter(ItemTutorialView);