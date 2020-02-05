import "firebase/database";

import React from "react";
// import firebase from "firebase/app";

import { privateRoute } from "@utils";

function Categories() {
	return (
		<div>
			<h1>Pilih kategori untuk memulai</h1>
		</div>
	);
}

Categories.getInitialProps = () => {
	// const db = firebase.database();
	return {};
};

export default privateRoute(Categories);
