import React from "react"

function EditBlogForm() {

    
    return (
        <div>
      <h3>Edit Your Blog</h3>
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
          <input className="submit-button" type="submit" value="Update" />
          <button onClick={handleCancel} type="button" />
            Cancel
          </button>
        </div>
      </form>
    </div>
    )
}

export default EditBlogForm; 