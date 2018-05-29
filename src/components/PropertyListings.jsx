import React from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import Property from './Property';
import './listings.scss';

class PropertyListings extends React.Component {
  constructor() {
    super();
    this.state = {
      listings: [],
      initialListings: [],
    };
  }

  componentDidMount() {
    // we need to make an api call
    axios.get('http://localhost:3000/api/v1/ProperyListing')
      .then((response) => {
        this.setState({
          listings: response.data,
          initialListings: response.data,
        });
      }).catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <React.Fragment>
        <div className="listings-container">
          <div className="sidebar">
            <Sidebar
              onCityClick={(cityName) => {
                const filteredProperties =
                  this.state.initialListings.filter(listing => listing.city === cityName);
                this.setState({ listings: filteredProperties });
              }}

              orderByPrice={(order) => {
                 console.log(`sort by ${order}`);
                 if (order === 'ascending') {
                  const ascendingPrice =
                  this.state.initialListings.sort((a, b) => (a.price - b.price));
                  this.setState({ listings: ascendingPrice });
                 } else (order === 'decending'); {
                  const decendingPrice =
                  this.state.initialListings.sort((a, b) => (b.price - a.price));
                  this.setState({ listings: decendingPrice });
                 }
            }}
            />
          </div>
          <div className="listings">
            {this.state.listings.map(listing => <Property key={listing._id} {...listing} />)}
          </div>
        </div>
        <nav className="pagination-container" aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item"><a className="page-link" href="#">Previous</a></li>
            <li className="page-item"><a className="page-link" href="#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item"><a className="page-link" href="#">Next</a></li>
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}

export default PropertyListings;
