import { useEffect, useState } from 'react';

import css from './Posts.module.css';
import { Post } from '../Post/Post';
import { PostDetails } from '../PostDetails/PostDetails';
import { postService } from '../../../services/post.service';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [postDetails, setPostDetails] = useState(null);

  const showPostDetails = async (postId) => {
    const { data } = await postService.getById(postId);
    setPostDetails(data);
  };

  useEffect(() => {
    postService.getAll().then(({ data }) => setPosts(data));
  }, []);

  return (
    <div>
      <div className={css.Posts}>
        {posts.map((post) => (
          <Post key={post.id} post={post} showPostDetails={showPostDetails} />
        ))}
      </div>
      {postDetails && <PostDetails post={postDetails} />}
    </div>
  );
};

export { Posts };
