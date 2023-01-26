import enteriesTypes from '../actions/entries.actions'

const reducer =  (state = initialEntries, action)=>{
  let newEntries;
  switch (action.type) {
    case enteriesTypes.POPULATE_ENTRY:
      return action.payload;
    case enteriesTypes.ADD_ENTRY:
      newEntries = state.concat({...action.payload})
      return newEntries;
    case enteriesTypes.REMOVE_ENTRY:
      newEntries = state.filter(entry => entry.id !== action.payload.id);
      return newEntries;
    case enteriesTypes.UPDATE_ENTRY:
      newEntries = [...state];
      const index = newEntries.findIndex(entry => entry.id === action.payload.id);
      newEntries[index] = {...action.payload.entry};
      return newEntries;
    default:
      return state;
  } 
}

export default reducer;

var initialEntries = [];