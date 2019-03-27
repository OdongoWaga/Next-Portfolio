import Layout from "../components/Layout";

const Post = ({ url }) => (
	<Layout title={url.query.title}>
		<p>
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis sunt
			fugiat nesciunt architecto vel quod rerum, totam quibusdam. Atque corporis
			suscipit eaque quos, rem, itaque enim est eveniet excepturi minus incidunt
			nobis fuga asperiores nam deserunt, iste repudiandae provident nihil
			facere optio voluptatem. Reprehenderit molestiae temporibus delectus,
			placeat quidem dicta!{" "}
		</p>
	</Layout>
);

export default Post;
