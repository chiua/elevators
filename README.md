# elevators
elevator management system

Primary design, I will focus on how I divide the resonsiblities of each object and if I have time implement some of the logic that is needed.  My priority is to think through the system and not actually creating the app since the time deadline is short.  Two types of entities here,...an "Elevator managment system" ( controller ) and "Elevators"

elevator management system (they get requests, and dispatch those requested elevator stops to the correct elevator), the job of it is to pick the right elevator. (their primary job is to handle scheduling appointments for the elevators).
Also another part of this Elevator management system is to log/report on open/closing doors, what floor an elevator is at, etc
- initialize this with number of elevators and number of floors
- the characteristics it keeps
  - floors
  - collection of elevators
- take in floor requests from customers (current floor) and has algo to
  pick the right elevator for the customer. also denies for requests above or below it's bounds for floor (i.e. can't be -1 or above number of floors)
- adds request for stops/destinations to elevators

Elevator (these elevators are not that dumb(they keep more than state), they
get one or many stops and then take action to hit those stops)
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



















##h4 Other notes
**Below are Older notes...this might not be applicable anymore...was taking notes in my nodepad and wanted to provided this so you can get an idea of my thought process.**

  Elevator App
Number of elevators and number of floors


Elevator
- Report to the controller on what floor it is currently on, this should also add a count to itself.
- After last stop…then this is unoccupied… report that to the controller, after the last stop..that is considered a trip
- How many trips it has made..100 it will stop functioning until service.  If need service then report to the scheduler
- Scheduler adds a stop to the list…
- Goes to each floor, if it’s a stop then open’s it’s doors and closes door
- Goes to next stop until last stop…and then reports to the controller it’s unoccupied
-


Elevator controller/scheduler
- Keeps a track of elevators,
    - unoccupied/occupied
    - Destination - clear this when the occupied opens it’s door
    - Current floor
- Also negate requests that are dumb,..going below the ground floor or going above the building
- Take a request for an elevator and chooses which elevator based on information, choosing the elevator it goes through this algorithm to figure out which elevator to choose.
    - Is unoccupied elevator on requested floor
    - if not, is any elevator moving?
    - Is current elevator moving, passing by floor
    - Which elevator is closest.that is moving
    - If no elevator is moving then we choose the nearest unoccupied.
    - Also direction of the elevator matters

Controller
- Is unoccupied on this floor? No //highest priority
- is occupied passing this floor? And going in the same direction (people will get angry if they move the other direction)…. So the current floor of the elevator is less or equal to 1 and it’s going above or equal to the requested floor.  //second highest priority
- none are occupied or passing the floor,..choose the nearest unoccupied one.


Use cases
4 Elevators
10 floors

Elevator A
- Floor 3
- Unoccupied/not moving
- Close door

Elevator B
- Floor 1
- Occupied/moving
- Stops at 5
- Moving up

Elevator C
-  Floor 6
- Occupied/moving
- Stops at 3
- Moving down

Elevator D
- Floor 3
- Occupied/moving
- Stops at 6
- Moving up

Request
- Current Floor 1
- Departure floor 6
- Pick which elevator to add a stop to
    - None unoccupied on this floor
    - Going up, elevator b and c
    - Elevator B passing by or on this floor
    - Add this stop for elevator B
    -

-Request
- Current Floor 4
- Departure Floor 2
- Pick which elevator
    - None unoccupied on this floor
    - Going down, elevator C
    - is being passed by, by elevator C
    - add this stop to C for pickup

Request
- Current floor 8
- Departure floor 1
- Pick which elevator
    - None unoccupied on this floor
    - Going down elevator C
    - Is being passed by? No
    - Nearest unoccupied, elevator A.
