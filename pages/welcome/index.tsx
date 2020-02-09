import React from "react";
import { useRouter } from "next/router";
import qs from "query-string";

import { privateRoute, fileToBase64 } from "@utils";

function Welcome() {
	const routePage = useRouter();
	const [photo, setPhoto] = React.useState<string>("");

	function nextPage() {
		const url = `${routePage.pathname}/categories`;
		const params = { photo, categories: [] };

		routePage.push({ pathname: url, query: qs.stringify(params) });
	}

	async function onFileChange(e: React.ChangeEvent<HTMLInputElement>) {
		if (e.target && e.target.files) {
			const getFile = e.target.files[0];
			const base64File = await fileToBase64(getFile);

			setPhoto(base64File);
		}
	}

	return (
		<div>
			<h1>Selamat datang</h1>
			<p>bla bla bla upload your photo here</p>
			<div>here will be image profile uploaded</div>
			<input type="file" onChange={onFileChange} accept="image/*" />
			<p>OR</p>
			<button onClick={nextPage}>Skip for now</button>
			{photo && <button onClick={nextPage}>Next</button>}
		</div>
	);
}

export default privateRoute(Welcome);
