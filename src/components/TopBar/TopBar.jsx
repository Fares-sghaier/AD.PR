import { Link ,Outlet} from "react-router-dom";
import welcome from "../../images/welcome.png";
import fares from "../../images/fares.jpeg";
import "./TopBar.css";
export default function Topbar() {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  const user = true;
  return (
    <div>
      <div className="top">
        <div className="topLeft">
          <i className="topIcon fab fa-facebook-square"></i>
          <i className="topIcon fab fa-instagram-square"></i>
          <i className="topIcon fab fa-github-square"></i>
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
           
          </ul>
        </div>
        <div className="topRight">
          {user ? (
            <a className="link" to="/settings">
              <img
                className="topImg"
                src={fares}
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
           {user && (
              <button className="butto" onClick={handleLogout}>
                LOGOUT
              </button>
            )}
          {/* <i className="topSearchIcon fas fa-search"></i> */}
        </div>
      </div>
      <div>
        <section className="home" id="home">
          <div className="content">
            <h3>Hello Im Arbi Fares sghaier </h3>
            <p className="p">
              I’m a Full stack developer based in Tunisia.
            </p>{" "}
            <br />
            <Link href="#" className="button" to="/Sidebar">
              About me
            </Link>
            
          </div>
          <div className="image">
            <img src={welcome} alt="" />
          </div>
        </section>
      </div>
      <Outlet/>
    </div>
  );
}
