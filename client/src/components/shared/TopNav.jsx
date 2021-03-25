import React from 'react';
import { Link } from 'react-router-dom';

const TopNav = () => (
  <nav>
    <ul>
      <li className="boards trello-icon icon">
        <Link to="/">Boards</Link>
      </li>
      <li className="search-container">
        <div className="search search-icon icon" />
        <div className="active-search">
          <div>
            <input type="text" />
          </div>
          <i className="x-icon icon" />
          <i className="goto-icon icon" />
        </div>
      </li>
    </ul>
    <h1>Trello</h1>
    <ul className="user-info">
      <li className="create-icon icon" />
      <li className="split-button-1">VR</li>
      <li className="split-button-2">Victor Reyes</li>
      <li className="info-icon icon" />
      <li className="notifications-icon icon" />
    </ul>
  </nav>
);

export default TopNav;
