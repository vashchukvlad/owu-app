import css from './Post.module.css';

const Post = ({ post: { id, title }, showPostDetails }) => {
  return (
    <div className={css.Post}>
      <p>ID: {id}</p>
      <p>Title: {title}</p>
      <button onClick={() => showPostDetails(id)}>Show details</button>
    </div>
  );
};

export { Post };
