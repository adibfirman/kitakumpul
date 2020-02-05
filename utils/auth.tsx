import * as Next from "next";
import nextCookies from "next-cookies";
import Cookie from "js-cookie";

import redirectTo from "./redirectTo";

export const TOKEN_NAME = "token";
export const LOGIN_ROUTE = "/signin";
export const LOGOUT_NAME_TOKEN = "logout";

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

	return token;
}
