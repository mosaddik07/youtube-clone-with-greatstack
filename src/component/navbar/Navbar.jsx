import menu_icon from "../../assets/img/menu.png";
import logo from "../../assets/img/logo.png";
import search_icon from "../../assets/img/search.png";
import upload_icon from "../../assets/img/upload.png";
import more_icon from "../../assets/img/more.png";
import notification_icon from "../../assets/img/notification.png";
import profile_icon from "../../assets/img/jack.png";

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
        <img className="logo" src={logo} alt="logo" />
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
        <img className="user_icon" src={profile_icon} alt="" />
      </div>
    </nav>
  );
};
export default Navbar;
