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
    days: 0, 
}

const reducer = (state=initialWagonState, action) => {
    // reducer with initial state set to initialWagon state if none is provided
    switch(action.type){
        case 'gather': {
            return {
                ...state, 
                supplies: state.supplies+15, // don't use +=
                days: state.days+1,
            }
        } 
        default: {
            return state; 
        }
    }
}

// events are modelled with actions
const gatherSupplies = {
    // gather supplies , supplies +=15, days +=1, distance +=0
    type: 'gather',
}