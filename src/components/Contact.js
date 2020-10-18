import React from 'react';
import "./Contact.css";


const userName = 'Peter Holt';
const userAvatar = "https://randomuser.me/api/portraits/men/4.jpg";
const userStatus = true;

function Contact() {
  return (
    <div className="Contact">
      <img className="avatar" src={userAvatar} />
      <div className="name">{userName}
      <div className="status"><div className="status-online"></div><span className="status-text">{userStatus?"online" : "offline"}</span>
        </div></div>
    </div>
  );
}


export default Contact;