/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function LinksList({ links }) {
  if (!links.length) {
    return <p className="center">There are no links yet...</p>;
  }
  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Original link</th>
          <th>Shortened Link</th>
          <th>Open</th>
        </tr>
      </thead>
      <tbody>
        {links.map((link, index) => (
          <tr key={link._id}>
            <td>{index + 1}</td>
            <td>{link.from}</td>
            <td>{link.to}</td>
            <td>
              <Link to={`/detail/${link._id}`}>Open</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

LinksList.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object).isRequired,
};
