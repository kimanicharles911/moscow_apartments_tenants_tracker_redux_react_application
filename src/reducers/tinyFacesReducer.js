const tinyFacesReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_RANDOM_USERS":
      return action.payload;
    default:
      return state;
  }
};

export default tinyFacesReducer;
