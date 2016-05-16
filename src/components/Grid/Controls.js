import React, { PropTypes } from 'react';

export default function Controls(props) {
  const { gridActive, toggleGrid, visible } = props;
  const gridActiveText = gridActive ? 'On' : 'Off';

  const styles = {
    display: visible ? 'block' : 'none'
  };

  return (
    <div style={styles} className="_grid_controls">
      <h3 className="_grid_controls_header">Grid Controls</h3>
      <button
        className="_grid_button _grid_button_on_off"
        onClick={() => toggleGrid()}
      >
        {gridActiveText}
      </button>
      <button className="_grid_button _grid_button_refresh">R</button>
    </div>
  );
}

Controls.propTypes = {
  gridActive: PropTypes.bool.isRequired,
  toggleGrid: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired
};
