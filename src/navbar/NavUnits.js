import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const NavUnits = () => {
    var unit_name = localStorage.getItem('store_uni');

    var div_name = localStorage.getItem('store_div');
    console.log(div_name);
    function convertToPascalCase(variable) {
        // Remove whitespace and special characters
        variable = variable.replace(/\s+/g, "").replace(/[_-]/g, "");
      
        // Capitalize the first letter of the variable and convert the rest to lowercase
        variable = variable.charAt(0).toUpperCase() + variable.slice(1).toLowerCase();
      
        return variable;
      }

    // Example usage

    var pascalCase_Uname = convertToPascalCase(unit_name);
    var pascalCase_Dname = convertToPascalCase(div_name);
    console.log(pascalCase_Uname);
    

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="#"><h1>{pascalCase_Uname} {pascalCase_Dname}</h1></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link to="/Components/Units/AllReq" className="nav-link navbar-link">All Requests</Link>
                    </li>
                    <li className="nav-item active">
                        <Link to="/Components/Units/UniAcptReq" className="nav-link navbar-link">AcceptedRequests</Link>
                    </li>
                    <li className="nav-item active">
                        <Link to="/Components/Units/OpReq" className="nav-link navbar-link">Open Requests</Link>
                    </li>
                    <li className="nav-item active">
                        <Link to="/UniHome" className="nav-link navbar-link">Logout</Link>
                    </li>

                </ul>
            </div>
        </nav>

    )
}

export default NavUnits