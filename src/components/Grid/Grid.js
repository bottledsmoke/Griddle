import React, { Component, PropTypes } from 'react';

export default class Grid extends Component {
  render() {
    const { width, lead, active } = this.props;
    let verticalDivs;
    let horizontalDivs;

    if (active) {
      const documentHeight = document.documentElement.offsetHeight;
      const horizScale = Math.ceil(documentHeight / (width / lead));

      verticalDivs = [...Array(lead)].map((div, i) =>
        <div
          key={`v_div-${i + Math.random(100)}`}
          style={{
            height: documentHeight,
            width: `${width / lead}px`,
            border: '1px solid #ccc',
            position: 'absolute',
            top: 0,
            left: `${(width / lead) * i}px`
          }}
        >
        </div>
      );

      horizontalDivs = [...Array(horizScale)].map((div, i) =>
        <div
          key={`h_div-${i + Math.random(100)}`}
          style={{
            height: `${width / lead}px`,
            width,
            border: '1px solid #ccc',
            position: 'absolute',
            top: `${(width / lead) * i}px`,
            left: 0,
          }}
        >
        </div>
      );
    }

    return (
      <div>
        <div id="VerticalLines">
          {verticalDivs}
        </div>
        <div id="HorizontalLines">
          {horizontalDivs}
        </div>
      </div>
    );
  }
}

Grid.propTypes = {
  width: PropTypes.number.isRequired,
  lead: PropTypes.number.isRequired,
  active: PropTypes.bool.isRequired
};
