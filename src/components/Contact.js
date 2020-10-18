import React from 'react';
import './Contact.css';
// import PropTypes from 'prop-types';

// Contact.propTypes = {
//   userName : PropTypes.string.isRequired,
//   userAvatar : PropTypes.string.isRequired,
//   online : PropTypes.bool.isRequired
// };

// const userName = 'Peter Holt';
// const userAvatar = "https://randomuser.me/api/portraits/men/4.jpg";
// const online = true;
// const statusOnline = true;

function Contact(props) {
  return (
    <div className="Contact">
      <img className="avatar" src={props.avatar} alt={props.name} />
      <div className="name">{props.name}
      <div className="status">
        <div className={props.online?"status-online":"status-offline"}></div><span className="status-text">{props.online?"online": "offline"}</span>
        </div></div>
    </div>
  );
}


export default Contact;