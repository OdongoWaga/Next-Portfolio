import Layout from "../components/Layout";
import { withRouter } from "next/router";

const Post = ({ router }) => (
	<Layout title={router.query.title}>
		<p style={{ width: "80vw" }}>
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis sunt
			fugiat nesciunt architecto vel quod rerum, totam quibusdam. Atque corporis
			suscipit eaque quos, rem, itaque enim est eveniet excepturi minus incidunt
			nobis fuga asperiores nam deserunt, iste repudiandae provident nihil
			facere optio voluptatem. Reprehenderit molestiae temporibus delectus,
			placeat quidem dicta!{" "}
		</p>
	</Layout>
);

export default withRouter(Post);
