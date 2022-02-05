import { Fragment } from "react";
import FeaturedPosts from "../components/home-page/featured-posts";

import { getFeaturedPosts } from './../lib/posts-util';
import Hero from './../components/home-page/hero';


function HomePage(props) {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}


export const getStaticProps =  () => {


  const featuredPosts =  getFeaturedPosts()

  return {
    props:{
      posts: featuredPosts
    }
  }
}
export default HomePage;
