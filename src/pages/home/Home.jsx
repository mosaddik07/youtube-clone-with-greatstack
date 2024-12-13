import { useState } from "react";
import Feed from "../../component/feed/Feed";
import Sidebar from "../../component/sidebar/Sidebar";

const Home = ({ sidebar }) => {
  const [category, setCategory] = useState(0);

  return (
    <>
      <Sidebar sidebar={sidebar} category={category} setCategory={setCategory} />
      <div className={`container ${sidebar ? "" : "large_container"}`}>
        <Feed category={category} />
      </div>
    </>
  );
};
export default Home;
