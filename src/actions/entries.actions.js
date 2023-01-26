const types = {
  ADD_ENTRY: "ADD_ENTRY",
  REMOVE_ENTRY: "REMOVE_ENTRY",
  UPDATE_ENTRY: "UPDATE_ENTRY",
  GET_ENTRY: "GET_ENTRY",
  POPULATE_ENTRY: "POPULATE_ENTRY"
}

export default types;

export const addEntryRedux = (payload) => {
  return {type:types.ADD_ENTRY, payload};
};

export const removeEntryRedux = (id) => {
  return {type:types.REMOVE_ENTRY, payload: {id}}
};

export const updateEntryRedux = (id, entry) => {
  return {type:types.UPDATE_ENTRY, payload: {id, entry}}
};

export const getEntryRedux = () => {
  return {type: types.GET_ENTRY }
}

export const populateEntryRedux = (entries) => {
  return {type: types.POPULATE_ENTRY, payload: entries }
}