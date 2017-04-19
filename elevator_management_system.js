var elevatorManagementSystem = {
  init : function(options){
    //instantiate the building with how many elevators and floors it has
    this.floors : options.floorCount;
    for (i=0; i < options.elevatorCount.length; i++ ){
      this.elevators.push(new Elevator());    }
  },
  floors : 0,
  elevators : [],
  getElevatorRequest : function(currentFloor, desiredFloor){
    if (desiredFloor > this.floors || desiredFloor < 1){
      console.log("Your trying to go to a floor that doesn't exist, pick something else");
      return;
    }

    //algorithtm to pick the right elevator
    //1. is unoccupied on this floor
    //2. is occupied passing this floor and going in the same direction
    //3. pick the closes unoccupied elevator

    //after picking the right elevator, add a stop for that desired elevator
    //returns to the customer the elevator number that they picked
    return elevatorNumber;
  },
}
