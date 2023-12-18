import React, { useContext } from 'react';
import logo from "../images/VVC Logo.png";
import {Link, redirect} from "react-router-dom";
import { UserContext } from './Providers/UserProvider';



export default function LeftSlider() {
    const { isUserLoggedIn } = useContext(UserContext);
    const handleToggle = ()=>{
        const slidebar = document.querySelector(".sidebar");
        slidebar.classList.toggle("close")
    }
    const handleSearchToggle = ()=>{
        const slidebar = document.querySelector(".sidebar");
        slidebar.classList.remove("close")
    }
    if (!isUserLoggedIn) return null;
  return (
    <>
      <nav className="sidebar close">
        <header>
          <div className="image-text">
            <span className="image">
              <img src={logo} alt="" />
            </span>
            <div className="text header-text">
              <span className="name">Visual Vision Creation</span>
              <span className="moto">Where Visioin Meets Reality</span>
            </div>
          </div>
          <i class="bx bx-chevron-right toggle" onClick={handleToggle}> </i>
        </header>

        <div className="menubar">
          <div className="menu">
            <li className="search-box" onClick={handleSearchToggle}>
              <i class="bx bx-search icon"></i>
              <input type="search" placeholder="Search....." />
            </li>
            <ul className="menu-links">
              <li>
                <Link to="/dashboard">
                  <i class="bx bx-home-alt icon"></i>
                  <span className="text nav-text">Dashboard</span>
                </Link>
              </li>
              <li>
                <Link to="/dashboard">
                  <i class="bx bx-photo-album icon"></i>
                  <span className="text nav-text">Photos</span>
                </Link>
              </li>
              <li>
                <Link to="/dashboard">
                  <i class="bx bxs-contact icon"></i>
                  <span className="text nav-text">Contact</span>
                </Link>
              </li>
              <li>
                <Link to="/dashboard">
                  <i class="bx bxs-videos icon"></i>
                  <span className="text nav-text">Videos</span>
                </Link>
              </li>
              <li>
                <Link to="/dashboard">
                  <i class="bx bx-group icon"></i>
                  <span className="text nav-text">Our Team</span>
                </Link>
              </li>
              <li>
                <Link to="/dashboard">
                  <i class="bx bx-book icon"></i>
                  <span className="text nav-text">Blogs</span>
                </Link>
              </li>
              <li>
                <Link to="/dashboard">
                  <i class="bx bx-comment-dots icon"></i>
                  <span className="text nav-text">Testimony</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="bottom-contents">
          <li>
                <Link to="/dashboard">
                  <i class="bx bxs-user icon"></i>
                  <span className="text nav-text">Profile</span>
                </Link>
            </li>
          <li>
                <Link to="/dashboard">
                  <i class="bx bx-log-out icon"></i>
                  <span className="text nav-text">Log Out</span>
                </Link>
            </li>
          </div>
        </div>
      </nav>
    </>
  )
}
