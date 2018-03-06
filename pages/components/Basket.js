import React from "react";
export default ({ count = 0,onClick}) => {
  return (
    <div onClick={onClick} className="basket">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 48 48"
      >
        <path d="M34.42 18L25.66 4.89c-.38-.58-1.02-.85-1.66-.85-.64 0-1.28.28-1.66.85L13.58 18H4c-1.1 0-2 .9-2 2 0 .19.03.37.07.54l5.07 18.54C7.61 40.76 9.16 42 11 42h26c1.84 0 3.39-1.24 3.85-2.93l5.07-18.54c.05-.16.08-.34.08-.53 0-1.1-.9-2-2-2h-9.58zM18 18l6-8.8 6 8.8H18zm6 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
      </svg>
      <span>{count}</span>
      <style jsx>{`
        .basket {
          cursor: pointer;
          display: flex;
          align-items: center;
        }
        svg {
          fill: #555;
          height: 40px;
          width: 40px;
        }
        span {
          font-size: 1.3em;
          padding-left: 5px;
          color: red;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};