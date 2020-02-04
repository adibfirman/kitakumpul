import "firebase/auth";

import React from "react";
import firebase from "firebase/app";
import Router from "next/router";

import { privateRoute, auth } from "@utils";

function Home() {
	async function onLogout() {
		await firebase.auth().signOut();
		auth.removeToken();
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
