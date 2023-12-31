import React from "react";
import Nav from './nav';
function Header(props) {
    const { setCurrentPage, currentPage } = props;  // Destructuring assignment
    

    return (
        <header>
            {/* Insert navbar into header and pass in properties to use {setCurrentPage} */}
            <Nav updatePage={setCurrentPage} currentPage={currentPage}/>
        </header>
    )
}

export default Header;