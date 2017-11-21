// initial value for state={};
// in reducers we have a state and an action as parameters and we switch over the action.type case and by default return the state
export default function(state = {}, action) {
	switch (action.type) {
		default:
			return state;
	}
}
