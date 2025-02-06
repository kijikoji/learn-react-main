1. In what way are React components meant to be "pure functions"

given a initial seed it will generate the same result everytime that seed is used the same as squ(2) 2 being the seed will always return 4.
single responsibility for its self withought modifying others.

2. What is a "side effect" in React? What are some examples?

when something is updated it and makes another thing trigger based of it changing
interacting with local storage, api, other elements, databases
like if a button is toggled an you want that to trigger something else while not trigger in its negbor function

3. What is NOT a "side effect" in React? Examples?

anything react is in chare of
state, ui, rendering dom

4. When does React run your useEffect function? When does it NOT run
   the effect function?

as soon as it is initilized.
when an item in it's tail array chanfes

5. How would you explain what the "dependecies array" is?

it's an array that its state from moment to moment will determine
if the function should be run or not
