import TopNavBar from "../navbars/TopNavBar";
import React, { Component } from "react";
class MainHeader extends Component {
  displayName = "MainHeader";
  render = () => {
    return (
      <header>
        <div className="MainHeader">
          <h1>
            <span>terc</span>
            <span>design</span>
          </h1>
          <div className="social">
            <a href="#">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path d="M5,3H19C20.1,3 21,3.9 21,5V19C21,20.1 20.1,21 19,21H5C3.9,21 3,20.1 3,19V5C3,3.9 3.9,3 5,3M18,5H15.5C13.57,5 12,6.57 12,8.5V11H10V14H12V21H15V14H18V11H15V9C15,8.45 15.45,8 16,8H18V5Z" />
              </svg>
            </a>
            <a href="#">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path d="M5,3H19C20.1,3 21,3.9 21,5V19C21,20.1 20.1,21 19,21H5C3.9,21 3,20.1 3,19V5C3,3.9 3.9,3 5,3M17.71,9.33C18.19,8.93 18.75,8.45 19,7.92C18.59,8.13 18.1,8.26 17.56,8.33C18.06,7.97 18.47,7.5 18.68,6.86C18.16,7.14 17.63,7.38 16.97,7.5C15.42,5.63 11.71,7.15 12.37,9.95C9.76,9.79 8.17,8.61 6.85,7.16C6.1,8.38 6.75,10.23 7.64,10.74C7.18,10.71 6.83,10.57 6.5,10.41C6.54,11.95 7.39,12.69 8.58,13.09C8.22,13.16 7.82,13.18 7.44,13.12C7.81,14.19 8.58,14.86 9.9,15C9,15.76 7.34,16.29 6,16.08C7.15,16.81 8.46,17.39 10.28,17.31C14.69,17.11 17.64,13.95 17.71,9.33Z" />
              </svg>
            </a>
            <a href="#">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path d="M20,18H18V9.25L12,13L6,9.25V18H4V6H5.2L12,10.25L18.8,6H20M20,4H4C2.89,4 2,4.89 2,6V18C2,19.1 2.9,20 4,20H20C21.1,20 22,19.1 22,18V6C22,4.89 21.1,4 20,4Z" />
              </svg>
            </a>
          </div>
        </div>
        <TopNavBar />
      </header>
    );
  };
}

export default MainHeader;
