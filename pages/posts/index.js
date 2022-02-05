import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";


function AllPostsPage(props) {
  return( <AllPosts posts={props.posts} />);
}


export const getStaticProps =  () => {

  const allPosts = getAllPosts();
console.log(allPosts);
  return {
    props: {
      posts: allPosts
    }
  }
}


export default AllPostsPage;
