import React from 'react';

const Header = ({ card, update, setState }) => {
  const handleTitleBlur = (e) => update({ ...card, title: e.target.value });
  const handleTitleChange = ({ target: value }) => setState({ ...card, title: value });

  return (
    <header>
      <i className="card-icon icon .close-modal" />
      <textarea
        className="list-title"
        style={{ height: '45px' }}
        defaultValue={card.title}
        onChange={handleTitleChange}
        onBlur={handleTitleBlur}
      />
      <p>
        in list
        {' '}
        <a className="link">Stuff to try (this is a list)</a>
        <i className="sub-icon sm-icon" />
      </p>
    </header>
  );
};

export default Header;
