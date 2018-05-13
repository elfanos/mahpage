/**
 * Created by Rasmus on 2018-05-12.
 */
import spotifyapi  from '../vendor/spotifyapi.jpg';
import validation from '../vendor/validation.jpg';
import userauth from '../vendor/userauth.jpg';
import timeout from '../vendor/timeout.jpg';
import gridbox from '../vendor/gridbox.jpg';
export const tutorialsArray = () => {
    return [
         {
            image: spotifyapi,
            header: 'Implement spotify API with kotlin, react and redux',
        },
        {
            image: validation,
            header: 'Validation checker with redux, react and material design',
        },
        {
            image: timeout,
            header: 'Timeout component transition with react',
        },
        {
            image: gridbox,
            header: 'Gridbox animation with tweenmax react',
        },
        {
            image: userauth,
            header: 'User authenitcation with kotlin and react/redux',
        }
    ]
};