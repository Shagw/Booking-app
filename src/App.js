import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

import firebase from "firebase/app";
import "firebase/auth";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Components/Header";
import SignIn from "./Components/SignIn";
function App() {
  var googleProvider = new firebase.auth.GoogleAuthProvider();
  var faceBookProvider = new firebase.auth.FacebookAuthProvider();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // FIR Auth State Observer
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        var uid = user.uid;
        var name = user.displayName;
        console.log(user.displayName);
        console.log(`User has signed in with UID: ${uid}`);
        setUser(name);
      } else {
        // User is signed out
        console.log("User is not signed in.");
        setUser(null);
      }
    });
  }, []);

  function signInWithGooglePopUp() {
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((result) => {
        console.log("User has signed in.");
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        console.log(
          `Errors occurred during sign in: ${errorCode}, ${errorMessage}, ${email}, ${credential}`
        );
      });
  }

  function signInWithFacebookPopUp() {
    firebase
      .auth()
      .signInWithPopup(faceBookProvider)
      .then((result) => {
        console.log("User has signed in.");
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        console.log(
          `Errors occurred during sign in: ${errorCode}, ${errorMessage}, ${email}, ${credential}`
        );
      });
  }

  function signout() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log("User has signed out.");
      })
      .catch((err) => {
        console.log("Error signing out: ", err);
      });
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Route
          exact
          path="/"
          render={(props) => (
            <SignIn
              user={user}
              signout={signout}
              signInWithGooglePopUp={signInWithGooglePopUp}
              signInWithFacebookPopUp={signInWithFacebookPopUp}
            />
          )}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
