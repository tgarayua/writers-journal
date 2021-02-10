import React, { useState, useEffect } from "react"
import BlogItem from "./BlogItem"
import BlogForm from "./BlogForm"

function BlogContainer( { blogsAPI } ) {

    const [blogs, setBlogs] = useState()
    const [showForm, setShowForm] = useState(false)

    useEffect(() => {
        fetch(blogsAPI)
        .then((r) => r.json())
        .then(blogs => {
            setBlogs(blogs)
        })
    }, [])

    console.log(blogs)

    if (!blogs) {
        return "Loading..."
    }

    const blogsList = blogs?.map((blog) => {
        return <BlogItem key={blog.id} 
        title={blog.title} 
        content={blog.content} 
        createdAt={blog.created_at} 
        user={blog.user_id} blogs={blogs} setBlogs={setBlogs} blogID={blog.id} blogsAPI={blogsAPI} />
    }) 

    function handleCreateBlog() {
        setShowForm(!showForm)
    }

    return (
        <>
            <h1>Blogs</h1>
            {blogsList}
            <button type="button" onClick={handleCreateBlog}>Create Blog!</button>
            {showForm ? <BlogForm blogs={blogs} setBlogs={setBlogs} blogsAPI={blogsAPI} showForm={showForm} setShowForm={setShowForm} /> : null }
            <hr />
        </>
    )
}

export default BlogContainer;