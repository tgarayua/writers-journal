import React, { useState } from "react"

function BlogItem({ title, content, createdAt, user, blogID, blogs, setBlogs, blogsAPI }) {

    const [editBlogForm, setEditBlogForm] = useState(false)
    const [showEditForm, setShowEditForm] = useState(false)

    function handleEdit() {
        setEditBlogForm(!editBlogForm)
    }

    function handleDelete(e) {
        e.preventDefault()

        fetch(`http://localhost:3000/blogs/${blogID}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(response => response.json())
      .then(deletedBlog => {
        e.preventDefault()
          const updatedBlogs = blogs.filter((blog) => {
              if(blogID !== deletedBlog) {
                  return (blog)
              }
          })
          setBlogs(updatedBlogs)
      })
  }

    return (
        <div>
            <h1>Title: {title} </h1>
            <h1>Content: {content} </h1>
            <h1>Created At: {createdAt} </h1>
            <h1>Author: {user} </h1>
            <button type="button" onClick={handleDelete}>Delete</button>
            <button type="button" onClick={handleEdit}>Edit</button>
            <hr />
        </ div>
    )
}

export default BlogItem;