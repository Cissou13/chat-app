import { render } from '@testing-library/react';
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

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      online: props.online,
    };
  }

  render() {
    return (
      <div className='Contact'>
        <img className='avatar' src={this.props.avatar} alt={this.props.name} />
        <div className='name'>
          {this.props.name}
          <div
            className='status'
            onClick={(event) => {
              const newStatus = !this.state.online;
              this.setState({ online: newStatus });
              console.log(this.state.online);
            }}
          >
            <div
              className={this.state.online ? 'status-online' : 'status-offline'}
            ></div>
            <span className='status-text'>
              {this.state.online ? 'online' : 'offline'}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
