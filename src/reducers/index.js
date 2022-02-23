import { combineReducers } from "redux";
import tenantsReducer from "./tenantsReducer";
import tinyFacesReducer from "./tinyFacesReducer.js";
import updateTenantReducer from './updateTenantReducer.js'

export default combineReducers({
  tenants: tenantsReducer,
  tinyFaces: tinyFacesReducer,
  tenantToUpdate: updateTenantReducer
});
