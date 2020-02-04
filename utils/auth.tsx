import * as React from "react";
import * as Next from "next";
import { AppContext } from "next/app";
import nextCookies from "next-cookies";
import Cookie from "js-cookie";

import redirectTo from "./redirectTo";
import Router from "next/router";

const TOKEN_NAME = "token";
const LOGIN_ROUTE = "/signin";
const LOGOUT_NAME_TOKEN = "logout";

export function saveToken(token: string = "") {
	Cookie.set(TOKEN_NAME, token);
}

export function removeToken() {
	Cookie.remove(TOKEN_NAME);
	window.localStorage.setItem(LOGOUT_NAME_TOKEN, Date.now().toString());
}

export function auth(context: Next.NextPageContext) {
	const token = nextCookies(context)[TOKEN_NAME];
	if (!token) redirectTo({ context, url: LOGIN_ROUTE });
}

export function privateRoute(Component: React.ElementType) {
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

	WrapperComponent.getInitialProps = async ({ Component, ctx }: AppContext) => {
		const token = auth(ctx);
		const pageProps =
			Component.getInitialProps && (await Component.getInitialProps(ctx));

		return { ...pageProps, token };
	};

	return WrapperComponent;
}
