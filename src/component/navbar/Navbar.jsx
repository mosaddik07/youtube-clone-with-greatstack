import menu_icon from "../../assets/img/menu.png";
import logo from "../../assets/img/logo.png";
import search_icon from "../../assets/img/search.png";
import upload_icon from "../../assets/img/upload.png";
import more_icon from "../../assets/img/more.png";
import notification_icon from "../../assets/img/notification.png";
import profile_icon from "../../assets/img/jack.png";
import { Link } from "react-router-dom";

const Navbar = ({ setSidebar }) => {
  return (
    <nav className="flex_div">
      <div className="nav_left flex_div">
        <img
          className="menu_icon"
          onClick={() => setSidebar((prev) => (prev === false ? true : false))}
          src={menu_icon}
          alt="menu_icon"
        />
        <Link to={"/"}>
          <img className="logo" src={logo} alt="logo" />
        </Link>
      </div>

      <div className="nav_middle flex_div">
        <div className="search_box flex_div">
          <input type="text" placeholder="search" />
          <img src={search_icon} alt="search_icon" title="search_icon" />
        </div>
      </div>

      <div className="nav_right">
        <img src={upload_icon} alt="" />
        <img src={more_icon} alt="" />
        <img src={notification_icon} alt="" />
        <Link to={"https://www.facebook.com/mosaddik.billahh"} target="_blank">
          {" "}
          <img
            className="user_icon"
            src={
              "https://scontent.fjsr11-1.fna.fbcdn.net/v/t39.30808-1/461427760_850781257195988_5661728562161770262_n.jpg?stp=c0.172.789.789a_dst-jpg_s200x200_tt6&_nc_cat=101&ccb=1-7&_nc_sid=50d2ac&_nc_eui2=AeHunHxq9nHVUigTr7V3CrQmXRLQU1CZ4hVdEtBTUJniFf6--Sb5of2rxw6VnZ2gol6GZt5_qofraPATa7LmLoU0&_nc_ohc=--i-Bh1ubjEQ7kNvgEJa_3k&_nc_zt=24&_nc_ht=scontent.fjsr11-1.fna&_nc_gid=Aji1fgzVsnNH0eHuCxLnPf5&oh=00_AYDOWmxyNXDUmBVFgMYCbqY3EChVkVBzm3dFbz1dOpo5vA&oe=676164A9"
            }
            alt=""
          />
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
