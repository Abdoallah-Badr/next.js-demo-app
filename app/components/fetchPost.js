import PostComponent from "./postComponent";
const FetchPost = async ({ postId }) => {
  console.log(` ===> ${postId}`);
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2500);
  });
  const postResponse = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  const post = await postResponse.json();
  //   console.log(post);
  return <PostComponent title={post.title} body={post.body} />;
};

export default FetchPost;
