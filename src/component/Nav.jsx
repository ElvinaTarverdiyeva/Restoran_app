import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <label htmlFor="check"  className="check">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.99501 5.40998L28.033 5.49098C28.861 5.49398 29.535 4.82398 29.538 3.99598C29.54 3.16798 28.871 2.49398 28.043 2.49098L4.00501 2.40998C3.17701 2.40698 2.50301 3.07698 2.50001 3.90498C2.49701 4.73298 3.16701 5.40698 3.99501 5.40998Z" fill="#EEEEEE"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.99501 29.404L28.033 29.485C28.861 29.488 29.535 28.818 29.538 27.99C29.54 27.162 28.871 26.488 28.043 26.485L4.00501 26.404C3.17701 26.402 2.50301 27.071 2.50001 27.899C2.49701 28.727 3.16701 29.402 3.99501 29.404Z" fill="#EEEEEE"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.01802 17.461L28.056 17.542C28.884 17.545 29.558 16.875 29.561 16.047C29.564 15.219 28.894 14.545 28.066 14.542L4.02802 14.461C3.20002 14.458 2.52602 15.128 2.52302 15.956C2.52002 16.784 3.19002 17.458 4.01802 17.461Z" fill="#EEEEEE"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16 23.5H28C28.828 23.5 29.5 22.828 29.5 22C29.5 21.172 28.828 20.5 28 20.5H16C15.172 20.5 14.5 21.172 14.5 22C14.5 22.828 15.172 23.5 16 23.5Z" fill="#EEEEEE"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16 11.5H28C28.828 11.5 29.5 10.828 29.5 10C29.5 9.172 28.828 8.5 28 8.5H16C15.172 8.5 14.5 9.172 14.5 10C14.5 10.828 15.172 11.5 16 11.5Z" fill="#EEEEEE"/>
</svg>

      </label>
      <input type="checkbox" id="check" />
      <ul className="nav_list">
        <li >
          <NavLink to={"/"} className="nav_item"> Ana Səhifə</NavLink>
         </li>
         <li >
          <NavLink to={"/orders"} className="nav_item"> Sifarişlər</NavLink>
         </li>
         <li >
          <NavLink to={"/orderAdd"} className="nav_item">Sifariş əlavə et</NavLink>
         </li>
      </ul>
    </nav>
  );
}

export default Nav;
