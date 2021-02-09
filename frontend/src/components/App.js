import React, {useState, useEffect} from "react"
import Header from "./Header"
import BlogContainer from "./BlogContainer"
import FormContainer from "./FormContainer"


function App() {

  const blogsAPI = "http://localhost:3000/blogs"

  // const [blogs, setBlogs] = useState([])


  // useEffect(() => {
  //     fetch(blogsAPI)
  //     .then((r) => r.json())
  //     .then(blogs => {
  //         setBlogs(blogs)
  //     })
  // }, [])

//   const blogsList = blogs.map((blog) => {
//     return <BlogItem key={blog.id} 
//     title={blog.title} 
//     content={blog.content} 
//     createdAt={blog.created_at} 
//     user={blog.user_id} />
// }) 

  return (
    <div className="App">
      <Header />
      <hr />
      <BlogContainer blogsAPI={blogsAPI}  />
      <FormContainer blogsAPI={blogsAPI}  />
    </div>
  );
}

export default App;
