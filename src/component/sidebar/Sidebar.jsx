import home from "../../assets/img/home.png";
import game_icon from "../../assets/img/game_icon.png";
import automobiles from "../../assets/img/automobiles.png";
import sports from "../../assets/img/sports.png";
import entertainment from "../../assets/img/entertainment.png";
import music from "../../assets/img/music.png";
import blogs from "../../assets/img/blogs.png";

const Sidebar = ({ sidebar, category, setCategory }) => {
  return (
    <div className={`sidebar ${sidebar ? "" : "small_sidebar"}`}>
      <div className="shortcut_link">
        <div className={`side_link ${category === 24 ? "active" : ""}`} onClick={() => setCategory(24)}>
          <img src={home} alt="" />
          <p>Entertainment</p>
        </div>
        <div className={`side_link ${category === 25 ? "active" : ""}`} onClick={() => setCategory(25)}>
          <img src={game_icon} alt="" />
          <p>News & Politics</p>
        </div>
        <div className={`side_link ${category === 28 ? "active" : ""}`} onClick={() => setCategory(28)}>
          <img src={automobiles} alt="" />
          <p>Science & Technology</p>
        </div>
        <div className={`side_link ${category === 0 ? "active" : ""}`} onClick={() => setCategory(0)}>
          <img src={sports} alt="" />
          <p>Film & Animation</p>
        </div>
        <div className={`side_link ${category === 2 ? "active" : ""}`} onClick={() => setCategory(2)}>
          <img src={entertainment} alt="" />
          <p>Autos & Vehicles</p>
        </div>
        <div className={`side_link ${category === 10 ? "active" : ""}`} onClick={() => setCategory(10)}>
          <img src={music} alt="" />
          <p>Music</p>
        </div>
        <hr />
      </div>
      <div className="subscribed_list">
        <h3>Subscribed</h3>
        <div className="side_link">
          <img
            src="https://scontent.fjsr11-1.fna.fbcdn.net/v/t39.30808-6/469981743_1128788635569253_2712532815321255787_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEl31gYuLGtxGxFhuwKPZI0jK5JiML1VvaMrkmIwvVW9mAbIoDjO5QleaqQGfatl5scKiHZTQG7N38KAWXS3d7n&_nc_ohc=fWiszx6g5hoQ7kNvgHsp71L&_nc_zt=23&_nc_ht=scontent.fjsr11-1.fna&_nc_gid=ABbuZ0w6mJm6euMEQ5Swt07&oh=00_AYCZC4w9x5DnF6-gE6z-6GqomPfjCijRvl45PDfQYxy04Q&oe=67616F0B"
            alt=""
          />
          <p>Learn with Sumit </p>
        </div>
        <div className="side_link">
          <img
            src="https://scontent.fjsr11-1.fna.fbcdn.net/v/t39.30808-1/461427760_850781257195988_5661728562161770262_n.jpg?stp=c0.172.789.789a_dst-jpg_s200x200_tt6&_nc_cat=101&ccb=1-7&_nc_sid=50d2ac&_nc_eui2=AeHunHxq9nHVUigTr7V3CrQmXRLQU1CZ4hVdEtBTUJniFf6--Sb5of2rxw6VnZ2gol6GZt5_qofraPATa7LmLoU0&_nc_ohc=--i-Bh1ubjEQ7kNvgEJa_3k&_nc_zt=24&_nc_ht=scontent.fjsr11-1.fna&_nc_gid=Aji1fgzVsnNH0eHuCxLnPf5&oh=00_AYDOWmxyNXDUmBVFgMYCbqY3EChVkVBzm3dFbz1dOpo5vA&oe=676164A9"
            alt=""
          />
          <p>Mosaddik</p>
        </div>
        <div className="side_link">
          <img
            src="https://scontent.fjsr11-1.fna.fbcdn.net/v/t39.30808-1/470044252_984684550370976_1441804745839809204_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=111&ccb=1-7&_nc_sid=f4b9fd&_nc_eui2=AeGrDuuk3hil0cI6-DIq6HP7iyG8RkZJp4qLIbxGRkmnipU_nhMTanRBKHOmT3YUqbyh4HRVbPEiDhRfY0_jI_Dh&_nc_ohc=43sQ7tqnk6YQ7kNvgEP14iG&_nc_zt=24&_nc_ht=scontent.fjsr11-1.fna&_nc_gid=AKylsV1BH9bt8aDBLnjSz_Y&oh=00_AYAmEIX9OqVHsZKkDJIi3Di40DviGFg0ozjl3O38RlV3zA&oe=67614C39"
            alt=""
          />
          <p>Stack Learner</p>
        </div>
        <div className="side_link">
          <img
            src="https://scontent.fjsr11-1.fna.fbcdn.net/v/t39.30808-1/453533385_1028922685903524_1057529782098097030_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=105&ccb=1-7&_nc_sid=f4b9fd&_nc_eui2=AeGJta76KoykKcLNcqjh-kjiNdDnZi81Go010OdmLzUajaTKoPNp-KB3Fu3o9i7UOU085Aru--1nNGEU8NiSpGpN&_nc_ohc=nVkSC8QHnCkQ7kNvgEGk6pJ&_nc_zt=24&_nc_ht=scontent.fjsr11-1.fna&_nc_gid=AeigFDaKpRySinhuNhaXERr&oh=00_AYC4t0lNaii7FLdXsuG878pjFhRSZD6WhtI-B_ir74qJTw&oe=67617179"
            alt=""
          />
          <p>ProCoder BD</p>
        </div>
        <div className="side_link">
          <img
            src="https://scontent.fjsr11-1.fna.fbcdn.net/v/t39.30808-1/469641818_122109785840631635_2714543020224035914_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=106&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeFI66r2dRzSRChQrmUGysa9Bm9-r-RC75gGb36v5ELvmCmAnGCRbom0YnaG8KvphQ8gy3QQfDSDHzyYr2WeIwV5&_nc_ohc=mu4GZfXXEyQQ7kNvgFUZEUZ&_nc_zt=24&_nc_ht=scontent.fjsr11-1.fna&_nc_gid=AkQ9Jc6y-okJ6IXY_3W2KG_&oh=00_AYDoQ0_BumuO6wE1-cwDfVQ2irzTZxmR7TXbpn_xm7kQTg&oe=676163FE"
            alt=""
          />
          <p>Ridiya Rahi</p>
        </div>
        <div className="side_link">
          <img
            src="https://scontent.fjsr11-1.fna.fbcdn.net/v/t1.6435-1/36883945_1046663155501224_4598270795452514304_n.jpg?stp=c0.0.1746.1746a_dst-jpg_s200x200_tt6&_nc_cat=107&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeGt8hjF5Jrvk2Y518y82JuBvX1sWvH2iQS9fWxa8faJBDl57pSz6Xai33-Rqm24BBoZVJZ_C6-JLVk1M2zw-tTU&_nc_ohc=2vF5Ey2GlNQQ7kNvgGpcRTY&_nc_zt=24&_nc_ht=scontent.fjsr11-1.fna&_nc_gid=AB-fxw2H-qCy7wFHbYFIfaH&oh=00_AYCWYO8oA0ZgDFK7lsXgN1eaMFA9A-j9auGmxqQmRS2dbw&oe=6783070F"
            alt=""
          />
          <p>Wix Squad</p>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
