// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42;
    return Math.abs(pickupLocation - hqLocation);
  }


  function distanceFromHqInFeet(someValue) {
    let blocks = distanceFromHqInBlocks(someValue); // calling distanceFromHqInBlocks function to get the distance in blocks
    let feet = blocks * 264; // calculating the distance in feet
    return feet;
  }
    
  function distanceTravelledInFeet(start, destination) {
    const blocks = Math.abs(destination - start);
    const feet = blocks * 264;
    return feet;
  }

  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    
    if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }
  