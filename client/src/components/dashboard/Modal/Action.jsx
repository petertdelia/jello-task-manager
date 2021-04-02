import React from 'react';

const Action = ({ text }) => (
  <li>
    <div className="member-container">
      <div className="card-member small-size">VR</div>
    </div>
    <p>
      <span className="member-name">Victor Reyes</span>
      {' '}
      {text}
      <small>yesterday at 4:53 PM</small>
    </p>
  </li>
);

export default Action;
