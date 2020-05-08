//actions are objects that have the type and payload properties
const INITIAL_STATE = {
    currentUser: null
}
//above we set the default state as we would normally do in class component
const userReducer = (state = INITIAL_STATE, action) =>{
//if state is ever underfined it will use the INITIAL_STATE even if the default value is null
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.payload
            }

        //if the action type is one that relates to this state we will return a new object that will be the new state
        //we always spread the state with ... because we only want to modify the values that we care about
        //otherwise by default we will return the state in other words it will not change the state
        default:
            return state;
    }

}
export default userReducer;