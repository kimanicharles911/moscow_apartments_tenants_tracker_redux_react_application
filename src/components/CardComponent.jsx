import { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchTenants, fetchTinyFaces, updateTenant } from '../actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { EditModalComponent } from './';
import './CardComponent.css';

const CardComponent = ({ fetchTenants, tenants, fetchTinyFaces, tinyFaces, updateTenant }) => {

  useEffect(() => {
    fetchTenants();
    fetchTinyFaces();
  }, [fetchTenants, fetchTinyFaces])

  const randomIndex = () => {
    return Math.floor(Math.random() * 49);
  };

  const defaultDetails = {
    name: 'No name currently',
    bio: 'No bio currently',
    email: 'No email currently',
    occupation: 'No occupation currently'
  }

  return (
    <Fragment>
      {tenants.map((tenant, index) => (
        <div className="card" key={index}>
          <div className="card__title">
            {tenant.name ? tenant.name : defaultDetails.name}
          </div>
          <div className="card__body">
            <div className="career-bio">
              <p>Career: {tenant.occupation ? tenant.occupation : defaultDetails.occupation}</p>
              <p className="mt-1">Bio: {tenant.bio ? tenant.bio : defaultDetails.bio}</p>
            </div>
            <div className="email">
              <p>Email: {tenant.email ? tenant.email : defaultDetails.email}</p>
            </div>
            <a href="/#" type="button" className="btn mt-1" id="update-btn" data-bs-toggle="modal" data-bs-target="#editModal" onClick={() => updateTenant(tenant)}>Update <FontAwesomeIcon icon={faPen} className="fas fa-pen" id="pen-icon" /></a>
            <div className="card__image"><img src={tinyFaces.length === 50 ? tinyFaces[randomIndex()].url : `https://fakeface.rest/thumb/view`} style={{ width: "70px", height: "70px" }} alt="" /></div>
            {/* <div className="card__image"><img src='https://fakeface.rest/thumb/view' style={{ width: "70px", height: "70px" }} alt="" /></div> */}
          </div>
        </div>
      ))}
      <EditModalComponent />
    </Fragment>
  );
};
const mapStateToProps = (state) => {
  return {
    tenants: state.tenants,
    tinyFaces: state.tinyFaces
  }
};

export default connect(mapStateToProps, {
  fetchTenants: fetchTenants,
  fetchTinyFaces: fetchTinyFaces,
  updateTenant: updateTenant
})(CardComponent);