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
    //for now will just iterate through the array of elevators to look for these conditions
    //later on we can have more lists like elevators_in_service so I can remember instead of
    //always checking
    
    //0. this needs to be a elevator in service.. check that first
    //1. is unoccupied on this floor
    //2. is occupied passing this floor and going in the same direction
    //3. pick the closes unoccupied elevator

    //after picking the right elevator, add a stop for that desired elevator
    //returns to the customer the elevator number that they picked
    return elevatorNumber;
  },
}
