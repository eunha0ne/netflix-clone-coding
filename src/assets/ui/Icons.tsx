import React from 'react';

interface IconProps {
  width?: string;
  height?: string;
}

export const ArrowLeft = ({ width = '1em', height = '1em' }: IconProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 16 16"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M9.224 1.553a.5.5 0 01.223.67L6.56 8l2.888 5.776a.5.5 0 11-.894.448l-3-6a.5.5 0 010-.448l3-6a.5.5 0 01.67-.223z"
      clipRule="evenodd"
    />
  </svg>
);

export const ArrowRight = ({ width = '1em', height = '1em' }: IconProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 16 16"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M6.776 1.553a.5.5 0 01.671.223l3 6a.5.5 0 010 .448l-3 6a.5.5 0 11-.894-.448L9.44 8 6.553 2.224a.5.5 0 01.223-.671z"
      clipRule="evenodd"
    />
  </svg>
);

export const InfoCircle = ({ width = '1em', height = '1em' }: IconProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 16 16"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z"
      clipRule="evenodd"
    />
    <path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588z" />
    <circle cx="8" cy="4.5" r="1" />
  </svg>
);

export const Plus = ({ width = '1em', height = '1em' }: IconProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 16 16"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M8 3.5a.5.5 0 01.5.5v4a.5.5 0 01-.5.5H4a.5.5 0 010-1h3.5V4a.5.5 0 01.5-.5z"
      clipRule="evenodd"
    />
    <path
      fillRule="evenodd"
      d="M7.5 8a.5.5 0 01.5-.5h4a.5.5 0 010 1H8.5V12a.5.5 0 01-1 0V8z"
      clipRule="evenodd"
    />
  </svg>
);

export const IconX = ({ width = '1em', height = '1em' }: IconProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 16 16"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M11.854 4.146a.5.5 0 010 .708l-7 7a.5.5 0 01-.708-.708l7-7a.5.5 0 01.708 0z"
      clipRule="evenodd"
    />
    <path
      fillRule="evenodd"
      d="M4.146 4.146a.5.5 0 000 .708l7 7a.5.5 0 00.708-.708l-7-7a.5.5 0 00-.708 0z"
      clipRule="evenodd"
    />
  </svg>
);

export const Search = ({ width = '1em', height = '1em' }: IconProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 16 16"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M10.442 10.442a1 1 0 011.415 0l3.85 3.85a1 1 0 01-1.414 1.415l-3.85-3.85a1 1 0 010-1.415z"
      clipRule="evenodd"
    />
    <path
      fillRule="evenodd"
      d="M6.5 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM13 6.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"
      clipRule="evenodd"
    />
  </svg>
);
