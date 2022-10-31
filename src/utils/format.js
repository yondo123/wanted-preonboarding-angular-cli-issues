export const formatTime = (time) => {
  const numeric = time.replace(/[^0-9]/g, '');
  return `${numeric.substr(0, 4)}년${numeric.substr(4, 2)}월${numeric.substr(6, 2)}일 ${numeric.substr(
    8,
    2
  )}:${numeric.substr(10, 2)}`;
};
