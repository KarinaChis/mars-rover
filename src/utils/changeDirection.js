export function changeDirection(courseIndex, direction) {
  const minIndex = 0;
  const maxIndex = 3;

  const changeIndex = () => {
    switch (direction) {
      case "L":
        return courseIndex === minIndex ? maxIndex : --courseIndex;
      case "R":
        return courseIndex === maxIndex ? minIndex : ++courseIndex;
      default:
        return undefined;
    }
  };

  const index = changeIndex();

  return (index >= minIndex) & (index <= maxIndex) ? index : undefined;
}
