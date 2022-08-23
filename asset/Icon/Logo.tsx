import React from "react";

interface IIcon {
  height?: number;
  width?: number;
}
function LogoIcon(props: IIcon) {
  const { height, width } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 115 30"
    >
      <path
        fill="#fff"
        d="M64.76 29.28H49.08L40.16 7.36h-3.4l-8.92 21.92h-15.8L0 .72h9.72l8.84 21.76H22L30.84.72h15.24l8.84 21.76h3.44L67.2.72h9.6L64.76 29.28zM79.893.72h7.88l9.36 18.84 9.36-18.84h7.88v28.56h-7.36V14.04l-7.56 15.24h-4.88l-7.56-15.24v15.24h-7.12V.72z"
      ></path>
    </svg>
  );
}

LogoIcon.defaultProps = {
  height: 28,
  width: 114
};

export default LogoIcon;
