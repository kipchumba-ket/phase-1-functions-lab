// Code your solution in this file!
let dist = 0;
let desDistance = 0;
function distanceFromHqInBlocks(block) {
  dist = Math.abs(42 - block);
  return dist;
}


function distanceFromHqInFeet(home) {
    let hh = distanceFromHqInBlocks(home);

    let f = 0;
    f = hh * 264;
    return f;
}


function distanceTravelledInFeet(start, destination) {
  desDistance = Math.abs(start - destination) * 264;
  return desDistance;
}


function calculatesFarePrice(start, destination) {
  let disBlock = Math.abs(start - destination) * 264;
  let fare = 0;
  let disPast400 = disBlock - 400;

  if (disBlock <= 400) {
    fare = 0;
  } else if (disBlock > 400 && disBlock < 2000) {
    fare = 0.02 * disPast400;
  } else if (disBlock > 2000 && disBlock < 2500) {
    fare = 25;
  } else {
    fare = "cannot travel that far";
  }
  return fare;
}