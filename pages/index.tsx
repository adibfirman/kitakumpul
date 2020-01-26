import React from "react";
import Link from "next/link";

function Index() {
	return (
		<div>
			<Link href="/signin" as="/signin">
				<a>Sign in</a>
			</Link>
			<Link href="/signup" as="/signup">
				<a>Sign Up</a>
			</Link>
		</div>
	);
}

export default Index;
