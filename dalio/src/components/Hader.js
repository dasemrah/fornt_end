import React from "react";
const elements = [
  { id:0, name:"About Us" },
  { id:1, name:"What We do" },
  { id:2, name:"Our work" },
  { id:3, name:"Blog" },
  { id:4, name:"Say hi" },
]
// eslint-disable-next-line react/display-name
const Header = () => {
  return(
    <nav className="App-header">
      <ul>
        <li className="nav-element nav-brand">
          <img src="Dalio.png" alt=""/>
        </li>
        {elements.map(({id, name} )=> (
          <li className="nav-element" key={id}>
            {name}
          </li>
        ))}
      </ul>
    </nav>
  )
}
export default Header
