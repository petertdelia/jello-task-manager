import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Board = () => {
  const { id } = useParams();

  useEffect(() => {
    axios.get(`/api/boards/${id}`)
      .then(({ data }) => {
        let board = data.board;
        console.log(board)
      });
  });



  return (
    <>
      <main><div id="list-container" class="list-container"><div id="existing-lists" class="existing-lists"><div class="list-wrapper"><div class="list-background"><div class="list"><a class="more-icon sm-icon" href=""></a><div><p class="list-title">Stuff to try (this is a list)</p></div><div class="add-dropdown add-top"><div class="card"></div><a class="button">Add</a><i class="x-icon icon"></i><div class="add-options"><span>...</span></div></div><div id="cards-container" data-id="list-1-cards"><div class="card-background"><div class="card "><i class="edit-toggle edit-icon sm-icon"></i><div class="card-info"><div class="card-label green colorblindable"></div><div class="card-label yellow colorblindable"></div><div class="card-label red colorblindable"></div><div class="card-label orange colorblindable"></div><div class="card-label blue colorblindable"></div><div class="card-label purple colorblindable"></div><p>Cards do many cool things. Click on this card to open it and learn more...</p></div><div class="card-icons"><i class="clock-icon sm-icon overdue-recent completed">Aug 4</i><i class="description-icon sm-icon"></i><i class="comment-icon sm-icon"></i></div></div></div></div><div class="add-dropdown add-bottom"><div class="card"><div class="card-info"></div><textarea name="add-card"></textarea><div class="members"></div></div><a class="button">Add</a><i class="x-icon icon"></i><div class="add-options"><span>...</span></div></div><div class="add-card-toggle" data-position="bottom">Add a card...</div></div></div></div></div><div id="new-list" class="new-list"><span>Add a list...</span><input type="text" placeholder="Add a list..."><div><input type="submit" class="button" value="Save"><i class="x-icon icon"></i></div></div></div></main>
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
                <li className="power-icon menu-icon not-implemented">Power-Ups</li>
                <li className="stickers-icon menu-icon not-implemented">Stickers</li>
                <li className="more-icon menu-icon">More</li>
                <hr />
                <li className="activity-icon menu-icon not-implemented">Activity</li>
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
  )
}

export default Board;