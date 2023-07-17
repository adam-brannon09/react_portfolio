import React from "react";
import Nav from './nav';
function Header(props) {
    const { setCurrentPage } = props;  
    

    return (
        <header>
            <h1>Adam</h1>
            <Nav updatePage={setCurrentPage} />
        </header>
    )
}

export default Header;