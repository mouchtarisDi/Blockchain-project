import { NavLink } from 'react-router-dom';

const links = [
  { to: '/', label: 'Dashboard' },
  { to: '/transactions', label: 'Transactions' },
  { to: '/mine', label: 'Mine' },
  { to: '/balances', label: 'Balances' },
  { to: '/chain', label: 'Chain Explorer' },
  { to: '/pending', label: 'Pending' },
];

export default function Navbar() {
  return (
    <nav className="nav-shell">
      <div>
        <p className="eyebrow">Educational project</p>
        <h1>Blockchain Explorer UI</h1>
      </div>

      <div className="nav-links">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              isActive ? 'nav-link nav-link-active' : 'nav-link'
            }
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
