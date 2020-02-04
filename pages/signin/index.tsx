import "firebase/auth";

import React from "react";
import firebase from "firebase/app";
import Router from "next/router";

import { auth } from "@utils";

function SignIn() {
	const [isLoading, setLoading] = React.useState(false);
	const [errMsg, setErrMsg] = React.useState("");

	async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setLoading(true);
		setErrMsg("");

		try {
			const ele: HTMLFormControlsCollection = e.currentTarget.elements;
			const { value: email } = ele.namedItem("email") as HTMLInputElement;
			const { value: pass } = ele.namedItem("pass") as HTMLInputElement;

			await firebase.auth().signInWithEmailAndPassword(email, pass);

			const currentUser = firebase.auth().currentUser;
			auth.saveToken(currentUser?.uid);

			Router.push("/home");
		} catch (e) {
			setErrMsg(e.message);
			console.error(e);
		}

		setLoading(false);
	}

	return (
		<form onSubmit={onSubmit}>
			{errMsg}
			<div>
				<label htmlFor="email">Email</label>
				<input id="email" required type="text" name="email" autoFocus />
			</div>
			<div>
				<label htmlFor="pass">Password</label>
				<input id="pass" required type="password" name="pass" />
			</div>
			<button type="submit" disabled={isLoading}>
				{isLoading ? "Processing..." : "Sign In"}
			</button>
		</form>
	);
}

export default SignIn;
