import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBoard } from '../../actions/BoardActions';
import ExistingLists from './ExistingLists';

const Board = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const board = useSelector((state) => state.boards).filter((found) => found._id === id)[0];

  useEffect(() => {
    if (!board) {
      dispatch(fetchBoard(id));
    }
  }, []);

  return (
    <>
      <header>
        <ul>
          <li id="title">My Title</li>
          <li className="star-icon icon" />
          <li className="private private-icon icon">Private</li>
        </ul>
        <div className="menu">
          <i className="more-icon sm-icon" />
          Show Menu
        </div>
        <div className="subscribed">
          <i className="sub-icon sm-icon" />
          Subscribed
        </div>
      </header>
      <main>
        <div id="list-container" className="list-container">
          <div id="existing-lists" className="existing-lists">
            <ExistingLists />
          </div>
          <div id="new-list" className="new-list">
            <span>Add a list...</span>
            <input type="text" placeholder="Add a list..." />
            <div>
              <input type="submit" className="button" value="Save" />
              <i className="x-icon icon" />
            </div>
          </div>
        </div>
      </main>
      <div className="menu-sidebar">
        <div id="menu-main" className="main slide">
          <i className="back-icon icon" />
          <i className="x-icon icon" />
          <h1>Menu</h1>
          <div className="menu-contents">
            <div className="members">
              <div className="member-container">
                <div className="card-member ">VR</div>
              </div>
              <div className="member-container">
                <div className="card-member admin">TP</div>
              </div>
              <div className="member-container">
                <div className="card-member ">KW</div>
              </div>
            </div>
            <div className="add-members">
              <i className="add-icon sm-icon" />
              Add Members...
            </div>
            <hr />
            <ul className="menu-list">
              <li className="background-item">Change Background</li>
              <li className="filter-icon menu-icon">Filter Cards</li>
              <li className="power-icon menu-icon not-implemented">
                Power-Ups
              </li>

              <li className="stickers-icon menu-icon not-implemented">
                Stickers
              </li>

              <li className="more-icon menu-icon">More</li>
              <hr />

              <li className="activity-icon menu-icon not-implemented">
                Activity
              </li>
            </ul>
            <ul className="activity-list">
              <li>
                <i className="member-icon" />
                <p>
                  <span className="member-name">Taylor Peat</span>
                  {' '}
                  changed the
                  background of this board
                  <small>yesterday at 4:53 PM</small>
                </p>
              </li>
              <li>
                <i className="member-icon" />
                <p>
                  <span className="member-name">Taylor Peat</span>
                  {' '}
                  sent
                  {' '}
                  <span className="link">
                    Use the + in the top menu to make your first board now.
                  </span>
                  {' '}
                  to the board
                  {' '}
                  <small>4 hours ago</small>
                </p>
              </li>
              <li>
                <i className="member-icon" />
                <p>
                  <span className="member-name">Taylor Peat</span>
                  {' '}
                  archived
                  {' '}
                  <span className="link">
                    Use the + in the top menu to make your first board now.
                  </span>
                  {' '}
                  <small>4 hours ago</small>
                </p>
              </li>
              <li>
                <i className="member-icon" />
                <p>
                  <span className="member-name">Taylor Peat</span>
                  {' '}
                  changed the
                  background of this board
                  <small>5 hours ago</small>
                </p>
              </li>
              <li>
                <i className="member-icon" />
                <p>
                  <span className="member-name">Taylor Peat</span>
                  {' '}
                  changed the
                  background of this board
                  <small>6 hours ago</small>
                </p>
              </li>
              <li>
                <i className="member-icon" />
                <p>
                  <span className="member-name">Taylor Peat</span>
                  {' '}
                  changed the
                  background of this board
                  <small>yesterday at 10:23 PM</small>
                </p>
              </li>
            </ul>
            <a className="all-activity not-implemented">View all activity...</a>
          </div>
        </div>
      </div>
      <div id="modal-container" />
      <div id="dropdown-container" />
    </>
  );
};

export default Board;
