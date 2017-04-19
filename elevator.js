var elevator = {
  currentFloor: 0,
  stops : [], //these are scheduled stops needed to go to, until this elevator is unoccupied
  mileage : 0, //how many floors it has passed since service
  trips : 0, //how many trips it has done since service
  maximumTrips : 100, //how many trips before needing service
  isOccupied : false,
  direction : 1, //1 is for going up, and 0 is for going down
  serviceNeeded : false

}

elevator.prototype.takeRequest = function(destinationFloor){
  //add a scheduled stop to the array
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
  }
};

elevator.prototype.sendFloor = function(){
  //send floor to the management system for reporting
}

elevator.prototype.sendOpenDoor = function(){
  //send open door to the management system for reporting
}

elevator.prototype.sendCloseDoor = function(){
  //send close door to the management system for reporting

}

elevator.prototype.sendServiceRequest = function(){
  //mark this elevator as needing service, send data to the elevator managment system
  this.serviceNeeded = true;
}

elevator.prototype.sendTripEnded = function(){
  //when the trip has ended this means that the elevator is now unoccupied
  //clear the timeout to move floors...it's ended...
  trips++;
  if (trips >= maximumTrips){
    this.sendServiceRequest();
  }
}

elevator.prototype.moveFloor = function(){
  //add a setTimeout to move between floors until all floors have been hit
  window.setTimeout((function(){
    //we have already vetted that the stops are within the bounds of the floors in the building when we take in the request
    if (direction){
      //going up
      currentFloor++;
    }else {
      //going down
      currentFloor --;
    }

    //clear out the stop if the floor is in one of the stops...then open the door
    var isStop = stops.map(function(stop){
      return stop === currentFloor;
    });

    //if it's a stop...clear the timeout (stop the moving elevator),..and then open and close the door..
    //afterwards start the the elevator moving again once the doors are closed (and only if there is more stops...otherwise
   //call the sendTrip ended)

    this.sendFloor(currentFloor);
    //add or decreent the currentFloor

  }).bind(this), 1000); //using 1 second as travel time between floors
}
