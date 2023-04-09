import React from 'react'
import "./sidebar.css"
import CloseFriend from '../closeFriend/CloseFriend';
import RssFeed from "@mui/icons-material/RssFeed";
import Chat from "@mui/icons-material/Chat";
import PlayCircle from "@mui/icons-material/PlayCircle";
import Groups from "@mui/icons-material/Groups";
import Help from "@mui/icons-material/Help";
import Work from "@mui/icons-material/Work";
import Event from "@mui/icons-material/Event";
import School from "@mui/icons-material/School";
import Bookmarks from "@mui/icons-material/Bookmarks";
import { Users } from '../../dummyData';
function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <ul className="sidebarList">

          <li className="sidebarListitem">
         <RssFeed className="sidebarIcon"/>
         <span className="sidebarListitemText">
          Feed
         </span>
          </li>

          <li className="sidebarListitem">
         <Chat className="sidebarIcon"/>
         <span className="sidebarListitemText">
          Chats
         </span>
          </li>

          <li className="sidebarListitem">
         <PlayCircle className="sidebarIcon"/>
         <span className="sidebarListitemText">
          Video
         </span>
          </li>

          <li className="sidebarListitem">
         <Groups className="sidebarIcon"/>
         <span className="sidebarListitemText">
          Groups
         </span>
          </li>

          <li className="sidebarListitem">
         <Bookmarks className="sidebarIcon"/>
         <span className="sidebarListitemText">
          Bookmarks
         </span>
          </li>

          <li className="sidebarListitem">
         <Help className="sidebarIcon"/>
         <span className="sidebarListitemText">
          Help
         </span>
          </li>

          <li className="sidebarListitem">
         <Work className="sidebarIcon"/>
         <span className="sidebarListitemText">
          Jobs
         </span>
          </li>

          <li className="sidebarListitem">
         <Event className="sidebarIcon"/>
         <span className="sidebarListitemText">
          Events
         </span>
          </li>

          <li className="sidebarListitem">
         <School className="sidebarIcon"/>
         <span className="sidebarListitemText">
          Courses
         </span>
          </li>


        </ul>
        <button className="sidebarButton">Show More</button>
        <hr classname="sidebarHr"/>
        <ul className="sidebarFriendList">
         
       {Users.map(u=>(
        <CloseFriend key={u.id} user={u}/>
       ))}


        </ul>
      </div>
    </div>
  )
}

export default Sidebar
