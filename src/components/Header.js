import React from 'react';

import {connect} from 'react-redux';
import {featuresReducer} from '../reducers/featuresReducer.js';

const Header = props => {
  console.log("In Header Props", props)
  return (
    <>
      <figure className="image is-128x128">
        <img src={props.car.image} alt={props.car.name} />
      </figure>
      <h2>{props.car.name}</h2>
      <p>Amount: ${props.car.price}</p>
    </>
  );
};

const mapStateToProps = (state) => {
  console.log("In mSTP", state.car.name);
  return {
    name: state.car.name,
    image: state.car.image
  };
  
}

export default connect(mapStateToProps,
  {})(Header)
