import React from 'react';

function NavItem({ label }) {
    return (
        <button className="nav-button">
            {label}
        </button>
    );
}

export default NavItem;