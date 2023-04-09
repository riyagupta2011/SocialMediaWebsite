import React, { useEffect } from 'react'
import {useState} from "react";
import './feed.css'
 import Share from "../share/Share"
 import Post from "../post/Post"
import axios from "axios"

function Feed({username}) {
  const [posts,setPosts]=useState([]);
  useEffect(()=>{
    const fetchPost=async()=>{
    const res=username
    ?await axios.get("/post/profile/"+username)
    :await axios.get("post/timeline/64281841b29ce0ed68638edf");
    setPosts(res.data);
    };
    fetchPost();
  },[username])
  return (
    <div className='feed'>
      <div className="feedWrapper">
         <Share/>
        {posts.map((p)=>(
          <Post key={p._id} post={p}/>
        ))} 
        
      </div>
    </div>
  )
}

export default Feed
