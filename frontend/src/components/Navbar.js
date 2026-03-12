import React from 'react';
import NavItem from './NavItem';
import { Link } from 'react-router-dom';
// Navbar.js 수정본
const menus = [
    { id: "home", label: "홈", path: "/" },
    { id: "music", label: "음악 탐색", path: "/Music" },
    { id: "mood", label: "기분 기록", path: "/Mood" },
    { id: "mypage", label: "마이 페이지", path: "/Mypage" },
    { id: "about_us", label: "정보", path: "/About" },
];

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">로고</Link>
            </div>
            <div className="navbar-menus">
                {menus.map((item) => (
                    /* path를 to라는 이름으로 NavItem에게 넘겨줍니다 */
                    <NavItem key={item.id} label={item.label} to={item.path} />
                ))}
            </div>
        </nav>
    );
}

/*
 react는 페이지가 1장임 주소를 바꾸는 척 안의 부품만 바꿈 (SPA)
 react 는 페이지 새로고침이 아닌 변한것만 바꿔주기 때문에 a태그를 사용하면 페이지 전체를 다시 받아오게 됨
 대신 link는 주소만 바꾸고 주소에 맞는 컴포넌트만 리액트 라우터에 보여달라 명령 
다른 태그들(Navitem 같은 것)도 다 link로 이루어져 있음 
 
 */


export default Navbar;