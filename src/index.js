import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyDtIfnYmA22a_Wx3iyJGAH208YoypH-q5E",
  authDomain: "booking-app-1a1d1.firebaseapp.com",
  projectId: "booking-app-1a1d1",
  storageBucket: "booking-app-1a1d1.appspot.com",
  messagingSenderId: "927208092663",
  appId: "1:927208092663:web:d04faace9b038ff1d874f2",
  measurementId: "G-H0Q4DJ4ES7"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
