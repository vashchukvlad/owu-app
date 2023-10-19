const PostDetails = ({ post: { id, userId, title, body }, showPostDetails }) => {
  return (
    <div>
      <p>ID: {id}</p>
      <p>UserID: {userId}</p>
      <p>Title: {title}</p>
      <p>Body: {body}</p>
    </div>
  );
};

export { PostDetails };
