var elevator = {
  currentFloor: 0,
  stops : [], //these are scheduled stops needed to go to, until this elevator is unoccupied
  mileage : 0, //how many floors it has passed since service
  trips : 0, //how many trips it has done since service
  maximumTrips : 100, //how many trips before needing service
  isOccupied : false,
  direction : 1, //1 is for going up, and 0 is for going down
  serviceNeeded : false,
  moving : null, //this is to hold current the moving timeout.
  doorOpen : false
}

elevator.prototype.takeRequest = function(customerFloor, destinationFloor){
  //add a scheduled stop to the array for pickup and delivery of customer
  stops.push(customerFloor);
  stops.push(destinationFloor);
  //if elevator is not moving (is not Occupied) then start the floor movement
  if (!isOccupied){
    //set the direction of this now moving elevator
    if (destinationFloor > currentFloor){
      this.direction = 1;
    }else {
      this.direction = 0;
    }
    this.moveFloor();
    this.isOccupied = true;
  }
};

elevator.prototype.sendFloor = function(){
  //send floor to the management system for reporting
  //call some static method in the elevator management system to report
  //will need to build that part out later
}

elevator.prototype.sendOpenDoor = function(floor){
  //send open door to the management system for reporting
  this.doorOpen = true;
  setTimeout((function(){
      this.sendCloseDoor();
  }).bind(this), 2000); //give the people enough time to get out...2 seconds
}

elevator.prototype.sendCloseDoor = function(){
  //send close door to the management system for reporting
  //afterwards start the the elevator moving again once the doors are closed (and only if there is more stops...otherwise
  //call the sendTrip ended)
  this.doorOpen = false;
  if (stops.length){
    this.moveFloor();
  }else {
    //if no more stops...the trip has ended
    this.sendTripEnded();
  }
}

elevator.prototype.sendServiceRequest = function(){
  //mark this elevator as needing service, send data to the elevator managment system
  this.serviceNeeded = true;
}

elevator.prototype.sendTripEnded = function(){
  //when the trip has ended this means that the elevator is now unoccupied
  //clear the timeout to move floors...it's ended...
  this.isOccupied = false;
  trips++;
  if (trips >= maximumTrips){
    this.sendServiceRequest();
  }
}

elevator.prototype.moveFloor = function(){
  //add a setTimeout to move between floors until all floors have been hit
  this.moving = window.setTimeout((function(){
    //we have already vetted that the stops are within the bounds of the floors in the building when we take in the request
    if (direction){
      //going up
      currentFloor++;
    }else {
      //going down
      currentFloor --;
    }
    mileage++; //adding the mileage on this elevator...this isn't used for when to call service, but might be needed later.

    //clear out the stop if the floor is in one of the stops...then open the door
    var isStop = stops.map(function(stop, index){
      if (stop === currentFloor){
        //gives me the index so i know what to remove
        return index;
      }
    });

    //if the current floor is a stop...clear the timeout (stop the moving elevator),..and then open and close the door..
    //dont want some customers getting out in a moving elevator
    if (isStop.length){
      //clear out this stop, the customer is at the right place
      stops.splice(isStop[0], 1);
      //stop the moving elevator!!
      clearTimeout(this.moving);
      //and open the doors to let the passengers out
      this.sendOpenDoor(currentFloor);
    }


    this.sendFloor(currentFloor);

  }).bind(this), 1000); //using 1 second as travel time between floors
}

export default elevator;
