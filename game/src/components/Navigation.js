import React from 'react';
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div>
          <NavLink to="/">Menu</NavLink>
          <NavLink to="/Report">Report</NavLink>
          <NavLink to="/Statements">Statements</NavLink>
          <NavLink to="/CrimeScene">Crime Scene</NavLink>
          <NavLink to="/Evidence">Evidence</NavLink>
       </div>
    );
}
 
export default Navigation;