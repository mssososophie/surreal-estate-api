import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Sidebar = props => (
  <nav className="bg-secondary sidebar">
    <ul className="nav nav-pills flex-column">
      <li className="nav-item">
        <Link to="/post-property">Add Property</Link>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Sort by:</a>
        <select
          className="form-control"
          onChange={(event) => {
          console.log(event);
          props.orderByPrice(event.target.value);
        }}
          id="exampleFormControlSelect1"
        >
          <option value="ascending">Price Ascending</option>
          <option value="descending">Price Descending</option>
        </select>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Filter by City:</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#" onClick={() => props.onCityClick('Manchester')}>Manchester</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#" onClick={() => props.onCityClick('Liverpool')}>Liverpool</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#" onClick={() => props.onCityClick('Sheffield')}>Sheffield</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#" onClick={() => props.onCityClick('Leeds')}>Leeds</a>
      </li>
    </ul>
  </nav>
);

Sidebar.propTypes = {
  onCityClick: propTypes.func.isRequired,
  orderByPrice: propTypes.func.isRequired,
};

export default Sidebar;
