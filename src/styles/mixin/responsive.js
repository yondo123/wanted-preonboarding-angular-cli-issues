const breackPoints = {
  md: '768px',
  lg: '1200px',
};

const responsive = (screen) => {
  if (screen === 'md') {
    return `@media screen and (min-width: ${breackPoints.md})`;
  }

  if (screen === 'lg') {
    return `@media screen and (min-width: ${breackPoints.lg})`;
  }
};

export default responsive;
