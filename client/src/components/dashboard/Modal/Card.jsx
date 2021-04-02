import React, { useEffect, useState, useRef } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchCard,
  updateCard,
} from '../../../actions/CardsActions';

import Sidebar from './Sidebar';
import CommentsActivities from './CommentsActivities';
import DescriptionForm from './DescriptionForm';
import PopoverContainer from './PopoverContainer';
import Labels from './Labels';
import CommentForm from './CommentForm';
import Header from './Header';
import DueDate from './DueDate';

export default () => {
  const focusEl = useRef(null);
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const card = useSelector((state) => state.cards).find(
    (found) => found._id === id,
  );

  const [state, setState] = useState({});
  const [popoverType, setPopoverType] = useState(null);
  const [popoverLocation, setPopoverLocation] = useState(null);

  const handleExitModal = () => history.push(`/boards/${card.boardId}`);
  const handleEscKeyPress = (e) => {
    if (e.key === 'Escape') handleExitModal();
  };

  const update = (_card) => {
    dispatch(updateCard(_card));
    setState(_card);
  };

  const handleAddPopover = (e) => {
    setPopoverType(e.target.dataset.popovertype);
    setPopoverLocation(e.target);
  };

  const onPopoverClose = () => {
    setPopoverType(null);
    setPopoverLocation(null);
  };

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    card ? setState(card) : dispatch(fetchCard(id));
    // TODO do not fetch comment data on board page, populate comment data here
    focusEl.current?.focus();
  }, [dispatch, id, card]);

  if (!card) {
    return null;
  }

  return (
    <div
      id="modal-container"
      onKeyDown={handleEscKeyPress}
      tabIndex="-1"
      ref={focusEl}
    >
      <div className="screen" onClick={handleExitModal} />
      <div id="modal">
        <i className="x-icon icon close-modal" onClick={handleExitModal} />
        <Header
          card={state}
          update={update}
          setState={setState}
        />

        <section className="modal-main">
          <ul className="modal-outer-list">
            <li className="details-section">
              <ul className="modal-details-list">
                <Labels
                  card={card}
                  handleAddPopover={handleAddPopover}
                />

                <DueDate
                  card={state}
                  update={update}
                />
              </ul>
              <DescriptionForm
                card={state}
                updateCard={update}
                setCardState={setState}
              />
            </li>
            <CommentForm card={card} />
            <CommentsActivities card={card} />
          </ul>
        </section>
        <Sidebar
          card={card}
          updateCard={update}
          popoverTypeUpdater={handleAddPopover}
          onPopoverClose={onPopoverClose}
        />
      </div>
      <PopoverContainer
        card={card}
        updateCard={update}
        popoverType={popoverType}
        attachedTo={popoverLocation}
        onPopoverClose={onPopoverClose}
      />
    </div>
  );
};
