import React from 'react';
import { Link } from 'react-router-dom'; // 1. Link를 꼭 불러와야 해요!

// 2. () 안에 { label, to } 라고 써서 Navbar가 보낸 상자를 열어야 합니다 (구조 분해 할당)
function NavItem({ label, to }) { 
    return (
            <Link to={to} className="nav-button">
                {label}
            </Link>
    );
}

export default NavItem;