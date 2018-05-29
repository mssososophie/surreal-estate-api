import React from 'react';
import './addProperty.scss';
import Property from './Property';
import Proptypes from 'Proptypes';

class AddProperty extends React.component {
  constructor(props) {
    super(props);
    this.state = {value: null};
/* is this really null here? because we want to load up a blank form*/

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}
/* this needs a route handler and I need to define a mongoose schema or model */
handleAddProperty() {
  axios.post('http://localhost:3000/api/v1/ProperyListing', {
    title: this.state.title,
    type: this.state.type,
    bedrooms: this.state.bedrooms,
    bathrooms: this.state.bathrooms,
    price: this.state,price,
    city: this.state.city,
    email: this.state.email,
  })
    .then(() => {
      this.props.history.push('');
    });
}

handleChange(event) {
  this.setState({value: event.target.value});
}

handleSubmit(event) {
  alert('Property type selected: ' + this.state.value);
  event.preventDefault();
}

const AddProperty = ({ title, type, bedrooms, bathrooms, price, city, email}) => (
  <div className="add-property-container">
    <form>
        <div className="form-group row">
          <label htmlFor="propertyTitle" className="col-sm-2 col-form-label">Title</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="propertyTitle" placeholder="A catchy title for your listing" />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="propertyTypeSelect" className="col-sm-2 col-form-label">Type</label>
          <div className="col-sm-10">
            <select
              className="form-control"
              id="propertyTypeSelect"
              value={this.state.value} 
              onChange={this.handleChange}
            >
              <option select value="none">Select one option</option>
              <option value="Flat">Flat</option>
              <option value="Detached">Detached</option>
              <option value="Semi-Detached">Semi-Detached</option>
              <option value="Terraced">Terraced</option>
              <option value="End of Terrace">End of Terrace</option>
              <option value="Cottage">Cottage</option>
              <option value="Bungalow">Bungalow</option>
            </select>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="bedroomInput" className="col-sm-2 col-form-label">Bedrooms</label>
          <div className="col-sm-10">
            <input type="number" className="form-control" id="bedroomInput" placeholder="No of bedrooms" />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="bathroomInput" className="col-sm-2 col-form-label">Bathrooms</label>
          <div className="col-sm-10">
            <input type="number" className="form-control" id="bathroomInput" placeholder="No of bathrooms" />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="price" className="col-sm-2 col-form-label">Price</label>
          <div className="col-sm-10">
            <input type="number" className="form-control" id="price" placeholder="Price" />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="citySelect" className="col-sm-2 col-form-label">City</label>
          <div className="col-sm-10">
            <select
              className="form-control"
              id="citySelect"
              value={this.state.value}
              onChange={this.handleChange}
            >
              <option select value="none">Select city</option>
              <option value="Manchester">Manchester</option>
              <option value="Sheffield">Sheffield</option>
              <option value="Liverpool">Liverpool</option>
              <option value="Leeds">Leeds</option>
            </select>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input type="email" className="form-control" id="email" placeholder="Contact email" />
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-10">
            <button type="submit" className="btn btn-primary">Add Listing</button>
          </div>
        </div>
        <div className="alert alert-warning" role="alert">
          Some field validation went wrong. Please provide correct data.
        </div>
        <div className="alert alert-danger" role="alert">
          Sorry, something went wrong. Please try again. (API Error)
        </div>
        <div className="alert alert-success" role="alert">
          Property saved.
      </div>
    </form>
  </div>
};

componentDidMount() {
  // we need to make an api call
  axios.put('http://localhost:3000/api/v1/ProperyListing')
    .then((response) => {
      this.setState({
        listings: response.data,
        initialListings: response.data,
      });
    }).catch((err) => {
      console.log(err);
    });
}

export default AddProperty;
