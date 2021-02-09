import React from "react"

function BlogItem({ title, content, createdAt, user }) {
    return (
        <>
        <h1>Title: {title} </h1>
        <h1>Content: {content} </h1>
        <h1>Created At: {createdAt} </h1>
        <h1>Author: {user} </h1>
        <hr />
        </>
    )
}

export default BlogItem;