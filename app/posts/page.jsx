import PostComponent from "../components/postComponent";
import classes from "./posts.module.css";
import Link from "next/link";
const Posts = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1500);
  });
  const posts = await response.json();

  const postsJsx = posts.map((post) => (
    <Link href={`/posts/${post.id}`} key={post.id}>
      <PostComponent title={post.title} body={post.body} />
    </Link>
  ));
  return <div className={classes["posts-container"]}>{postsJsx}</div>;
};

export default Posts;
