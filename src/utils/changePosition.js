export function changePosition(position, course, maxX, maxY) {
  let x = position[0];
  let y = position[1];

  const changeCoordinates = () => {
    switch (course) {
      case "N":
        return y === maxY ? [x, maxY] : [x, ++y];
      case "S":
        return y === 0 ? [x, 0] : [x, --y];
      case "W":
        return x === 0 ? [0, y] : [--x, y];
      case "E":
        return x === maxX ? [maxX, y] : [++x, y];
      default:
        return undefined;
    }
  };

  return (y <= maxY) & (x <= maxX) ? changeCoordinates() : undefined;
}
