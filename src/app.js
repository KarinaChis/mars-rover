import { changeDirection } from "../src/utils/changeDirection.js";
import { changePosition } from "../src/utils/changePosition.js";

export function move(plateauCoordinates, roverCoordinates, path) {
  const maxX = plateauCoordinates.split(" ")[0];
  const maxY = plateauCoordinates.split(" ")[1];
  const x = roverCoordinates.split(" ")[0];
  const y = roverCoordinates.split(" ")[1];
  let coordinates = [x, y];
  let course = roverCoordinates.split(" ")[2];
  const coursesArray = ["N", "E", "S", "W"];

  path.split("").forEach((element) => {
    switch (element) {
      case "L":
      case "R":
        {
          const currentCourseIndex = coursesArray.findIndex((item) => item === course);
          const updateCourseIndex = changeDirection(currentCourseIndex, element);
          course = coursesArray[updateCourseIndex];
        }
        break;
      case "M":
        {
          coordinates = coordinates && changePosition(coordinates, course, maxX, maxY);
        }
        break;
      default: {
        coordinates = undefined;
        course = undefined;
      }
    }
  });

  return coordinates && course
    ? `${coordinates[0]} ${coordinates[1]} ${course}`
    : "Sorry, you enter the wrong values";
}

console.log(move("5 5", "1 2 N", "LMLMLMLMM"));
