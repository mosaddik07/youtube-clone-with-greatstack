import Feed from "../../component/feed/Feed";
import Sidebar from "../../component/sidebar/Sidebar";

const Home = ({ sidebar }) => {
  return (
    <>
      <Sidebar sidebar={sidebar} />
      <div className={`container ${sidebar ? "" : "large_container"}`}>
        <Feed />
      </div>
    </>
  );
};
export default Home;
