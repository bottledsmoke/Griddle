import React, { PropTypes } from 'react';
import Grid from './Grid';

Layout.propTypes = {
  children: PropTypes.object.isRequired
};

export default function Layout({ children }) {
  return (
    <div>
      <Grid />
      {children}
    </div>
  );
}
