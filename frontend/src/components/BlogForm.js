import React, { useState } from "react";

function BlogForm({ blogs, setBlogs, showForm, setShowForm, blogsAPI }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function handleCancel() {
      setShowForm(!showForm)
  }

  function handleSave(e) {
      e.preventDefault()

      const data = {
          "title": title,
          "content": content,
          "user_id": 1
      }

      fetch(blogsAPI, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(blog => {
          setBlogs([...blogs, blog]);
          setShowForm(!showForm);
      })      
  }

  return (
    <div>
      <h3>Create a Blog</h3>
      <form className="blog-editor">
        <label htmlFor="title">
          Title:
          <textarea onChange={(e) => setTitle(e.target.value)} value={title} />
        </label>
        <br />
        <label htmlFor="content">
          Content:
          <textarea onChange={(e) => setContent(e.target.value)} value={content} />
        </label>
        <div className="button-row">
          <button onClick={handleSave} type="button">
            Save
          </button>
          <button onClick={handleCancel} type="button">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default BlogForm;
