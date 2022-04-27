import React from 'react';
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className='Header'>
            <h1>Local Scene</h1>
            <div className='HeaderNav'>
                <Link to="/see">SEE</Link>
                <Link to="/be">BE</Link>
                <Link to="/we">WE</Link>
            </div>
        </div>
    );
}
export default Header;