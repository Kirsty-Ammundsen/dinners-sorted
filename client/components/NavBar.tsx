import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <>
      <nav className="navbar">
        <div className="logo-combined">
          <div className="outer-circle">
            <img
              className="tea"
              src="/client/images/green-tea.png"
              alt="Cup of cursed tea"
            />
          </div>
          <Link to="/">
            <h3 className="cursed-tea-words">Cursed Tea</h3>
          </Link>
        </div>

        <ul className="nav-links">
          <Link className="navlink" to="/">
            <li>Home</li>
          </Link>
          <Link className="navlink" to="/sort">
            <li>Sort My Dinners</li>
          </Link>
          <Link className="navlink" to="/recipes">
            <li>All Recipes</li>
          </Link>
        </ul>
      </nav>
    </>
  )
}
