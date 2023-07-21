import classes from "./postComponent.module.css";
const PostComponent = (props) => {
  return (
    <div className={classes.post}>
      <h3 className={classes["post-title"]}>{props.title}</h3>
      <p className={classes["post-body"]}>{props.body}</p>
    </div>
  );
};

export default PostComponent;
