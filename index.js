// Code your solution in this file!


function distanceFromHqInBlocks(block) {
  let result
  if (block >= 42) {
    result = block - 42;
  } else {
    result = 42 - block;
  }
  return result;
}

distanceFromHqInBlocks()


function distanceFromHqInFeet(block) {
  let result = distanceFromHqInBlocks(block) * 264;
  return result;
}

distanceFromHqInFeet()


function distanceTravelledInFeet(start, end) {
  let result; 
  if (start > end) {
    result = (start - end) * 264; 
  } else {
    result = (end - start) * 264;
  }
  return result;
}

distanceTravelledInFeet()


function calculatesFarePrice() {
  
}

calculatesFarePrice()
