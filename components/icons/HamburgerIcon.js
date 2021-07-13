import React from 'react';

const HamburgerIcon = ({ iconHeight, iconWidth, rectHeight, fillColor }) => {
  return (
    <svg
      viewBox="0 0 80 80"
      width={iconWidth}
      height={iconHeight}
      fill={fillColor}
    >
      <rect y="1" width="100" height={rectHeight}></rect>
      <rect y="27" width="100" height={rectHeight}></rect>
      <rect y="54" width="100" height={rectHeight}></rect>
    </svg>
  );
};

export default HamburgerIcon;
