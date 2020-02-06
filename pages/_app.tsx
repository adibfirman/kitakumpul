/** Uncomment this when u want to tailwind css */
// import "@styles/main.css";

import "@utils/initFirebase";
import "firebase/auth";

import * as React from "react";
import { AppProps } from "next/app";

function MainApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}

export default MainApp;
