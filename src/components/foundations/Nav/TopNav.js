import './_top-nav.scss';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";


function TopNav(props) {

  const { activeTab, setActiveTab } = props;

  useEffect(() => {

  }, [activeTab, setActiveTab])

  return (
    <nav className="Top">
      <ul>
        <li className={activeTab === 'Global' && 'Active'}>
          <Link to="/"
            id="Global"
          >
            Global Tokens
          </Link>
        </li>
        <li className={activeTab === 'Semantic' && 'Active'}>
          <Link
            to="/semantic"
            id="Semantic"
          >
            Semantic Tokens
          </Link>
        </li>
        <li className={activeTab === 'Buttons' && 'Active'}>
          <Link
            to="/buttons"
            id="Buttons"
          >
            Buttons
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default TopNav;
