import React, {useState, useEffect} from "react"
import Header from "./Header"
import BlogContainer from "./BlogContainer"
import FormContainer from "./FormContainer"


function App() {

  const blogsAPI = "http://localhost:3000/blogs"

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
