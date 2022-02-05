import PostContent from "../../components/posts/post-detail/post-content";
import { getPostsData, getPostsFiles } from "./../../lib/posts-util";

function PostDetailPage(props) {
  return <PostContent post={props.post} />;
}

export function getStaticProps(context) {
  const { params } = context;

  const { slug } = params;

  const postData = getPostsData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const postFileNames = getPostsFiles();
    
  const slugs = postFileNames.map((fileName) => fileName.replace(/\.md$/, ''));
    console.log(slugs);
  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}

export default PostDetailPage;
