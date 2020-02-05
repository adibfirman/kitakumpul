import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { privateRoute } from "@utils";

function Welcome() {
	const routePage = useRouter();
	const url = `${routePage.pathname}/categories`;

	return (
		<div>
			<h1>Selamat datang</h1>
			<p>bla bla bla upload your photo here</p>
			<div>here will be image profile uploaded</div>
			<button>Upload a photo</button>
			<p>OR</p>
			<Link href={url} as={url}>
				<a>Skip for now</a>
			</Link>
		</div>
	);
}

export default privateRoute(Welcome);
