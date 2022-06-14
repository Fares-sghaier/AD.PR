import { Link } from "react-router-dom";
import "./TopBar.css";

export default function Topbar() {
    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.reload();
      };
  const user = true;
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <a className="link" to="/">
              HOME
            </a>
          </li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">
            <a className="link" to="/write">
              WRITE
            </a>
          </li>
          {user && <li className="topListItem" onClick={handleLogout}>LOGOUT</li>}
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <a className="link" to="/settings">
            <img
              className="topImg"
              src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
          </a>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <a className="link" to="/login">
                LOGIN
              </a>
            </li>
            <li className="topListItem">
              <a className="link" to="/register">
                REGISTER
              </a>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}