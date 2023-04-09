import React from 'react'
import "./profile.css"
import { useState,useEffect } from 'react'
import axios from "axios";
import Topbar from '../../component/topbar/Topbar'
import Sidebar from '../../component/sidebar/Sidebar'
import Feed from '../../component/feed/Feed'
import Rightbar from '../../component/rightbar/Rightbar'
import { useParams } from "react-router"
export default function Profile() {
  const PF=process.env.REACT_APP_PUBLIC_FOLDER;
  const [user,setUser]=useState({});
  const username=useParams().username
  
  useEffect(()=>{
    const fetchUser=async()=>{
    const res=await axios.get(`/users?username=${username}`);
    setUser(res.data)
    
    };
    fetchUser();
  },[username])
  return (
    <>
    
    <Topbar/>
    <div className="profile">
    <Sidebar />
    <div className="profileRight">
        <div className="profileRightTop">
           <img className="profileCoverImg" src={user.coverPicture || PF+"person/noCover.png"} alt="" />
           <img src={user.profilePicture || PF+"person/noAvatar.png"} alt="" className="profileUserImg"/>
        </div>
        <div className="profileInfo">
          <h4 className="profileInfoName">{user.username}</h4>
          <span className="profileInfoDesc">{user.desc}</span>
        </div>
        <div className="profileRightBottom">
           <Feed username={username}/>
            <Rightbar user={user}/>
        </div>
    </div>
    </div>
    
    
    </>
  )
}
