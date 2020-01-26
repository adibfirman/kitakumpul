import React from "react";

import { firebase } from "@utils";

function SignUp() {
	const [isLoading, setLoading] = React.useState(false);
	const [errMsg, setErrMsg] = React.useState("");

	async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setLoading(true);
		setErrMsg("");

		try {
			const elements: HTMLFormControlsCollection = e.currentTarget.elements;
			const { value: email } = elements.namedItem("email") as HTMLInputElement;
			const { value: pass } = elements.namedItem("pass") as HTMLInputElement;

			await firebase.auth().createUserWithEmailAndPassword(email, pass);
		} catch (e) {
			setErrMsg(e.message);
			console.error(e);
		}

		setLoading(false);
	}

	return (
		<form onSubmit={onSubmit}>
			<div>{errMsg}</div>
			<div>
				<label htmlFor="email">Email</label>
				<input id="email" required type="text" name="email" />
			</div>
			<div>
				<label htmlFor="pass">Password</label>
				<input id="pass" required type="password" name="pass" />
			</div>
			<button type="submit" disabled={isLoading}>
				{isLoading ? "Processing..." : "Sign Up"}
			</button>
		</form>
	);
}

export default SignUp;
