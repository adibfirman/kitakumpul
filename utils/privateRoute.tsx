import "firebase/auth";

import * as React from "react";
import * as Next from "next";

import { auth } from "./auth";

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
