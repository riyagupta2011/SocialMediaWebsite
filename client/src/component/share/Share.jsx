import React from 'react'
import "./share.css"
import PermMedia from "@mui/icons-material/PermMedia";
import Label from "@mui/icons-material/Label";
import Room from "@mui/icons-material/Room";
import EmojiEmotions from "@mui/icons-material/EmojiEmotions";
function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
            <img className="shareProfileImg" src="/assets/person/1.jpeg" alt="" />
            <input type="text" placeholder="What's in your mind Safak" className="shareInput"/>
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
            <div className="shareOptions">
                <div className="shareOption">
                <PermMedia htmlColor="tomato" classname="shareIcon"/>
                <span className="shareOptionText">Photo or video</span>
                </div>

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
            <button className="shareButton">Share</button>
        </div>
        
      </div>
    </div>
  )
}

export default Share
