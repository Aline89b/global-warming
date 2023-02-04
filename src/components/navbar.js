import { NavLink } from "react-router-dom";

export default function Navbar(){
   

    return(
        <nav className="navbar">
      <ul>
        <li>
          <NavLink
            to="/temperature"
            
          >
            Temperature Graph
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/artic"
            
          >
            Artic Data
          </NavLink>
        </li>
        <li>
          <NavLink to="/CO2">
            
                CO2 Data
              
           
          </NavLink>
        </li>
      </ul>
    </nav>
    )
}