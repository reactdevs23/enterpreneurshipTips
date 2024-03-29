import React from "react";

const Star = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0.00 0.00 281.00 281.00"
      width="100%"
      height="100%"
    >
      <path
        fill={color}
        d="
  M 177.79 155.21
  A 0.26 0.26 0.0 0 0 177.62 155.62
  L 238.36 237.78
  Q 239.02 238.66 238.13 238.01
  L 156.09 177.36
  A 0.35 0.34 23.1 0 0 155.54 177.58
  L 140.54 277.75
  Q 140.26 279.58 139.99 277.75
  L 124.99 177.70
  A 0.41 0.41 0.0 0 0 124.34 177.43
  L 42.31 238.07
  Q 41.48 238.68 42.09 237.86
  L 102.65 155.96
  Q 103.16 155.28 102.31 155.15
  L 2.25 140.16
  Q 0.58 139.91 2.25 139.66
  L 102.49 124.64
  A 0.41 0.40 -22.4 0 0 102.76 124.00
  L 42.51 42.51
  Q 41.50 41.14 42.86 42.15
  L 124.53 102.54
  A 0.25 0.25 0.0 0 0 124.92 102.38
  Q 132.22 54.45 139.41 5.37
  Q 139.76 3.00 140.35 1.03
  Q 140.37 0.97 140.38 1.04
  L 155.51 102.00
  Q 155.63 102.81 156.28 102.33
  L 238.38 41.62
  Q 239.03 41.14 238.55 41.79
  L 177.77 124.00
  A 0.41 0.40 22.4 0 0 178.04 124.64
  L 279.13 139.78
  Q 279.26 139.81 279.14 139.88
  Q 278.78 140.09 278.35 140.16
  Q 229.56 147.46 177.79 155.21
  Z"
      />
    </svg>
  );
};

export default Star;
