export const cellBorderColor = "#B5C4CA";
export const cellBorderStyle = `1px solid ${cellBorderColor}`;
export const cellBorderStyleX = {
  borderRight: cellBorderStyle,
  borderLeft: cellBorderStyle,
};
export const cellBorderStyleY = {
  borderTop: cellBorderStyle,
  borderBottom: cellBorderStyle,
};

export const cellBorderStyleAll = {
  ...cellBorderStyleX,
  ...cellBorderStyleY,
};

export const cellBorderStyleFooter = {
  ...cellBorderStyleX,
  ...cellBorderStyleY,
  borderBottom: 0,
};
