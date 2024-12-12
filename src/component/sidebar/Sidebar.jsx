import home from "../../assets/img/home.png";
import game_icon from "../../assets/img/game_icon.png";
import automobiles from "../../assets/img/automobiles.png";
import sports from "../../assets/img/sports.png";
import entertainment from "../../assets/img/entertainment.png";
import tech from "../../assets/img/tech.png";
import music from "../../assets/img/music.png";
import blogs from "../../assets/img/blogs.png";
import news from "../../assets/img/news.png";
import jack from "../../assets/img/jack.png";
import simon from "../../assets/img/simon.png";
import tom from "../../assets/img/tom.png";
import megan from "../../assets/img/megan.png";
import cameron from "../../assets/img/cameron.png";
const Sidebar = ({ sidebar }) => {
  return (
    <div className={`sidebar ${sidebar ? "" : "small_sidebar"}`}>
      <div className="shortcut_link">
        <div className="side_link">
          <img src={home} alt="" />
          <p>Home</p>
        </div>
        <div className="side_link">
          <img src={game_icon} alt="" />
          <p>Gaming</p>
        </div>
        <div className="side_link">
          <img src={automobiles} alt="" />
          <p>Automobiles</p>
        </div>
        <div className="side_link">
          <img src={sports} alt="" />
          <p>Sports</p>
        </div>
        <div className="side_link">
          <img src={entertainment} alt="" />
          <p>Entertainment</p>
        </div>
        <div className="side_link">
          <img src={tech} alt="" />
          <p>Tech</p>
        </div>
        <div className="side_link">
          <img src={music} alt="" />
          <p>Music</p>
        </div>
        <div className="side_link">
          <img src={blogs} alt="" />
          <p>Blogs</p>
        </div>
        <div className="side_link">
          <img src={news} alt="" />
          <p>News</p>
        </div>
        <hr />
      </div>
      <div className="subscribed_list">
        <h3>Subscribed</h3>
        <div className="side_link">
          <img src={jack} alt="" />
          <p>PewDiePie</p>
        </div>
        <div className="side_link">
          <img src={simon} alt="" />
          <p>Mosaddik</p>
        </div>
        <div className="side_link">
          <img src={tom} alt="" />
          <p>justin Bieber</p>
        </div>
        <div className="side_link">
          <img src={megan} alt="" />
          <p>10 minute school</p>
        </div>
        <div className="side_link">
          <img src={cameron} alt="" />
          <p>Ridiya Rahi</p>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
