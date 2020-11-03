// function to get random number in a range
function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const chooseColors = () => {
  // color array
  let colorArray = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];

  // fill the fillArray with 10 different hex code combinations
  let fillArray = [];
  for (let i = 0; i < 10; i++) {
    // get 6 random numbers between 0 and 15
    let numArray = [];
    for (let i = 0; i < 6; i++) {
      numArray.push(randomInteger(0, 15));
    }

    // pick a combination of 6 random chars from the color array to make up a hex code
    let color = "";
    for (let i = 0; i < numArray.length; i++) {
      color = `${color}${colorArray[numArray[i]]}`;
    }
    fillArray.push(color);
  }

  return fillArray;
};

export default chooseColors;
