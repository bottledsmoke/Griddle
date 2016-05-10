import React, { Component } from 'react';

const max_width = 1280;
const min_width = 320;

export default class Grid extends Component {
  makeTypographicScale(start, end) {
    var current = start;
    var result = {};
    const divisors = [23, 35, 47,	59,	71,	83,	95];

    divisors.map((value) => {
      result[value] = [];
    })

    while (current >= end) {

      divisors.map((divisor) => {
        const gutter_width = current / divisor
        if (Number.isInteger(gutter_width)) {
          result[divisor].push({pageWidth: current, gutterWidth: gutter_width});
        }
      });

      current--;
    }

    console.log(result);
    return result;
  }

  componentDidMount() {
    this.scale = this.makeTypographicScale(max_width, min_width);
  }

  render() {
    console.log(this.scale);
    return (
      <h1>GRIDSIES</h1>
    );
  }
}
