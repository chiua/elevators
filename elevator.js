var elevator = {
  currentFloor: 0,
  stops : [], //these are floors needed to go to, until this elevator is unoccupied
  mileage : 0, //how many floors it has passed since service
  trips : 0, //how many trips it has done since service
  maximumTrips : 100 //how many trips before needing service
}

elevator.prototype.takeRequest = function(){

};

elevator.prototype.sendFloor = function(){
  //send floor to the management system;

}

elevator.prototype.sendOpenDoor = function(){

}

elevator.prototype.sendCloseDoor = function(){

}

elevator.prototype.sendServiceRequest = function(){

}

elevator.prototype.sendTripEnded = function(){
  //this means that the elevator is now unoccupied
}
