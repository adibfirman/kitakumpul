import React from "react";
import Link from "next/link";

function Index() {
	return (
		<div>
			<p>
				<Link href="/signin" as="/signin">
					<a>Sign in</a>
				</Link>
			</p>
			<p>
				<Link href="/signup" as="/signup">
					<a>Sign Up</a>
				</Link>
			</p>
		</div>
	);
}

export default Index;
