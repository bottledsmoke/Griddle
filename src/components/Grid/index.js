import React, { Component, PropTypes } from 'react';
import parseKey from 'parse-key';
import GridLines from './Grid';
import Controls from './Controls';
import './Grid.styl';

export default class Grid extends Component {
  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.state = {
      controlsVisible: false,
      gridActive: true,
    };
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  conponentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown(e) {
    // Ignore regular keys when focused on a field
    // and no modifiers are active.
    if ((
      !e.ctrlKey && !e.metaKey && !e.altKey
    ) && (
      e.target.tagName === 'INPUT' ||
      e.target.tagName === 'SELECT' ||
      e.target.tagName === 'TEXTAREA' ||
      e.target.isContentEditable
    )) {
      return;
    }

    const visibilityKey = parseKey('ctrl-alt-g');
    const toggleGridKey = parseKey('ctrl-g');

    if (this.matchesKey(visibilityKey, e)) {
      e.preventDefault();
      this.hideControls();
    }

    if (this.matchesKey(toggleGridKey, e)) {
      e.preventDefault();
      this.toggleGrid();
    }
  }

  matchesKey(key, event) {
    if (!key) { return false; }

    const charCode = event.keyCode || event.which;
    const char = String.fromCharCode(charCode);
    return key.name.toUpperCase() === char.toUpperCase() &&
      key.alt === event.altKey &&
      key.ctrl === event.ctrlKey &&
      key.meta === event.metaKey &&
      key.shift === event.shiftKey;
  }

  toggleGrid() {
    this.setState({
      ...this.state,
      gridActive: !this.state.gridActive
    });
  }

  hideControls() {
    this.setState({
      ...this.state,
      controlsVisible: !this.state.controlsVisible
    });
  }

  render() {
    const width = this.props.width || 980;
    const lead = this.props.lead || 35;

    const containerStyles = {
      position: 'absolute',
      height: '100%',
      width: '100%',
      top: 0,
      left: 0,
      zIndex: -999
    };

    return (
      <div style={containerStyles}>
        <Controls
          gridActive={this.state.gridActive}
          visible={this.state.controlsVisible}
          toggleGrid={() => this.toggleGrid()}
        />
        <GridLines active={this.state.gridActive} width={width} lead={lead} />
      </div>
    );
  }
}

Grid.propTypes = {
  width: PropTypes.number,
  lead: PropTypes.number
};

// componentDidMount() {
//   const max_width = 1280;
//   const min_width = 320;
//   this.scale = this.makeTypographicScale(max_width, min_width);
// }

// makeTypographicScale(start, end) {
//   var current = start;
//   var result = {};
//   const divisors = [23, 35, 47,	59,	71,	83,	95];
//   result.fullList = [];
//
//   divisors.map((value) => {
//     result[value] = [];
//   })
//
//   while (current >= end) {
//
//     divisors.map((divisor) => {
//       const gutter_width = current / divisor
//       if (Number.isInteger(gutter_width)) {
//         result[divisor].push({pageWidth: current, gutterWidth: gutter_width});
//         result.fullList.push(current + ', div: ' + divisor + ', gutter: ' + gutter_width);
//       }
//     });
//
//     current--;
//   }
//
//   console.log(result);
//   return result;
// }
