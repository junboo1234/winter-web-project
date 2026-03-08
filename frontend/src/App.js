import React from 'react';
import './Navbar.css';

function NavItem({label}){
  return( 
    <button className="nav-button" >
      {label}
    </button>
  );
}

function App() {
  const menus = ["home","menu","mood","my page","about us"];
  return (
    <div className ="navbar">
      {menus.map((menu,index)=>(
        <NavItem key={index} label={menu}/>
      ))}
    </div>

  );
}

export default App;
