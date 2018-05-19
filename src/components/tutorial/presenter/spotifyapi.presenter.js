/**
 * Created by Rasmus on 2018-05-16.
 */

import React from 'react';
import * as color from '../../../objects/color.scheme';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import callbackuri from '../../../vendor/spotifyapitutorial/callbackuri.jpg';
import generatesringboot from'../../../vendor/spotifyapitutorial/generatespringboot.png';
import gradefile from '../../../vendor/spotifyapitutorial/gradlefile.png';
import kotlinstructure from '../../../vendor/spotifyapitutorial/kotlinstructure.png';
import packagejsonfile from '../../../vendor/spotifyapitutorial/pjsonfile.png';
import springbootfiles from '../../../vendor/spotifyapitutorial/spingbootfiles.jpg';
import spotifydashboard from '../../../vendor/spotifyapitutorial/spotifydashboard.jpg';
import structurereact from '../../../vendor/spotifyapitutorial/srcstrucuterreact.png';
import  PrismCode  from 'react-prism';
import { Link } from 'react-router-dom';
import Prism from '../../../../node_modules/prismjs';
import loadLanguages from '../../../../node_modules/prismjs/components/index';
import '../../../prism.css';
import {
    ScrollView
} from 'react'

loadLanguages(['kotlin']);
const refPresenter = ( link, text ) =>
    <a href={link} style={{color:color.SECOND_BLUE}} > <i><b> {text} </b></i> </a>;


const SpotifyApiPresenter = ( { bodyHeight } ) => {
    console.log( bodyHeight );
    return(
        <div style={{
            ...styles
        }}>
            <h1>Spotify API with Kotlin, React and Redux</h1>
            <div style={{
                textAlign:'left',
                marginTop: '30px'
            }}>
                <p>Before we begin the hacking, I will give a short briefing on the spring boot framework.
                    Which is an amazing framework that makes it easy to developed a functional restful api within
                    minutes using java as the go to language,
                    also the
                    { refPresenter( "https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/", "springboot documentation" ) }
                    is great and contains good examples for beginners.<br/>
                    In this tutorial we are going to implement a restful api with the spring boot framework with the use of Gradle as the dependencies manager.
                </p>
                <h2>Spring boot with kotlin</h2>
                <p>
                    First of all we need to create the directory for the application.
                    Start the terminal, navigate to the wanted location of your app,
                    then add the following folders.<br/>
                    <code>
                        mkdir spotify-api-with-kotling-react-redux<br/>
                    </code>
                    <code>
                        cd spotify-api-with-kotling-react-redux <br/>
                    </code>
                </p>
                <p>
                    Create two new folders with the names server and app.<br/>
                    <code>
                        mkdir server<br/>
                    </code>
                    <code>
                        mkdir app<br/>
                    </code>
                </p>
                <h2>Start a project with Gradle or Maven</h2>
                <p>
                    As a first step go to { refPresenter( "https://start.spring.io/", "spring initializer" ) }
                </p>
                <img src={generatesringboot} width="500" height="400" />
                <p>
                    Following page will appear, make a identical project as the one shown in the figure above.
                    Maven can be used instead of gradle, but be aware that I will be using Gradle in this tutorial. <br/><br/>
                    When the project is generated you will get a zip-file, that contains all the files needed to
                    initialize the spring-boot-application. <br/>
                    Unzip the file, copy the content located inside the directory to the server director. Paste all the files inside the server folder that you previously created.
                </p>
                <img src={springbootfiles} width="500" height="400" />
                <h2>Initialize kotlin & react</h2>
                <p>
                    Let’s initialize the front-end part, we are going to use react and the create-react-app command.
                    Navigate to the app folder inside the spotify-api-with-kotling-react-redux folder.
                    Initialize the create react app using this command.<br/>
                    <code>npx create-react-app spotify-react-kotlin</code>
                    <br/>
                    Finally we got a project now let's add some dependencies to our build.gradle.<br/>
                    <i>//Server</i><br/>
                    <code>
                        compile('org.springframework.boot:spring-boot-starter-tomcat')
                    </code><br/>
                    <code>
                        compile("org.springframework.boot:spring-boot-starter-data-rest")
                    </code><br/>
                    If you prefer to use a pre initialized project you can fork it on github:
                    { refPresenter("https://github.com/elfanos/spotify-api-with-kotlin-react", "spotify-api-with-kotlin-react") }
                </p>
                <p>
                    How about starting the server just to test it out:
                    <br/>
                </p>
                <ul>
                    <li>Navigate to the server folder inside your project.</li>
                    <li>Open terminal or the terminal inside your IDEA.</li>
                    <li>Use the following command through the terminal inside the folder server, to start the tomcat server “./gradlew bootRun”</li>
                </ul>
                <p>
                    Hopefully it works so we can continue :).
                </p>
                <h2>Add spotify-web-api by Michael</h2>
                <p>
                    Before we begin implementing the service and controller for the communication with spotify
                    we add a dependencies which contains a java wrapper for the spotify web api.
                    Thanks to Michael Thelin it becomes a lot easier to make requests to the spotify api yey!
                    The documentation is found on this github repo
                    { refPresenter( "https://github.com/thelinmichael/spotify-web-api-java", "spotify-web-api-java" ) }
                    <br/>
                    Add the following in your build.gradle file inside the dependencies bracket <br/>
                    <code>
                        compile 'se.michaelthelin.spotify:spotify-web-api-java:2.0.2'
                    </code><br/><br/>
                    After the gradle downloads is complete, add three new directories inside<br/>
                    <code>src/main/kotlin/com.tutorial.spotifyapikotlin/</code><br/>
                    Name them service,controller and authorization.
                    Inside the service add a folder called spotify and inside the folder create a kotlin class called SpotifyService.
                    Inside the controller and authorization repeat the steps but instead name the kotlin classes to SpotifyController, and SpotifyAuthorization
                    <br/>
                    Your server folder should look like this:
                </p>
                <img src={kotlinstructure} width="200" height="250" />
                <h2>Get clientID and secret from Spotify</h2>
                <p>
                    Now it is time to get the client id and secret from spotify. This is done at the
                    { refPresenter( "https://beta.developer.spotify.com/dashboard/login", "spotify developer page" ) } <br/>
                    Login in to get access to your dashboard. If you dont have a spotify account you need to create one.
                </p>
                <img src={spotifydashboard} width="500" height="350" />
                <p>
                    <br/>
                    The following figure should illustrate the dashboard for your app.
                    Mine is called: spotify-kotlin.
                    <br/>
                    Before we add the Client id and secret to our application, we have to do some modification for the auth callback url.
                    Go to EDIT SETTINGS and add the following URL to the Redirect URIs. <br/>
                    <code>
                        http://localhost:3000/auth/spotify/callback
                    </code><br/><br/>
                </p>
                <img src={callbackuri} width="500" height="350" />
                <h2>SpotifyAuthorization</h2>
                <p>
                    Get your Client ID and secret so we can start adding some code in our SpotifyAuthorization class.
                    Before we add the authorization code to the authorization class we got to declare our
                    values from the spotify dashboard (Clientid, Secret and Redirect URI) in
                    the application.properties file. Which is located under the resources folder inside your project.<br/><br/>
                    <code>
                        spotify.clientid=YOUR-CLIENT-ID
                    </code><br/>
                    <code>
                        spotify.clientsecret=YOUR-SECRET
                    </code><br/>
                    <code>
                        spotify.redirect.uri=http://localhost:3000/auth/spotify/callback
                    </code><br/><br/>
                    The authorization class will contain all the building calls to the spotify api. Michael makes it painless when it comes to create these requests since, we do not need to create a model for the html body, it is already implemented in the package.
                    Add the following code inside SpotifyAuthorization class.
                    Remember to add the right callback uri, the one you defined in the spotify dashboard.<br/>
                </p>
              <PrismCode component="pre" className="language-javascript"
                    style={`
                    .pre {
                        border: 0px;
                        box-shadow: 0px 0px 0em black inset
                    }

                    `}
                >
                    {`
class SpotifyAuthorization {

   private val redirectUri = SpotifyHttpManager.
           makeUri("http://localhost:3000/auth/spotify/callback")

   fun getSpotifyBuilder(clientID: String, clientSecret: String):
        SpotifyApi
            = SpotifyApi.builder()
           .setClientId(clientID)
           .setClientSecret(clientSecret)
           .setRedirectUri(redirectUri)
           .build()
   fun authorizationCodeUriRequest(spotifyApi: SpotifyApi):
        AuthorizationCodeUriRequest
            = spotifyApi.authorizationCodeUri()
           .state("x4xkmn9pu3j6ukrs8n")
           .scope("user-read-birthdate,user-read-email")
           .show_dialog(true)
           .build()

   fun buildAuthorizationCode( spotifyApi: SpotifyApi, code: String ):
        AuthorizationCodeRequest
            = spotifyApi.authorizationCode(code)
           .build()
}

                `}
                </PrismCode>
                <h2>SpotifyService</h2>
                <p>
                    Contains all the request that returns important data back to the client.
                    In this case we need first a URI that redirects to the spotify login page.
                    Then we need two tokens one refresh token which is used whenever an update on the token is required,
                    and the accessToken that will be used when building a new request.
                    Add the following code
                </p>
                <PrismCode component="pre" className="language-javascript"
                           style={`
                    .pre {
                        border: 0px;
                        box-shadow: 0px 0px 0em black inset
                    }

                    `}
                >
                    {`
@Service
class SpotifyService {

   fun authorizationCodeUriSync( authorizationCodeUriRequest:
                                 AuthorizationCodeUriRequest ): String? {
       try {
           return authorizationCodeUriRequest.execute().toString()
       }catch (e: IOException){
           println("error " + e.localizedMessage)

       }catch (e: SpotifyWebApiException){
           println("Spotify web exception: " + e.localizedMessage)
       }
       return null
   }

   fun authorizationCodeSync( authorizationCodeRequest: AuthorizationCodeRequest,
                              spotifyApi: SpotifyApi ): List<String>? {
       try {
           val authorizationCodeCredentials = authorizationCodeRequest.execute()
           spotifyApi.accessToken = authorizationCodeCredentials.accessToken
           spotifyApi.refreshToken = authorizationCodeCredentials.refreshToken
           return listOf<String>(spotifyApi.accessToken,spotifyApi.refreshToken)

       }catch (e: IOException){
           println("error " + e.localizedMessage)

       }catch (e: SpotifyWebApiException){
           println("Spotify web exception: " + e.localizedMessage)
       }
       return null
   }


                `}
                </PrismCode>
                <h2>SpotifyController</h2>
                <p>
                    This class will contain rest mapping for the react-client.
                    When a uri is matched in the react application the controller
                    will trigger the call to the spotify api and then return the requested data.
                </p>
                <PrismCode component="pre" className="language-javascript"
                        style={`
                    .pre {
                        border: 0px;
                        box-shadow: 0px 0px 0em black inset
                    }

                    `}
                        >
                        {`
@RestController
class SpotifyController {


   @Value("\${spotify}")
   lateinit var clientID: String

   @Value("\${spotify.clientsecret}")
   lateinit var clientSecret: String

   var spotifyAuth = SpotifyAuthorization()

   @RequestMapping("/api/spotify/callback/uri")
   fun authorizationUri(): String? = createSpotifyService().
               authorizationCodeUriSync(
                       spotifyAuth.authorizationCodeUriRequest(
                               spotifyAuth.getSpotifyBuilder(clientID,clientSecret)
                       )
               )

   @RequestMapping("/api/spotify/token/{code}")
   fun authorizationToken(@PathVariable code: String): List<String>? = createSpotifyService()
           .authorizationCodeSync(
                   spotifyAuth.buildAuthorizationCode(
                           spotifyAuth.getSpotifyBuilder( clientID,clientSecret ), code
                   ),
                   spotifyAuth.getSpotifyBuilder( clientID, clientSecret )
           )

   fun createSpotifyService(): SpotifyService = SpotifyService()
}


                `}}
                </PrismCode>

                <p>
                    @Value(key) locates the application.properties were we have our spotify variables declared.
                    The authorization process is called: Authorization Code Flow this method is better when the application
                    is using the current users data from spotify.
                    It is a bit more complicated then Client Credentials Flow which communicates
                    directly to the spotify api from the client.
                    If you want to read more on the different flows visit this pages:
                </p>
                <ul>
                    <li>
                        { refPresenter( "https://tools.ietf.org/html/rfc6749#section-4.4", "Client Credentials Flow" ) }
                    </li>
                    <li>
                        { refPresenter( "https://tools.ietf.org/html/rfc6749#section-4.1", "Authorization Code Flow" ) }
                    </li>
                </ul>
                <p>
                    You can test it now by pasting
                    <br/>
                    <code>http://localhost:8080/api/spotify/callback/uri
                    </code> <br/>
                    on your browser.
                    The result should be a url which takes you to the spotify login page.
                </p>
                <h2>
                    React part
                </h2>
                <p>
                    Now when were done with the first couple of services, we want to test it right?
                    Well I will not cover the testing process if you want to have a look at my testing proccedure you can mail me, but there is a lot of great tutorials covering that area.
                    Lets dig into the React-part, where we can see the authorization flow using the developer console on the browser.
                    What I normal do in react is to make a good structure in the src directory.
                </p>
                <img src={structurereact} width="200" height="200" /><br/><br/>
                <p>
                    To make it easier to follow this part create the following folder structure visualized in the picture above.
                    In the component folder create a login.view.js and add the following code
                    Start by installing all the modules that is needed.
                </p>
                <code>
                    npm install --save react-router-dom
                </code><br/>
                <code>
                    npm install --save react-redux
                </code><br/>
                <code>
                    npm install --save react-bootstrap
                </code><br/>
                <code>
                    npm install --save prop-types
                </code><br/><br/>
                <p>
                    Add the following code to index.js in router
                </p>
                <PrismCode component="pre" className="language-javascript"
                           style={`
                    .pre {
                        border: 0px;
                        box-shadow: 0px 0px 0em black inset
                    }

                    `}
                >
                    {`
import React from 'react';
import {
   BrowserRouter,
   Switch,
   Route

} from 'react-router-dom';

import LoginView from '../components/login.view';
import HomeView from '../components/home.view';

export const ApplicationRouter = () => {
   return(
       <BrowserRouter>
           <Switch>
               <Route exact path='/login' component={LoginView} />
               <Route exact path='/home' component={HomeView} />
           </Switch>
       </BrowserRouter>
   );
};


                `}
                </PrismCode>
                <p>
                    This class store all the routes defined in the application. <br/>
                    Then add this to index.js in the src folder
                </p>
                <PrismCode component="pre" className="language-javascript"
                           style={`
                    .pre {
                        border: 0px;
                        box-shadow: 0px 0px 0em black inset
                    }

                    `}
                >
                    {`\nimport React from 'react';\nimport ReactDOM from 'react-dom';\nimport './index.css';\nimport { ApplicationRouter } from './routes/index';\nimport registerServiceWorker from './registerServiceWorker';\n\nReactDOM.render(\n   <ApplicationRouter />,\n   document.getElementById('root')\n);\nregisterServiceWorker();\n\n\n                `}
                </PrismCode>
                <p>
                    Now go to the src/api folder and create a javascript file called spotify.api.constants.js,
                    then in the service folder add the following file spotify.service.js
                    The class spotify.api.constants.js contains all the URI mapped in the spring
                    boot application. We begin by adding the following constant to the class
                </p>
                <code>
                    export const CALLBACK_URI = 'api/spotify/callback/uri';
                </code><br/><br/>
                <p>
                    For the spotify service we are going to use fetch to handle the request.
                </p>
                <PrismCode component="pre" className="language-javascript"> {`
import React from 'react';
import * as spotify from '../contants/spotify.api.contants';

export const spotifyCallback = async() => {
   return await fetch(spotify.CALLBACK_URI)
       .then(function (response) {
           if(!response.ok){
               return Promise.reject(response.statusText).json();
           }else{
               return Promise.resolve(response.text());
           }
       });
};

                    `}

                </PrismCode>
                <p>
                    Now we only need a beautiful or ugly button inside a react component.
                    Let’s create one :). <br/>
                    If you haven’t done this: Start by creating a file called login.view.js
                    Which contains the following code:
                </p>
                <PrismCode component="pre" className="language-javascript">{`
import React from 'react';
import {
   Button
} from 'react-bootstrap'
import { PropTypes } from 'prop-types';
import { spotifyCallback } from '../api/services/spotify.service';

const handleLogin = () => {
   spotifyCallback().then( data =>
       window.location.href = data
   );
};
const LoginView = () => {

   return(
       <Button
           bsStyle="primary"
           onClick={() => handleLogin()}
       >
           Login with Spotify
       </Button>
   );

};

LoginView.propTypes = {
  handleLogin: PropTypes.func
};

export default LoginView;

                `}
                </PrismCode>
                <p>
                    No magic here just some javascript and react.
                    However one important thing to do before we test this out is to go to the package.json file,
                    located in your react application folder and add this:
                </p><br/>
                <code>
                    "proxy": "http://localhost:8080",
                </code><br/><br/>
                <p>
                    This make it possible for us to integrate the kotlin server with the front-end.
                </p>
                <img src={packagejsonfile} width="200" height="200" /><br/><br/>
                <p>
                    Here is my package.json file.

                    Hmm will it work? Try it out!
                    Restart the react app,  and try the button. Remember to navigate
                    to: http://localhost:3000/login
                    Since there is no index page definiend inside the application.route, and sorry for the ugly button. <br/>

                    If it works great! If it does not mah bad :/ send me a mail.
                </p>
                <h2>Refresh and access token</h2>
                <p>
                    Now that we have the login page fixed, we need to store the refresh token and access token in our react app.
                    We will use redux for this but first we need to define a new route
                    for the callback given by spotify when a user log in.
                    We defined earlier a redirect uri, this uri will be used and added to a route component inside the react application.

                Go to application.router.js and add the following Route:
                </p><br/>
                <code>
                    {'<Route exact path=’/auth/spotify/callback’ component={}/>'}
                </code><br/><br/>
                <p>

                Now we need a component which handles the spotify code on the URI.
                Create a new javascript file inside the api/controller folder. Call it spotify.auth.controller.js and
                add this code to the new component.
                </p>
                <PrismCode component="pre" className="language-javascript">{`
import React from 'react';

class SpotifyAuthController extends React.Component {

   render() {
       return (
           <h1>TODO fix this auth</h1>
       );
   }

}

export default SpotifyAuthController;

                `}
                </PrismCode>
                <p>
                    Import and add the new component to our Route inside the application.router
                </p><br/>
                <code>
                    {'<Route exact path=’/auth/spotify/callback’ component={SpotifyAuthController}/>'}
                </code><br/><br/>
                <p>
                    The application.router should look like this:
                </p>
                <PrismCode component="pre" className="language-javascript">{`
import React from 'react';
import {
   BrowserRouter,
   Switch,
   Route

} from 'react-router-dom';

import LoginView from '../components/login.view';
import HomeView from '../components/home.view';
import SpotifyAuthController from '../api/controller/spotify.auth.controller';
export const ApplicationRouter = () => {
   return(
       <BrowserRouter>
           <Switch>
               <Route exact path='/login' component={LoginView} />
               <Route exact path='/home' component={HomeView} />
               <Route exact path='/auth/spotify/callback' component={ SpotifyAuthController } />
           </Switch>
       </BrowserRouter>
   );
};

                `}

                </PrismCode>
                <p>
                    Try the button and see what happens!<br/>
                    If it worked the callback page should display a header TODO fix this auth.
                    Let’s fix this auth.<br/>

                    Go back to the auth and install the following module.
                </p>
                <code>
                    npm install --save query-string
                </code><br/><br/>
                <p>
                    Add this code to spotify.api.constant
                </p><br/>
                <code>
                    export const TOKEN_REQUEST = code =>  '/api/spotify/token/' + code;
                </code><br/><br/>
                <p>
                    Add this code to spotify.service
                </p><br/>
                <code>
                {'  export const spotifyTokens = async( code ) => {' +
                   'return await fetch(spotify.TOKEN_REQUEST( code )).then( response => response.text() );' +
                '};'}
                </code><br/><br/>
                <p>
                    Add this code to spotify.auth.controller
                </p>
                <PrismCode component="pre" className="language-javascript">
                    {`
import React from 'react';
import queryString from 'query-string';
import { spotifyTokens } from '../services/spotify.service';

const intializeUserData = async ( parsed ) => {
   let userData = {};
   userData.token = await spotifyTokens( parsed.code ).
   then( response => Promise.resolve(response));

   console.log(userData);
};
class SpotifyAuthController extends React.Component {

   componentDidMount(){
       intializeUserData( queryString.parse( this.props.location.search ) );
   }
   render() {
       return (
           <h1>TODO fix this auth</h1>
       );
   }

}

export default SpotifyAuthController;

                    `}
                </PrismCode>
                <p>
                Now if you open the console while running the login process, a object will
                appear that contains the access token and the refresh token.
                The thing we did was to use the code given by spotify to access the tokens.
                The code inside the uri was parsed with the use of a module called query-string.
                The location search returns all the characters in the uri after the question mark.
                This code is then used as parameters when we request the tokens with the use of the
                spotify service inside kotlin.
                However the format inside userData.token is not optimal:
                </p>
                <code>
                    {' {token: "["BQDQuZI2vBjF0hwqyr8pEQ40wiPGdSN2wFWtNxNa1ibsrrtN…_fnkJeJhM90arxVrOJmIVx3G_V3dJnyE2NDJEGv-WCSIPm4"]"} '}
                </code><br/><br/>
                <p>
                    We fix it by implementing this following function:
                </p>
                <PrismCode component="pre" className="language-javascript">
                {`
const retrieveStringFromArray = ( stringArray ) => {
   let output = stringArray.replace(REGEX_STRING_ARRAY,'');
   let newStringArray = output.split(',');
   return {
       accessToken: newStringArray[0].slice(1),
       refreshToken: newStringArray[1]
   };
};


 userData.token = retrieveStringFromArray(
   await spotifyTokens( parsed.code ).then( response => Promise.resolve(response))
);

                `}
                </PrismCode>
                <p>
                    SpotifyAuthController now look like this:
                </p>
                <PrismCode component="pre" className="language-javascript">
                {`
import React from 'react';
import queryString from 'query-string';
import { spotifyTokens } from '../services/spotify.service';
const REGEX_STRING_ARRAY = /["\]']+/gi;

const retrieveStringFromArray = ( stringArray ) => {
   let output = stringArray.replace(REGEX_STRING_ARRAY,'');
   let newStringArray = output.split(',');
   return {
       accessToken: newStringArray[0].slice(1),
       refreshToken: newStringArray[1]
   };
};

const intializeUserData = async ( parsed ) => {
   let userData = {};
   userData.token = retrieveStringFromArray(
       await spotifyTokens( parsed.code ).then( response => Promise.resolve(response))
   );
   console.log(userData);
};
class SpotifyAuthController extends React.Component {

   componentDidMount(){
       console.log(this.props.location.search);
       intializeUserData( queryString.parse( this.props.location.search ) );
   }
   render() {
       return (
           <h1>TODO fix this auth</h1>
       );
   }

}

export default SpotifyAuthController;
                `}
                </PrismCode>
                <p>
                    We use basic regex operation to remove unwanted
                    array blocks that was returned from the token request.
                    Now the print should look like this:
                </p>
                <code>
                    {
                    '   token:' +
                    '       accessToken:"BQC-g1z7h4nUbFe3xi0zaEMBepjH2qlb2R85ZpV89DM20SbX3Og1' +
                    '       noDEcB350ZWTuZmRYliqcQv5HXO9C7qMEXqEsynKgs9Dhc-Gi36Xcur14fdbk0r5s' +
                    '       -ouVgAfSMC70kV-S1yxeu4tFzqNR4o"' +
                    '       refreshToken:"AQBydd0qKJvT6Mkg6sU6f-YpOFuMHJTSFY2uGBd3QbWvgnjQ8Yc' +
                    '       94EnM7YG4h7bQNOyybCB4XvwFH1athhTGYKBy085mUDIPF9dqiFXkMnorXE_Nai' +
                    '       tSlOdKGcz-7B7f5t8"' }
                </code>
                <h2>Redux and redirect</h2>
                <p>
                    Lets store this token with some user data using redux and redirect to the home page:
                    First of all add the necessary code for the redux action.<br/>
                    Goto states/actions/ and create the file user.action.js and add this code:
                </p>
                <PrismCode component="pre" className="language-javascript">
                {`
import * as type from '../constants/user.contants';

export const initialize = ( username, email, token ) => {
   return {
       type: type.INITIALIZE,
       username: username,
       email: email,
       token: token
   };
};
                `}
                </PrismCode>
                <p>
                    Goto states/constants and create a file called user.contants.js add the following code:
                </p>
                <code>
                    export const INITIALIZE = 'INITIALIZE';
                </code><br/><br/>
               <p> Fun times but I need some music
                I bet you need some as well, lets turn on some
                bass here you have an amazing
                { refPresenter( "https://www.youtube.com/watch?v=lPVBrRd9wCo&start_radio=1&list=RDGMEMYH9CUrFO7CfLJpaD7UR85wVMlPVBrRd9wCo", "track" ) }
                for coding. <br/>
                Alright finally we need to create a file under states/reducer/ name this user.reducer.js add the code below:
                </p>
                <PrismCode component="pre" className="language-javascript">
                {`
import * as type from '../constants/user.contants';
const defaultState = {
   isLoggedIn: false,
   username: '',
   email: '',
   token: {}
};
const reducer = ( state = defaultState, action ) => {
   switch ( action.type ) {
       case type.INITIALIZE:
           return {
               ...state,
               isLoggedIn: true,
               username: action.username,
               email: action.email,
               ...action.token
           };
       default:
           return state;
   }
};
export default reducer;
                `}
                </PrismCode>
                <p>
                    If you are not familiar with redux it may look a bit confusing.
                    But redux is a state handler in javascript, I think it is nice because it separates
                    and make the code more structured since you do not have to send and handle
                    all the states inside the components.
                    Instead you use the actions given for a specific state inside
                    the application. To retrieve and set the states,
                    redux gives us two new props called mapStateToProps and mapDispatchToProps
                    which is used inside our components to set and get the current states.
                    In this state object we will add the tokens as well
                    as the current users spotify, email and full name.
                </p><br/>
                <p>
                    The last things for our redux part is a  file called index inside src/states/reducer
                    add the following code to combine all the reducers.
                </p>
                <PrismCode component="pre" className="language-javascript">
                {`
import { combineReducers } from 'redux';
import userReducer from './user.reducer';

export default combineReducers({
  userReducer
});
                `}
                </PrismCode>
                <p>
                    Install this module
                </p>
                <code>
                    npm install --save redux
                </code><br/><br/>
                <p>
                    Create a index.js inside src/states
                    and add this code.
                </p>
                <PrismCode component="pre" className="language-javascript">
                {`
import { createStore } from 'redux';
import reducers from './reducers/index';

export const store = createStore(
   reducers
);
                `}
                </PrismCode>
                <p>
                    And change the application.router to the following:
                </p>
                <PrismCode component="pre" className="language-javascript">
{`
import React from 'react';
import {
   BrowserRouter,
   Switch,
   Route

} from 'react-router-dom';
import { Provider } from 'react-redux';
import  { store }  from '../states/index';
import LoginView from '../components/login.view';
import HomeView from '../components/home.view';
import SpotifyAuthController from '../api/controller/spotify.auth.controller';
export const ApplicationRouter = () => {
   return(
       <Provider store ={ store } >
           <BrowserRouter>
               <Switch>
                   <Route exact path='/login' component={LoginView} />
                   <Route exact path='/home' component={HomeView} />
                   <Route exact path='/auth/spotify/callback' component={ SpotifyAuthController } />
               </Switch>
           </BrowserRouter>
       </Provider>
   );
};
`}
                </PrismCode>
                <p>
                    Now we leave react for a bit and go back to kotlin. We need to define a new service for the currentUserData. But first we need to build a authorization request based on a token.
                    Add the following code to the SpotifyAuthorization class inside kotlin.
                </p>
                <PrismCode component="pre" className="language-javascript">
                {`
fun tokenAuthorization(accessToken: String?): SpotifyApi =
        SpotifyApi.Builder().setAccessToken(accessToken).build()
                `}
                </PrismCode>
                <p>
                    Now the class should look like this:
                </p>
                <PrismCode component="pre" className="language-javascript">
                {`
import com.wrapper.spotify.SpotifyApi
import com.wrapper.spotify.SpotifyHttpManager
import com.wrapper.spotify.requests.authorization.authorization_code.AuthorizationCodeRequest
import com.wrapper.spotify.requests.authorization.authorization_code.AuthorizationCodeUriRequest
import org.springframework.stereotype.Component

@Component
class SpotifyAuthorization {

   private val redirectUri = SpotifyHttpManager.
           makeUri("http://localhost:3000/auth/spotify/callback")

   fun getSpotifyBuilder(clientID: String, clientSecret: String): SpotifyApi
           = SpotifyApi.builder()
           .setClientId(clientID)
           .setClientSecret(clientSecret)
           .setRedirectUri(redirectUri)
           .build()
   fun authorizationCodeUriRequest(spotifyApi: SpotifyApi): AuthorizationCodeUriRequest
           = spotifyApi.authorizationCodeUri()
           .state("x4xkmn9pu3j6ukrs8n")
           .scope("user-read-birthdate,user-read-email")
           .show_dialog(true)
           .build()
   fun buildAuthorizationCode( spotifyApi: SpotifyApi, code: String ): AuthorizationCodeRequest
           = spotifyApi.authorizationCode(code)
           .build()
   fun tokenAuthorization(accessToken: String?): SpotifyApi =
           SpotifyApi.Builder().setAccessToken(accessToken).build()
}

                `}
                </PrismCode>
                <p>
                    We basically build a request based on a given token.
                    This is needed when we request the user data.
                    <br/>The following code must be added inside SpotifyService class
                </p>
                <PrismCode component="pre" className="language-javascript">
                {`
fun currentUserProfileAsync(accessToken: String?, spotifyApi: SpotifyApi ): User? {
   val currentUserProfile = spotifyApi.currentUsersProfile.build()
   try {
       return currentUserProfile.execute()
   }catch (e: IOException){
       println("error " + e.localizedMessage)

   }catch (e: Throwable){
       println("Spotify web exception: " + e.localizedMessage)
   }
   return null
}
                `}
                </PrismCode>
                <p>
                    The class should look like this:
                </p>
                <PrismCode component="pre" className="language-javascript">
{`
import com.wrapper.spotify.SpotifyApi
import com.wrapper.spotify.exceptions.SpotifyWebApiException
import com.wrapper.spotify.model_objects.specification.User
import com.wrapper.spotify.requests.authorization.authorization_code.AuthorizationCodeRequest
import com.wrapper.spotify.requests.authorization.authorization_code.AuthorizationCodeUriRequest
import org.springframework.stereotype.Service
import java.io.IOException



@Service
class SpotifyService {

   fun authorizationCodeUriSync( authorizationCodeUriRequest:
                                 AuthorizationCodeUriRequest ): String? {
       try {
           return authorizationCodeUriRequest.execute().toString()
       }catch (e: IOException){
           println("error " + e.localizedMessage)

       }catch (e: SpotifyWebApiException){
           println("Spotify web exception: " + e.localizedMessage)
       }
       return null
   }

   fun authorizationCodeSync( authorizationCodeRequest: AuthorizationCodeRequest,
                              spotifyApi: SpotifyApi ): List<String>? {
       try {
           val authorizationCodeCredentials = authorizationCodeRequest.execute()
           spotifyApi.accessToken = authorizationCodeCredentials.accessToken
           spotifyApi.refreshToken = authorizationCodeCredentials.refreshToken
           return listOf<String>(spotifyApi.accessToken,spotifyApi.refreshToken)

       }catch (e: IOException){
           println("error " + e.localizedMessage)

       }catch (e: SpotifyWebApiException){
           println("Spotify web exception: " + e.localizedMessage)
       }
       return null
   }

   fun currentUserProfileAsync(accessToken: String?, spotifyApi: SpotifyApi ): User? {
       val currentUserProfile = spotifyApi.currentUsersProfile.build()
       try {
           return currentUserProfile.execute()
       }catch (e: IOException){
           println("error " + e.localizedMessage)

       }catch (e: Throwable){
           println("Spotify web exception: " + e.localizedMessage)
       }
       return null
   }
}
`}
                </PrismCode>
                <p>
                    Now we need mapping inside the RestController.
                    <br/>Add the following code to the SpotifyController:
                </p>
                <PrismCode component="pre" className="language-javascript">
                {`
@RequestMapping("/api/spotify/user/{token}")
fun currentUserData(@PathVariable token: String?): User?
       = createSpotifyService()
       .currentUserProfileAsync(
               token, spotifyAuth.tokenAuthorization( token )
       )

                `}
                </PrismCode>
                <p>
                    The class look like this:
                </p>
                <PrismCode component="pre" className="language-javascript">
{`
import com.tutorial.spotifyapikotlin.authorization.SpotifyAuthorization
import com.tutorial.spotifyapikotlin.services.SpotifyService
import com.wrapper.spotify.model_objects.specification.User
import org.springframework.beans.factory.annotation.Value
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class SpotifyController {


   @Value("\${spotify}")
   lateinit var clientID: String

   @Value("\${spotify.clientsecret}")
   lateinit var clientSecret: String

   var spotifyAuth = SpotifyAuthorization()

   @RequestMapping("/api/spotify/callback/uri")
   fun authorizationUri(): String?
           = createSpotifyService()
           .authorizationCodeUriSync(
                       spotifyAuth.authorizationCodeUriRequest(
                               spotifyAuth.getSpotifyBuilder(clientID,clientSecret)
                       )
               )
   @RequestMapping("/api/spotify/token/{code}")
   fun authorizationToken(@PathVariable code: String): List<String>?
           = createSpotifyService()
           .authorizationCodeSync(
                   spotifyAuth.buildAuthorizationCode(
                           spotifyAuth.getSpotifyBuilder( clientID,clientSecret ), code
                   ),
                   spotifyAuth.getSpotifyBuilder( clientID, clientSecret )
           )
   @RequestMapping("/api/spotify/user/{token}")
   fun currentUserData(@PathVariable token: String?): User?
           = createSpotifyService()
           .currentUserProfileAsync(
                   token, spotifyAuth.tokenAuthorization( token )
           )

   fun createSpotifyService(): SpotifyService = SpotifyService()
}

`}
                </PrismCode>
                <p>
                    In the new function we create a new service that we defined in the
                    SpotifyService based on a request builded by a token,
                    which is our token that we send in from the react application.
                    Finally we can skip those ugly variables clientID and clientSecret.
                    The function returns a User which is a class from the micheline package, that is a user in json.
                    Now we need to gather the data and add it to the redux object inside the react application.
                    Let’s do it by going back to the react app and add some fetch code.
                    <br/>
                    Like before go to spotify.api.contants add this:
                </p>
                <code>
                    export const CURRENT_USER_DATA = accessToken => '/api/spotify/user/' + accessToken;
                </code><br/>
                <p>
                    Add the following to spotify.service
                </p>
                <PrismCode component="pre" className="language-javascript">
                {`
export const getCurrentUserData = async( token ) => {
   return JSON.parse(
       await fetch(spotify.CURRENT_USER_DATA( token )).then( response => response.text() )
   )
};
                `}
                </PrismCode>
                <p>
                    As you may know a fetch returns a promise,
                    which is not rejected in the current code.
                    We want to make it more secure and deal with the promises failures
                    and HTTP response errors.
                    I cleaned up the code a bit and added it to the
                    SpotifyService class and your class should like this.
                </p>
                <PrismCode component="pre" className="language-javascript">
                {`
import React from 'react';
import * as spotify from '../contants/spotify.api.contants';


export const spotifyTokens = async( code ) => {
   return await fetch(spotify.TOKEN_REQUEST( code ))
       .then(handleHTTPErros)
       .then( response => response.text())
       .catch(data => console.log(data));
};
export const spotifyCallback = async() => {
   return await fetch(spotify.CALLBACK_URI)
       .then(handleHTTPErros)
       .then(data => data.text())
       .catch( data => console.log( data ));
};
export const getCurrentUserData = async( accessToken ) => {
   return await fetch(spotify.CURRENT_USER_DATA( accessToken ))
       .then(handleHTTPErros)
       .then( response => response.text())
       .catch(data => console.log(data));
};
const handleHTTPErros = ( response ) => {
   if (!response.ok) throw new TypeError( response.statusText);
   return response
};
                `}
                </PrismCode>
                <p>
                    Now we use a handleHTTPErrors that will throw a new error if the response is not ok.
                    Let’s test this new service in the auth controller
                    and then redirect the user to the home component.
                    Add this code to the spotify.auth.controller.
                </p>
                <PrismCode component="pre" className="language-javascript">
                {`
import React from 'react';
import queryString from 'query-string';
import { spotifyTokens, getCurrentUserData } from '../services/spotify.service';
import { initialize } from '../../states/actions/user.action';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
const REGEX_STRING_ARRAY = /["\]']+/gi;

const retrieveStringFromArray = ( stringArray ) => {
   let output = stringArray.replace(REGEX_STRING_ARRAY,'');
   let newStringArray = output.split(',');
   return {
       accessToken: newStringArray[0].slice(1),
       refreshToken: newStringArray[1]
   };
};

const initializeUserData = async ( parsed ) => {
   let userData = {};
   userData.token = retrieveStringFromArray(
       await spotifyTokens( parsed.code ).then( response => Promise.resolve( response ) )
   );
   let newUser = await getCurrentUserData( userData.token.accessToken ).
   then( response => {return JSON.parse(response)}
   ).catch(error => error);
   userData.email = newUser.email;
   userData.name = newUser.displayName;
   return userData
};
class SpotifyAuthController extends React.Component {

   componentDidMount(){
       initializeUserData( queryString.parse( this.props.location.search ))
           .then( user =>
               this.props.dispatch( initialize( user.name, user.email, user.token ) ) )
           .catch( error => console.log(error) );
   }
   render() {
       if( queryString.parse( this.props.location.search ) !== undefined ) {
           return( <Redirect to='/home' /> )
       }else {
           return( <Redirect to='/login' /> )
       }
   }

}

export default connect(null,null)(SpotifyAuthController);
                `}
                </PrismCode>
                <p>
                    If we look inside the initializeData function we can see that we make the request
                    getCurrentUserData with the use of the accessToken retrieved from the token request.
                    The getCurrentuserData return a array of user data which we then transform into a
                    javascript object. The javascript object adds the values we want to the userData and
                    then return the userData.
                    <br/>
                    <br/>
                    In componentDidMount() the code initialize the requests and add it to the user.action initialize.
                    Which then store all the values from the userData inside our redux object.
                    It is important to implement a redirect action since,
                    this is just a controller and not a visual component, it should only
                    perform all the auth actions before the user is redirected to the home component.
                    Add the following code to the home.view component.
                    <br/>Located at src/components/.
                </p>
                <PrismCode component="pre" className="language-javascript">
                {`
import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

const mapStateToProps = ( state ) => {
   console.log( state );
   return {
       name: state.userReducer.username,
       email: state.userReducer.email,
       accessToken: state.userReducer.accessToken,
       refreshToken: state.userReducer.refreshToken
   }
};

const HomeView = ( { email, name, accessToken, refreshToken } ) => {
   return(
       <div style = {{
           textAlign: 'center'
       }}>
           <h1> Hello {name} here is your </h1>
               <br/>
           <p> email: {email} </p>
               <br/>
           <p> accessToken: {accessToken} </p>
               <br/>
           <p> and </p>
               <br/>
           <p> refreshToken: {refreshToken} </p>
       </div>
   );
};
HomeView.propTypes = {
   email: PropTypes.string,
   name: PropTypes.string,
   refreshToken: PropTypes.string,
   accessToken: PropTypes.string,
};
export default connect(mapStateToProps, null)(HomeView);
                `}
                </PrismCode>
                <p>
                    This code just illustrates how we can use the redux object to
                    visualize some information about the current user.
                    We create propTypes that contains values from the redux object.
                    The values is then visualized in the html view.<br/><br/>

                    Now test it, should visualize the current user email and full
                    name, also the tokens.
                    If you press refresh it will disappear lets fix that!
                    It can be done in several ways, like using a Stateful component.
                    But in this tutorial we will keep this stateless component
                    and not add a container.component but instead use
                    something called persistor. This is a library that
                    rehydrates the values inside a redux object,
                    which means that the redux reducers wont initialize
                    the default state on page refresh it will instead use
                    the current state that is store inside the persistor.<br/>
                    First of all install the following modules.
                </p>
                <code>
                    npm install --save redux-persist
                </code><br/>
                <code>
                    npm install --save redux-thunk
                </code><br/><br/>
                <p>
                    Add the following code to src/states/store.js if there
                    is no store.js file create one.
                </p>
                <PrismCode component="pre" className="language-javascript">
                {`
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/index';
import { persistReducer, persistStore } from 'redux-persist';
import  storage  from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

const persistConfig = {
   key: 'root',
   storage
};
const persistedReducer = persistReducer( persistConfig, reducers );

const store = createStore(
   persistedReducer,
   applyMiddleware( thunk )
);

const persistor = persistStore( store );

export default { store, persistor };

                `}
                </PrismCode>
                <p>
                   Change the code inside application.router to this:
                </p>
                <PrismCode component="pre" className="language-javascript">
                {`
import React from 'react';
import {
   BrowserRouter,
   Switch,
   Route

} from 'react-router-dom';
import { Provider } from 'react-redux';
import  Store  from '../states/store';
import LoginView from '../components/login.view';
import HomeView from '../components/home.view';
import SpotifyAuthController from '../api/controller/spotify.auth.controller';
import { PersistGate } from 'redux-persist/integration/react';
export const ApplicationRouter = () => {
   return(
       <Provider store ={ Store.store } >
           <PersistGate persistor={Store.persistor}>
               <BrowserRouter>
                   <Switch>
                       <Route exact path='/login' component={LoginView} />
                       <Route exact path='/home' component={HomeView} />
                       <Route exact path='/auth/spotify/callback'
                       component={ SpotifyAuthController } />
                   </Switch>
               </BrowserRouter>
           </PersistGate>
       </Provider>
   );
};
                `}
                </PrismCode>
                <p>
                    And that is all now we have a application which use the spotify
                    api to get the current user data.  Now it is time for you to
                    implement new services like getting tracks, creating playlist or other cool stuff.
                    The documentation on how to create different services is found at this
                    { refPresenter( "https://github.com/thelinmichael/spotify-web-api-java", "github page" ) } <br/><br/>
                    The exempel code is in java but I guess you know a bit of java if your using kotlin :).
                    Just translate it and add new requests to spotify
                    in your kotlin classes. The request processes is almost
                    the same as the currentUserData process. <br/>
                    You can get this project at my
                    { refPresenter( "https://github.com/elfanos/spotify-api-with-kotlin-react", "github page" ) }
                </p>
            </div>
        </div>
    );

};

SpotifyApiPresenter.propTypes = {
    bodyHeight: PropTypes.string.isRequired
};
const styles = {
    a: {
        color: color.PRIMARY_ACTIVE_ORANGE
    }
};

export default connect(null,null)(SpotifyApiPresenter);