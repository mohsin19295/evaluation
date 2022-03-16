import React, { useState, useEffect } from 'react'
import axios from "axios"
import "./movies.css"
import Snipper from "../../src/spinner.gif"

function Movies() {
  const [post, setPost] = useState([])
  const [loading, setLoading]= useState(false)

  useEffect(()=>{
    setLoading(true)
    axios.get("https://movie-fake-server.herokuapp.com/data")
    .then(res=>{
      console.log(res.data)
      setPost(res.data)
    })
    .catch(err=>{
      console.log(err)
    })
    .finally(()=>setLoading(false))
  }, [])


   return (
    <>
     <div id="container">
     {loading && <img id="snipper" src={Snipper} alt="" /> }
    
     <div id="grid">
    {post.map(e=>(
      <div key={e.id}>
          <img src={e.image_url} alt="No image" />
          <p id="title">{e.movie_name}</p>
          <p id="genre">{e.genre == null ? e.genre = "Unknown" : e.genre}</p> 
          <p id="date">{e.release_date}</p>
          <p id="rating">{e.rating}</p>
      </div>
    ))}
    </div>
       </div>
    </>
  );
}
export default Movies