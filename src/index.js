import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './container/App';  
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase';
// Initialize Firebase
var config = {
  apiKey: "AIzaSyCLwJnRQC7oNMKjdQ3Oh87o-NeNlLn9GzI",
  authDomain: "burguer-queen-9c312.firebaseapp.com",
  databaseURL: "https://burguer-queen-9c312.firebaseio.com",
  projectId: "burguer-queen-9c312",
  storageBucket: "burguer-queen-9c312.appspot.com",
  messagingSenderId: "1065454584888"
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
