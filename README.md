# elevators
elevator management system

Primary design

elevator management system
- initialize this with number of elevators and number of floors
- this controller keeps a track of all the elevators, the characteristics it keeps
  - floors
  - collection of elevators
-listens to elevator
  - current floor event
  - opening or closing of doors - related to clearing my stops
- take in floor requests from customers (current floor)
-Sends actions
  - adds request for stops/destinations to elevators

Elevator (try to make these as dumb as possible, just keep state)
  - keeps a track of the stops it needs to hit
  - keeps a track of the trips it has made
  - keeps a track of the number of floors it has passed
  - occupied/unoccupied
  - current floor
  - stops
  - moving down or moving up
  - service needed
- listens to Elevator management system
  - gets the stops that it needs to hit
- Sends actions
  - current floor event
  - opening or closing doors
  - service needed
  - trip ended, unoccupied elevator
