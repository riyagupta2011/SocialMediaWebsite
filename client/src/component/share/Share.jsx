import React, { useContext,useRef,useState } from 'react'
import "./share.css"
import PermMedia from "@mui/icons-material/PermMedia";
import Label from "@mui/icons-material/Label";
import Cancel from "@mui/icons-material/Cancel";
import Room from "@mui/icons-material/Room";
import EmojiEmotions from "@mui/icons-material/EmojiEmotions";
import {AuthContext} from "../../context/AuthContext"
import axios from "axios";


function Share() {
  const {user}=useContext(AuthContext)
  const PF=process.env.REACT_APP_PUBLIC_FOLDER;
  const desc=useRef();
  const [file,setFile]=useState(null);


  const submitHandler=async(e)=>{
    e.preventDefault();
    const newPost={
      userId:user._id,
      desc:desc.current.value
    }
    if(file)
    {
      const data=new FormData();
      const fileName=Date.now() + file.name;
      data.append("name",fileName);
      data.append("file",file);
     
      newPost.img=fileName;
      try{
            await axios.post("/upload",data);
            window.location.reload();
      }
      catch(err)
      {
        console.log(err)
      }
    }
    try{
     await axios.post("/post",newPost);
    }
    catch(err)
    {

    }
  }
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
            <img className="shareProfileImg" src={user.profilePicture ? PF+user.profilePicture: PF+"person/noAvatar.png"} alt="" />
            <input  type="text" placeholder={"What's in your mind "+user.username +" ?"} className="shareInput" ref={desc}/>
        </div>
        <hr className="shareHr" />
        {file &&(
          <div className="shareImgContent">
            <img src={URL.createObjectURL(file)} alt="" className='sharingImg' />
            <Cancel className="shareCancelImg" onClick={()=>setFile(null)}/>
          </div>
        )}
        <form className="shareBottom" onSubmit={submitHandler}>
            <div className="shareOptions">
                <label htmlFor="file" className="shareOption">
                <PermMedia htmlColor="tomato" classname="shareIcon"/>
                <span className="shareOptionText">Photo or video</span>
                <input style={{display:"none"}} type="file" name="" id="file" accept='.png,.jpeg,.jpg' onChange={(e)=>setFile(e.target.files[0])}/>
                </label>

                <div className="shareOption">
                <Label htmlColor="blue" classname="shareIcon"/>
                <span className="shareOptionText">Tag</span>
                </div>

                <div className="shareOption">
                <Room htmlColor="green" classname="shareIcon"/>
                <span className="shareOptionText">Location</span>
                </div>

                <div className="shareOption">
                <EmojiEmotions htmlColor="goldenrod" classname="shareIcon"/>
                <span className="shareOptionText">Feelings</span>
                </div>
               
            </div>
            <button className="shareButton" type='submit'>Share</button>
        </form>
        
      </div>
    </div>
  )
}

export default Share
