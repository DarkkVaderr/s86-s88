// NewPost.js
import React, { useState } from 'react';
import { createPost } from '../api';  // Create a new API function for this

const NewPost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await createPost({ title, content });
      setMessage('Post created successfully!');
      setTitle('');
      setContent('');
    } catch (error) {
      setMessage('Error creating post');
      console.error(error);
    }
  };

  return (
    <div className="new-post">
      <h2>Create a New Post</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewPost;
