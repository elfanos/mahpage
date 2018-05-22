/**
 * Created by Rasmus on 2018-05-13.
 */
import React from 'react';
import { withRouter } from 'react-router-dom';
import * as type from '../constants/tutorial.persenter.contants';
import SpotifyApiPresenter from '../presenter/spotifyapi.presenter';
import UnderDevelopmentPresenter from '../presenter/under.development.presenter';
import PropTypes from 'prop-types';


const getPresenter = ( presenterID, bodyHeight ) => {
    switch ( presenterID  ) {
        case type.SPOTIFY_API:
            return <SpotifyApiPresenter bodyHeight={bodyHeight} />;
        default:
            return <UnderDevelopmentPresenter/>;
    }
};

const ItemTutorialView = ( { match, height } ) =>  {
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