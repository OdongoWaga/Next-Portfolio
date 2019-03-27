import Link from "next/link";
import Layout from "../components/Layout";

const PostLink = ({ title }) => (
	<li>
		<Link href={`/post?title=${title}`}>
			<a>{title} </a>
		</Link>
	</li>
);

export default () => (
	<Layout title="My Blog">
		<PostLink title="react" />
		<PostLink title="angular" />
		<PostLink title="Next" />
		<PostLink title="Polymer" />
	</Layout>
);
