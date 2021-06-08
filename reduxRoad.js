/*
In this project you will build an adventure game using reducers, state, and actions. 
The state will represent, well, the state of the game. It contains the player’s inventory, distance travelled, and time on the road. 
Each event in the game is represented as an action. 
Players can gather supplies, travel, and–if they play risky–sometimes tip over the wagon carrying their supplies.
*/

const initialWagonState = {
    // initial state of the wagon

    // initial supplies.
    supplies: 100,
    // distance travelled by wagon
    distance: 0, 
    // days travelled.
    days: 0
}

const reducer = (state=initialWagonState, action) => {
    // reducer with initial state set to initialWagon state if none is provided
    switch(action.type){
        case 'gather': {
            // gather supplies , supplies +15, days +1, distance +0
            return {
                ...state, 
                supplies: state.supplies+15, // don't use +=
                days: state.days+1
            }
        }

        case 'travel': {
            // can travel for any number of days, supplies down 20 per day travelled, distance up 10 per day travlled , days up by days travelled
            return  {
                supplies : state.supplies - action.payload * 20,
                distance : state.disance + action.payload * 10,
                days : state.days + action.payload
            }
        }

        case 'tippedWagon' : {
            // if wagon is tipped, spend 30 supplies and one day to fix, no distance travelled meantime
            return {
                ...state,
                supplies: state.supplies - 30,
                days: state.days + 1
            }
        }

        default: {
            return state; 
        }
    }
}

// events are modelled with actions
const gatherSupplies = {
    type: 'gather',
}

// variable factors defined in actions. rates defined in switch statement. 
const travel = {
    type:'travel',
    payload: 1
}

const tippedWagon = {
    type: 'tippedWagon',
} 

// start the game with undefined state and empty action object 

let wagon = reducer(undefined,{})
console.log(wagon);

// first day is travelling, call reducer with action travel and payload: 1

wagon=reducer(wagon, travel);
console.log(wagon);
