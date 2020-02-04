import Router from "next/router";

import * as Types from "./types";

export default function redirectTo({ context, url }: Types.IIPrivateRoute) {
	if (context.res) {
		context.res.writeHead(302, { Location: url });
		context.res.end();
	} else {
		Router.push(url);
		Router.replace(url);
	}
}
