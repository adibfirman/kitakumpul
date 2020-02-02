import * as firebase from "firebase/app";

const config = {
	apiKey: "AIzaSyDz08bqAlHjG0XN-rxwoPm2G33TTldgCPA",
	authDomain: "kitakumpul-40546.firebaseapp.com",
	databaseURL: "https://kitakumpul-40546.firebaseio.com",
	projectId: "kitakumpul-40546",
	storageBucket: "kitakumpul-40546.appspot.com",
	messagingSenderId: "387170495615",
	appId: "1:387170495615:web:33e034b3f3c7f9b7df234a",
	measurementId: "G-N8W3857F58"
};

if (!firebase.apps.length) {
	firebase.initializeApp(config);
}
