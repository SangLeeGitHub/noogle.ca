import React from 'react';
import {
    Route,
    Redirect
  } from "react-router-dom";
  
//console.log(" -- proivateRoute authenticated " + this.props.authenticated).bind(this);
const PrivateRoute = ({ component: Component, authenticated, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        authenticated ? (
          <Component {...rest} {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location }
            }}
          />
        )
      }
    />
);
console.log("call turn : 3 - PrivateRoute.js");
  
export default PrivateRoute