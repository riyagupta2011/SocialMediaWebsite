import React from 'react'
import "./closefriend.css"
const PF=process.env.REACT_APP_PUBLIC_FOLDER;
function CloseFriend({user}) {
  return (
    <li className="sidebarFriend">
            <img src={PF+user.profilePicture} alt="" className="sidebarFriendImage" />
            <span className="FreindName">{user.username}</span>
          </li>
  )
}

export default CloseFriend