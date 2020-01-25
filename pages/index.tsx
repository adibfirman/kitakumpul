import React from "react";

import Layout from "@components/Layout";

export default function App() {
	return (
		<Layout>
			<h1>Kita Kumpul</h1>
			<p>Please login...!!</p>
			<form>
				<div>
					<label htmlFor="email">Email</label>
					<input id="email" />
				</div>
				<div>
					<label htmlFor="password">Password</label>
					<input id="password" />
				</div>
			</form>
		</Layout>
	);
}
