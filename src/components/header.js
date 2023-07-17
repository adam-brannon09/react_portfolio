import React from "react";
import Nav from './nav';
function Header(props) {
    const { setCurrentPage } = props;  
    

    return (
        <header>
            {/* Insert navbar into header and pass in properties to use {setCurrentPage} */}
            <Nav updatePage={setCurrentPage} />
        </header>
    )
}

export default Header;