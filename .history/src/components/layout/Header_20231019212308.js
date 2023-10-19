import React from "react";
export const Header = () => {
  return (
    <header className="header" data-testId="header">
      <nav>
        <div className="logo">
          <img src="/images/logo.jpg" alt="TodoList" />
        </div>
        <div className="settings">
          <ul>
            <li>+</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
