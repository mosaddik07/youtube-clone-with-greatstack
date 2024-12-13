import { useEffect, useState } from "react";
import thumbnail from "../../assets/img/thumbnail3.png";
import { API_KEY, value_converter } from "../../../data";
import { Link } from "react-router-dom";

const Recommended = ({ categoryId }) => {
  const [apiData, setApiData] = useState([]);

  const fetchData = async () => {
    const relativeVideo_url = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=45&videoCategoryId=${categoryId}&regionCode=BD&key=${API_KEY}`;
    await fetch(relativeVideo_url)
      .then((res) => res.json())
      .then((data) => setApiData(data.items));
  };

  useEffect(() => {
    fetchData();
  });

  return (
    <div className="recommended">
      {apiData.map((item, index) => {
        return (
          <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index}>
            {" "}
            <div key={index} className="side_video_list">
              <img src={item.snippet.thumbnails.medium.url} alt="" />
              <div className="vid_info">
                <h4>{item.snippet.title.slice(0, 80) + "..."}</h4>
                <p>{item.snippet.channelTitle}</p>
                <p>{value_converter(item.statistics.viewCount)} Views </p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Recommended;
