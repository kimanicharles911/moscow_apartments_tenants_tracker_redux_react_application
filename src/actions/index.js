import axios from "axios";

const fetchTenants = () => {
  return async (dispatch) => {
    const response = await axios.get(
      "https://ti-react-test.herokuapp.com/users"
    );

    dispatch({ type: "FETCH_TENANTS", payload: response.data });
  };
};

const fetchTinyFaces = () => {
  return async (dispatch) => {
    const response = await axios.get(
      "https://tinyfac.es/api/data?limit=50&quality=0"
    );
    
    dispatch({ type: "FETCH_RANDOM_USERS", payload: response.data });
  };
};

const updateTenant = (tenant) => {
  return{
    type: 'UPDATE_TENANT',
    payload: tenant
  };
};

export { fetchTenants, fetchTinyFaces, updateTenant };
