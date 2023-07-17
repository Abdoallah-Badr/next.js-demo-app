import classes from "./comments.module.css";

const Comments = async ({ postId }) => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 5000);
  });
  const commentsResponse = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
  );
  const comments = await commentsResponse.json();
  return (
    <div>
      {comments.map((comment) => (
        <div key={comment.id} className={classes.comment}>
          <p> 👤 user :{comment.name} </p>
          <p> 💬 comment: {comment.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Comments;
