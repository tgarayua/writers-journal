import React, { useState } from "react"

function BlogForm() {

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    function handleChange(event) {
        console.log(event)
    }

    return (
        <section>
            <form onSubmit={handleSubmit} className="form" autoComplete="off">
        <h3>Add New Blog</h3>

        <label htmlFor="title">Title</label>
        <input type="text"
        id="title"
        title="title"
        value={formData.name}
        onChange={handleChange}
        />
        </form>
        </section>
    )
}

export default BlogForm;