import React from 'react';

import {connect} from 'react-redux';
import {featuresReducer} from '../reducers/featuresReducer.js';

const Header = props => {
  // console.log("In Header Props", props)
  return (
    <>
      <figure className="image is-128x128">
        <img src={props.image} alt={props.name} />
      </figure>
      <h2>{props.name}</h2>
      <p>Amount: ${props.price}</p>
    </>
  );
};

const mapStateToProps = (state) => {
  // console.log("In mSTP", state);
  return {
    name: state.car.name,
    image: state.car.image,
    price: state.car.price
  };
  
}

export default connect(mapStateToProps,
  {})(Header)
