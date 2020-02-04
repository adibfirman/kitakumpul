import "firebase/auth";

import * as React from "react";
import * as Next from "next";
import Router from "next/router";
import nextCookies from "next-cookies";

import * as Types from "./types";

function redirectTo({ context, url }: Types.IIPrivateRoute) {
	if (context.res) {
		context.res.writeHead(302, { Location: url });
		context.res.end();
	} else {
		Router.push(url);
		Router.replace(url);
	}
}

function auth(context: Next.NextPageContext) {
	const token = nextCookies(context).token;
	if (!token) redirectTo({ context, url: "/signin" });
}

export default function privateRoute(Component: React.ElementType) {
	function privateComponent(props: Next.NextComponentType) {
		return <Component {...props} />;
	}

	privateComponent.getInitialProps = (ctx: Next.NextPageContext) => {
		const token = auth(ctx);

		return { token };
	};

	return privateComponent;
}
