import React, { useState } from "react"

function FormContainer({ blogsAPI }) {

    const [newBlogData, setNewBlogData] = useState([])

    // fetch(blogsAPI, {
    //     method: "POST", 
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({title: "title", content: "content"}),
    //     })
    //     .then((r) => r.json())
    //     .then((newBlogData) => {
    //         setNewBlogData(newBlogData)
    //     } 
    //   );

    return(
        <section>
            <h1>Form Container</h1>
            {/* <form onSubmit={handleSubmit} className="form" autoComplete="off">
        <h3>Add New Blog</h3>

        <label htmlFor="title">Title</label>
        <input type="text"
        id="title"
        title="title"
        // value={formData.name}
        // onChange={handleChange}
        />
        </form> */}
        </section>
    )
}

export default FormContainer;