import React from 'react';

const PostList = ({ posts }) => {
  return (
    <div className="post-list">
      {posts.map(post => (
        <div key={post._id} className="post-card">
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default PostList;
