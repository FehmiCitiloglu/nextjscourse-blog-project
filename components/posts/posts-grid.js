import classes from "./post-grid.module.css";
import PostItem from "./post-item";

const PostsGrid = (props) => {
  const { posts } = props;
  console.log("posts-grid", posts);
  return (
    <ul className={classes.grid}>
      {posts.map((post, index) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
};

export default PostsGrid;
