import { Link } from "react-router-dom";
import { API_KEY, value_converter } from "../../../data";
import { useEffect, useState } from "react";
import moment from "moment";

const Feed = ({ category }) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const videoList_url = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=BD&videoCategoryId=${category}&maxResults=50&key=${API_KEY}`;

    await fetch(videoList_url)
      .then((res) => res.json())
      .then((data) => setData(data.items));
  };

  useEffect(() => {
    fetchData();
    console.log(data);
  }, [category]);

  return (
    <div className="feed">
      {data ? (
        data?.map((item, index) => {
          return (
            <Link to={`video/${item.snippet.categoryId}/${item.id}`} className="card" key={item.id}>
              <img src={item.snippet.thumbnails.medium.url} alt="" />
              <h2>{item.snippet.localized.title}</h2>
              <h3>{item.snippet.channelTitle}</h3>
              <p>
                {value_converter(item.statistics.viewCount)} views &bull;{" "}
                {moment(item.snippet.publishedAt).fromNow()}
              </p>
            </Link>
          );
        })
      ) : (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h2>Something is Wrong!</h2>
        </div>
      )}
    </div>
  );
};

export default Feed;
