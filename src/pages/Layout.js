import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/AboutUs"> About Us</Link>
          </li>
          <link to=""></link>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;