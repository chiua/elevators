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
    
    //add stop for that elevator

  },
}
