import React from 'react';
import PropTypes from 'prop-types';

export default function LinkCard({ link }) {
  return (
    <>
      <h2>Link </h2>
      <p>
        Your link:
        {' '}
        <a href={link.to} target="_blank" rel="noopener noreferrer">{link.to}</a>
      </p>
      <p>
        From:
        {' '}
        <a href={link.from} target="_blank" rel="noopener noreferrer">{link.from}</a>
      </p>
      <p>
        Clicks Count:
        {' '}
        <strong>{link.clicks}</strong>
      </p>
      <p>
        Created at:
        {' '}
        <strong>{new Date(link.date).toLocaleDateString()}</strong>
      </p>
    </>
  );
}

LinkCard.propTypes = {
  link: PropTypes.objectOf(PropTypes.any).isRequired,
};
