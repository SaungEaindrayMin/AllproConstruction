import React from "react";

export const GradientIcon = ({ Icon, size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24">
    <defs>
      <linearGradient id="gradientStroke" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#1B4050" />
        <stop offset="100%" stopColor="#6BC1D3" />
      </linearGradient>
    </defs>
    <Icon stroke="url(#gradientStroke)" fill="none" />
  </svg>
);
