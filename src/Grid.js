import React, { Component } from 'react';

export default class Grid extends Component {  
  render() {
    const width = 980;
    const lead = 35;
    const documentHeight = document.documentElement.offsetHeight;
    const horizScale = Math.ceil(documentHeight / (width / lead));

    const vertDivs = [...Array(lead)].map((div, i) =>
      <div
        key={`v_div-${i + Math.random(100)}`}
        style={{
          height: '100%',
          width: `${width / lead}px`,
          border: '1px solid #ccc',
          position: 'absolute',
          top: 0,
          left: `${(width / lead) * i}px`
        }}
      >
      </div>
    );

    const horizDivs = [...Array(horizScale)].map((div, i) =>
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

    return (
      <div
        style={{
          position: 'absolute',
          height: '102.7%',
          width: '100%',
          zIndex: -999
        }}
      >
        {vertDivs}
        {horizDivs}
      </div>
    );
  }

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
}
