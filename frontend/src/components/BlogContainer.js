import React, { useState, useEffect } from "react"
import BlogItem from "./BlogItem"

function BlogContainer( { blogsAPI} ) {

    const [blogs, setBlogs] = useState()

    

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
        user={blog.user_id} />
    }) 

    return (
        <>
            <h1>Blogs</h1>
            {blogsList}
            
        </>
    )
}

export default BlogContainer;