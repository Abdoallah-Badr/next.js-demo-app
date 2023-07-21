import PostComponent from "./postComponent";
const FetchPost = async ({ postId }) => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2500);
  });
  const postResponse = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  const post = await postResponse.json();
  return <PostComponent title={post.title} body={post.body} />;
};

export default FetchPost;
