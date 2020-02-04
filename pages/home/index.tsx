import "firebase/auth";

import React from "react";
import Router from "next/router";
import firebase from "firebase/app";

import { privateRoute } from "@utils";

function Home() {
	function onLogout() {
		firebase.auth().signOut();
		Router.push("/");
	}

	return (
		<div>
			<div>Home Page</div>
			<button onClick={onLogout}>logout</button>
		</div>
	);
}

export default privateRoute(Home);
