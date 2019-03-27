import Link from "next/link";
import Layout from "../components/Layout";

const PostLink = ({ slug, title }) => (
	<li>
		<Link as={`/${slug}`} href={`/post?title=${title}`}>
			<a>{title} </a>
		</Link>
	</li>
);

export default () => (
	<Layout title="My Blog">
		<PostLink slug="react-post" title="React Post" />
		<PostLink slug="angular-post" title="Angular Post" />
		<PostLink slug="next-post" title="Next Post" />
		<PostLink slug="polymer-post" title="Polymer Post" />
	</Layout>
);
