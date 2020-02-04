/** TO-DO: uncomment when u want tailwind css  */
// import "@styles/main.css";
import "@utils/initFirebase";
import "firebase/auth";

import * as React from "react";
import { AppProps, AppContext } from "next/app";
// import firebase from "firebase/app";

function MainApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}

MainApp.getInitialProps = async ({ Component, ctx }: AppContext) => {
	const pageProps = Component.getInitialProps
		? await Component.getInitialProps(ctx)
		: {};

	return pageProps;
};

export default MainApp;
