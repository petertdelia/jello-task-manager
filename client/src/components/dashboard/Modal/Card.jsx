/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState, useRef } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCard, updateCard, createComment } from '../../../actions/CardsActions';
import Sidebar from './Sidebar';
import CommentsActivities from './CommentsActivities';
import DescriptionForm from './DescriptionForm';

export default () => {
  const focusEl = useRef(null);
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const card = useSelector((state) => state.cards).find((found) => found._id === id);
  const [state, setState] = useState({});
  const [newComment, setNewComment] = useState('');

  const handleTitleChange = ({ target: value }) => setState({ ...state, title: value });
  const handleExitModal = () => history.push(`/boards/${card.boardId}`);
  const handleEscKeyPress = (e) => {
    if (e.key === 'Escape') handleExitModal();
  };

  const handleSaveComment = () => {
    dispatch(createComment({ cardId: card._id, comment: { text: newComment } }));
  };

  const update = (_card) => {
    dispatch(updateCard(_card));
    setState(_card);
  };

  const handleTitleBlur = (e) => update({ ...card, title: e.target.value });

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    card ? setState(card) : dispatch(fetchCard(id));
    // TODO do not fetch comment data on board page, populate comment data here
    focusEl.current?.focus();
  }, [dispatch, id, card]);

  if (!card) { return null; }

  return (
    <div id="modal-container" onKeyDown={handleEscKeyPress} tabIndex="-1" ref={focusEl}>
      <div className="screen" onClick={handleExitModal} />
      <div id="modal">
        <i className="x-icon icon close-modal" onClick={handleExitModal} />
        <header>
          <i className="card-icon icon .close-modal" />
          <textarea className="list-title" style={{ height: '45px' }} defaultValue={state.title} onChange={handleTitleChange} onBlur={handleTitleBlur} />
          <p>
            in list
            {' '}
            <a className="link">Stuff to try (this is a list)</a>
            <i className="sub-icon sm-icon" />
          </p>
        </header>
        <section className="modal-main">
          <ul className="modal-outer-list">
            <li className="details-section">
              <ul className="modal-details-list">
                <li className="labels-section">
                  <h3>Labels</h3>
                  <div className="member-container">
                    <div className="green label colorblindable" />
                  </div>
                  <div className="member-container">
                    <div className="yellow label colorblindable" />
                  </div>
                  <div className="member-container">
                    <div className="orange label colorblindable" />
                  </div>
                  <div className="member-container">
                    <div className="blue label colorblindable" />
                  </div>
                  <div className="member-container">
                    <div className="purple label colorblindable" />
                  </div>
                  <div className="member-container">
                    <div className="red label colorblindable" />
                  </div>
                  <div className="member-container">
                    <i className="plus-icon sm-icon" />
                  </div>
                </li>
                <li className="due-date-section">
                  <h3>Due Date</h3>
                  <div id="dueDateDisplay" className="overdue completed">
                    <input
                      id="dueDateCheckbox"
                      type="checkbox"
                      className="checkbox"
                      defaultChecked=""
                    />
                    Aug 4 at 10:42 AM
                    {' '}
                    <span>(past due)</span>
                  </div>
                </li>
              </ul>
              <DescriptionForm card={state} updateCard={update} setCardState={setState} />
            </li>
            <li className="comment-section">
              <h2 className="comment-icon icon">Add Comment</h2>
              <div>
                <div className="member-container">
                  <div className="card-member">TP</div>
                </div>
                <div className="comment">
                  <label>
                    <textarea
                      required=""
                      rows="1"
                      placeholder="Write a comment..."
                      onChange={(e) => setNewComment(e.target.value)}
                    />
                    <div>
                      <a className="light-button card-icon sm-icon" />
                      <a className="light-button smiley-icon sm-icon" />
                      <a className="light-button email-icon sm-icon" />
                      <a className="light-button attachment-icon sm-icon" />
                    </div>
                    <div>
                      <input
                        type="submit"
                        className="button"
                        value="Save"
                        onClick={handleSaveComment}
                      />
                    </div>
                  </label>
                </div>
              </div>
            </li>
            <CommentsActivities card={card} />
          </ul>
        </section>
        <Sidebar card={card} updateCard={update} />
      </div>
    </div>
  );
};