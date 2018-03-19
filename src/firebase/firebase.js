import * as firebase from "firebase"

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
const githubAuthProvider = new firebase.auth.GithubAuthProvider()
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider()
const twitterAuthProvider = new firebase.auth.TwitterAuthProvider()


{/* <script>
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '{your-app-id}',
      cookie     : true,
      xfbml      : true,
      version    : '{latest-api-version}'
    });
      
    FB.AppEvents.logPageView();   
      
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
</script> */}


//const idProvider = new firebase.auth.getInstance().getCurrentUser().getProviders()

// const emailProvider = (email, password) => firebase.auth().createUserWithEmailAndPassword(email, password)
// const emailLogin = (email, password) => firebase.auth().signInWithEmailAndPassword(email, password)


export {
    firebase,
    googleAuthProvider,
    // emailProvider,
    // emailLogin,
    twitterAuthProvider,
    githubAuthProvider,
    facebookAuthProvider,
    database as default
}