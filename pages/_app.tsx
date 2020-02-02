/** TO-DO: uncomment when u want tailwind css  */
// import "@styles/main.css";
import "@utils/initFirebase";

import React from "react";
import { AppProps } from "next/app";

function MainApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}

export default MainApp;
