const updateTenantReducer = (
  tenantToUpdate = {
    bio: '',
    created_at: '',
    email: '',
    id: '',
    name: '',
    occupation: '',
    updated_at: '',
  },
  action
) => {
  switch (action.type) {
    case 'UPDATE_TENANT':
      return action.payload;
    default:
      return tenantToUpdate;
  }
};

export default updateTenantReducer;