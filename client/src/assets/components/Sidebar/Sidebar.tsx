// Sidebar.tsx

import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const location = useLocation();

  // Check if the current route matches "pageA"
  const isPageA = location.pathname === '/news';

  // Render sidebar only if the current route is "pageA"
  if (!isPageA) {
    return null;
  }

  return (
    <div className="sidebar">
      <h2>PageA Sidebar</h2>
      <ul>
        <li>
          <Link to="/news/subpage1">Subpage 1</Link>
        </li>
        <li>
          <Link to="/news/subpage2">Subpage 2</Link>
        </li>
        {/* Add more sidebar links as needed */}
      </ul>
    </div>
  );
};

export default Sidebar;
