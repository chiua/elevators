# elevators
elevator management system

Primary design, I will focus on how I divide the resonsiblities of each object and if I have time implement some of the logic that is needed.  My priority is to think through the system and not actually creating the app since the time deadline is short.  Two types of entities here,...an "Elevator managment system" ( controller ) and "Elevators".  I outline below the responsibilities of each. Also this documentation might get stale so refer to the code for anything that i forgot to put back in here.

elevator management system (they get requests, and dispatch those requested elevator stops to the correct elevator), the job of it is to pick the right elevator.  
Also another part of this Elevator management system is to log/report on open/closing doors, what floor an elevator is at, etc
- initialize this with number of elevators and number of floors
- this controller keeps a track of all the elevators, the characteristics it keeps
  - floors
  - collection of elevators
-listens to elevator
  - current floor event - just logs the current floor, keep it in the management system because it is a central place for reporting
  - opening or closing of doors - related to clearing my stops - just logs the opening or closing and maybe a timestamp.
- take in floor requests from customers (current floor) and has algo to
  pick the right elevator for the customer. also denies for requests above or below it's bounds for floor (i.e. can't be -1 or above number of floors)
- adds request for stops/destinations to elevators

Elevator (these elevators are not that dumb(they keep more than state), they
get one or many stops and then take action to hit those stops) when there are no more stops...they stop moving and are unoccupied.
  - keeps a track of the stops it needs to hit
  - keeps a track of the trips it has made
  - keeps a track of the number of floors it has passed
  - occupied/unoccupied
  - current floor
  - stops/scheduled stops
  - moving down or moving up, this can be either calculated on each request or saved. (will calculate it once and then store it on the elevator object)
  - service needed
- listens to Elevator management system
  - gets the stops that it needs to hit
- Sends actions
  - current floor event
  - opening or closing doors
  - service needed
  - trip ended, unoccupied elevator
