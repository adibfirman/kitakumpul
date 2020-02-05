import "firebase/auth";

import * as React from "react";
import * as Next from "next";
import Router from "next/router";

import { auth } from "./auth";
import { LOGOUT_NAME_TOKEN, LOGIN_ROUTE } from "./auth";

export default function privateRoute(Component: any) {
	function WrapperComponent(props: Next.NextComponentType) {
		function syncLogout(e: StorageEvent) {
			if (e.key === LOGOUT_NAME_TOKEN) {
				Router.push(LOGIN_ROUTE);
			}
		}

		React.useEffect(() => {
			window.addEventListener("storage", syncLogout);

			return () => {
				window.removeEventListener("storage", syncLogout);
				window.localStorage.removeItem(LOGOUT_NAME_TOKEN);
			};
		}, []);

		return <Component {...props} />;
	}

	WrapperComponent.getInitialProps = async (ctx: Next.NextPageContext) => {
		const token = auth(ctx);
		const pageProps =
			Component.getInitialProps && (await Component.getInitialProps(ctx));

		return { ...pageProps, token };
	};

	return WrapperComponent;
}
