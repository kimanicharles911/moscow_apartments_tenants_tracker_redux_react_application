import './EditModalComponent.css';
import axios from 'axios';
import { Alert } from 'react-bootstrap';
import {axiosErrorMessage, axiosResponseMessage} from '../../modules';
import {connect} from 'react-redux';
import {updateTenant, fetchTenants} from '../../actions';
import {useState} from 'react';

const EditModalComponent = ({tenantToUpdate, updateTenant, fetchTenants}) => {

  const nameChangeHandler = (event) => {
    updateTenant({...tenantToUpdate, name: event.target.value});
  };

  const occupationChangeHandler = (event) => {
    updateTenant({...tenantToUpdate, occupation: event.target.value});
  };

  const emailChangeHandler = (event) => {
    updateTenant({...tenantToUpdate, email: event.target.value});
  };

  const bioChangeHandler = (event) => {
    updateTenant({...tenantToUpdate, bio: event.target.value});
  };

  const [showAlert, setShowAlert] = useState(false);
  
  const validator = () => {
    if(tenantToUpdate.name.length < 3) return 'Check the name field';
    if(tenantToUpdate.occupation.length < 3) return 'Check the occupation field';
    if(tenantToUpdate.email.length < 5) return 'Check the email field';
    if(tenantToUpdate.bio.length < 7) return 'Check the bio field';
    return true;
  };

  const saveChangesBtnHandler = async() => {
    try{
      if(validator() === true){
        await axios.patch(`https://ti-react-test.herokuapp.com/users/${tenantToUpdate.id}`, tenantToUpdate)
          .then(res => {
            axiosResponseMessage.moduleFunc(res);
            fetchTenants();
          }).catch(err => {
            axiosErrorMessage.moduleFunc(err);
          })
      }else{
        setShowAlert(true);
      }
    }catch(err){
      console.error(err.message)
    }
  };

  return (
    tenantToUpdate &&
    <div className="modal" id="editModal" tabIndex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-scrollable" role="document">
        <div className="modal-content shadow">
          {showAlert ? 
            <Alert variant="danger" className="pb-0" onClose={() => setShowAlert(false)} dismissible>
              <p>{validator()}</p>
            </Alert>
            : null
          }
          <div className="modal-header pl-5 pr-5" id="edit-modal-header">
            <p className="h4 fw-bold mb-0 container-fluid">{tenantToUpdate.name}</p>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body pl-5 pr-5 pt-0">
            <form>
              <div className="form-floating mb-3 mt-3">
                <input type="text" className="form-control rounded-4" id="floatingEditName" placeholder="Name" value={tenantToUpdate.name} onChange={nameChangeHandler}/>
                <label htmlFor="floatingEditName">Name</label>
              </div>
              <div className="form-floating mb-3 mt-3">
                <input type="text" className="form-control rounded-4" id="floatingEditOccupation" placeholder="Occupation" value={tenantToUpdate.occupation} onChange={occupationChangeHandler}/>
                <label htmlFor="floatingEditOccupation">Occupation</label>
              </div>
              <div className="form-floating mb-3 mt-3">
                <input type="email" className="form-control rounded-4" id="floatingEditEmail" placeholder="Email" value={tenantToUpdate.email} onChange={emailChangeHandler}/>
                <label htmlFor="floatingEditEmail">Email</label>
              </div>
              <div className="form-floating mb-3">
                <textarea className="form-control rounded-4" id="floatingTextArea" placeholder="Bio" value={tenantToUpdate.bio} onChange={bioChangeHandler}></textarea>
                <label htmlFor="floatingTextArea">Bio</label>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
            <button type="button" className="btn btn-danger" data-bs-dismiss={validator() === true ? 'modal': ''} id="save-edit-changes-btn" onClick={saveChangesBtnHandler}>Save changes</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    tenantToUpdate: state.tenantToUpdate
  }
}

export default connect(mapStateToProps, {
  updateTenant: updateTenant,
  fetchTenants: fetchTenants
})(EditModalComponent);