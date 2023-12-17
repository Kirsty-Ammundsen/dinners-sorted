import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
      <header>
        <h1>Nav Bar</h1>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>Copyright Cursed Tea © 2023</footer>
    </>
  )
}
