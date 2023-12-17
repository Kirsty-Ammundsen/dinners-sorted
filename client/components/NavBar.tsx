export default function NavBar() {
  return (
    <nav className="navbar">
      <p>Cursed Tea</p>
      <ul className="desktopNav">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/sort">Sort Out My Dinners</a>
        </li>
        <li>
          <a href="/recipes">Recipes</a>
        </li>
        {/* <li>
          <a href="/">Contact</a>
        </li> */}
      </ul>
    </nav>
  )
}
