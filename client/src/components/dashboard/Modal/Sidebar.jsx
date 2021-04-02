import React, { useState } from 'react';

const Sidebar = ({ card, updateCard, popoverTypeUpdater }) => {
  const [isArchived, setIsArchived] = useState(card.archived || false);

  const handleToggleArchive = (toArchive) => {
    updateCard({ ...card, archived: toArchive });
    setIsArchived(toArchive);
  };

  return (
    <aside className="modal-buttons">
      <h2>Add</h2>
      <ul>
        <li className="member-button">
          <i className="person-icon sm-icon" />
          Members
        </li>
        <li className="label-button" data-popovertype="labels" onClick={popoverTypeUpdater}>
          <i className="label-icon sm-icon" />
          Labels
        </li>
        <li className="checklist-button">
          <i className="checklist-icon sm-icon" />
          Checklist
        </li>
        <li className="date-button" data-popovertype="dueDate" onClick={popoverTypeUpdater}>
          <i className="clock-icon sm-icon" />
          Due Date
        </li>
        <li className="attachment-button not-implemented">
          <i className="attachment-icon sm-icon" />
          Attachment
        </li>
      </ul>
      <h2>Actions</h2>
      <ul>
        <li className="move-button" data-popovertype="move" onClick={popoverTypeUpdater}>
          <i className="forward-icon sm-icon" />
          Move
        </li>
        <li className="copy-button">
          <i className="card-icon sm-icon" />
          Copy
        </li>
        <li className="subscribe-button">
          <i className="sub-icon sm-icon" />
          Subscribe
          <i className="check-icon sm-icon" />
        </li>
        <hr />

        {!isArchived ? (
          <li
            className="archive-button"
            onClick={() => handleToggleArchive(true)}
          >
            <i className="file-icon sm-icon " />
            Archive
          </li>
        ) : (
          <>
            <li
              className="unarchive-button"
              onClick={() => handleToggleArchive(false)}
            >
              <i className="send-icon sm-icon" />
              Send to board
            </li>
            <li className="red-button">
              <i className="minus-icon sm-icon" />
              Delete
            </li>
          </>
        )}
      </ul>
      <ul className="light-list">
        <li className="not-implemented">Share and more...</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
