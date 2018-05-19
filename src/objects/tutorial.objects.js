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
            id: 'spotifyapi',
            header: 'Implement spotify API with kotlin, react and redux',
            text: '',
            resources: [
                {
                    name: 'Spotify API with kotlin, react and redux',
                    chapters: {
                        one: {
                            links: {
                                springBot: 'https://spring.io/guides/tutorials',
                                springBootDocumentation: 'https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/',

                            },
                            pictures: {
                                gradle: ''
                            }
                        },
                        two: {
                            header:'Spotify-web-api with Kotlin',
                            text:'',
                            links: {
                                spotifyApi: 'https://github.com/thelinmichael/spotify-web-api-java',
                                spotifyPage: 'https://beta.developer.spotify.com/dashboard'
                            },
                            code: {
                                service: '',
                                controller: ''
                            }

                        },
                        three: {
                            header: 'Import React',
                            text:'Import React',
                            links: {
                                spotify: 'https://github.com/facebook/create-react-app'
                            },
                            code: {
                                reactTerminal: 'c',
                                components: ''
                            }

                        },
                        four: {
                            header:'Add redux to the project',
                            text:'Add redux to the project',
                            links: {
                                spotify: 'https://github.com/facebook/create-react-app',
                            },
                            code: {
                                actions: '',
                                reducers: '',
                                stores: '',
                                authController: ''
                            }

                        },
                        five: {
                            header:'Play around with this awesome API',
                            text:'Add redux to the project',
                            links: {
                                spotify: 'https://github.com/facebook/create-react-app'
                            }
                        }
                    }

                }
            ]

        },
        {
            image: validation,
            id: 'validation-redux',
            header: 'Validation checker with redux, react and material design',
        },
        {
            image: timeout,
            id: 'timeout-transition',
            header: 'Timeout component transition with react',
        },
        {
            image: gridbox,
            id: 'gridanimation-tweenmax',
            header: 'Gridbox animation with tweenmax react',
        },
        {
            image: userauth,
            id: 'userauth-kotlin-react',
            header: 'User authenitcation with kotlin and react/redux',
        }
    ]
};