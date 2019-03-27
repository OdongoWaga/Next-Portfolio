import Link from "next/link";
import Layout from "../components/Layout";
import { Component } from "react";

export default class About extends Component {
	render() {
		return (
			<Layout title="About">
				<Link href="/">
					<a> Go Home </a>
				</Link>
				<p> I'm a programmer </p>
				<img src="/static/next-logo.png" alt=" next" height="200px" />
			</Layout>
		);
	}
}
