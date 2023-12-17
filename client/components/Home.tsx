import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="home-body">
      <Link to="/sort">
        <h1>Dinner's Sorted!</h1>
      </Link>
      {/* <div className="home-image"></div> */}
      <img
        className="home-image"
        src="/client/images/food.jpg"
        alt="two friends eating bowls of soup"
      />
    </div>
  )
}
