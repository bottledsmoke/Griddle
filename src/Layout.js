import React from 'react';
import Grid from './Grid';

export default function Layout({ children }) {
  return (
    <div>
      <Grid />
      {children}
    </div>
  )
}
