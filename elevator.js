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
  //add a setTimeout to move between floors until all floors have been hit
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

}

elevator.prototype.sendTripEnded = function(){
  //this means that the elevator is now unoccupied
  //clear the timeout to move floors...it's ended...
}

elevator.prototype.moveFloor = function(){
  window.setTimeout((function(){

  }).bind(this), )
}
