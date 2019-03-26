import Link from "next/link";

export default () => (
	<div>
		<h1> About </h1>
		<Link href="/">
			<a> Go Home </a>
		</Link>
		<p> I'm a programmer </p>
		<img src="/static/next-logo.png" alt=" next" height="200px" />
	</div>
);
