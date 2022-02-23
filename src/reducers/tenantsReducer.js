const tenantsReducer = (state = [], action) => {
  switch(action.type){
    case 'FETCH_TENANTS':
      return action.payload;
    default:
      return state;
  }
};

export default tenantsReducer;