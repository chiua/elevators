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
    //algorithtm to pick the right elevator
    //1. is unoccupied on this floor
    //2. is occupied passing this floor and going in the same direction
    //3. pick the closes unoccupied elevator

    //add stop for that elevator
    //returns to the customer the elevator number that they picked
  },
}
