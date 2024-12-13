import like from "../../assets/img/like.png";
import dislike from "../../assets/img/dislike.png";
import share from "../../assets/img/share.png";
import save from "../../assets/img/save.png";
import { useEffect, useState } from "react";
import { API_KEY, value_converter } from "../../../data";
import moment from "moment";
import { useParams } from "react-router-dom";

const PlayVideo = () => {
  const { videoId } = useParams();

  const [apiData, setApiData] = useState(null);
  const [channelData, setChannelData] = useState(null);
  const [commentData, setCommentData] = useState([]);
  console.log("Comment", commentData);

  const fetchVideoData = async () => {
    //fetching video data
    const videoDetails_url = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoId}&key=${API_KEY}`;
    await fetch(videoDetails_url)
      .then((res) => res.json())
      .then((data) => setApiData(data.items[0]));
  };

  const fetchOtherData = async () => {
    //fetch channel data
    const videoDetails_url = `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics,contentDetails&id=${apiData.snippet.channelId}&key=${API_KEY}`;
    await fetch(videoDetails_url)
      .then((res) => res.json())
      .then((data) => setChannelData(data.items[0]));

    //fetch comment data
    const comment_url = `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet,replies&videoId=${videoId}&key=${API_KEY}`;
    await fetch(comment_url)
      .then((res) => res.json())
      .then((data) => setCommentData(data.items));
  };

  useEffect(() => {
    fetchVideoData();
  }, [videoId]);

  useEffect(() => {
    fetchOtherData();
  }, [apiData]);

  return (
    <div className="play_video">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      {console.log(apiData)}
      <h3>{apiData ? apiData.snippet.title : "Title here.."}</h3>
      <div className="play_video_info">
        <p>
          {apiData ? value_converter(apiData.statistics.viewCount) : "0"} Views &bull;{" "}
          {apiData ? moment(apiData.snippet.publishedAt).fromNow() : ""} ago
        </p>
        <div>
          <span>
            <img src={like} alt="" /> {apiData ? value_converter(apiData.statistics.likeCount) : ""}
          </span>
          <span>
            <img src={dislike} alt="" />
          </span>
          <span>
            <img src={share} alt="" /> Share
          </span>
          <span>
            <img src={save} alt="" /> Save
          </span>
        </div>
      </div>
      <div className="publisher">
        <img src={channelData ? channelData?.snippet?.thumbnails?.default.url : ""} alt="" />
        <div>
          <p className="channelTitle">{apiData ? apiData.snippet.channelTitle : "Mosaddik"}</p>
          <span>
            {channelData ? value_converter(channelData.statistics.subscriberCount) : ""} Subscribers
          </span>
          {/* <button className="subscribeBtn">Subscribe</button> */}
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid_description">
        <p>{apiData ? apiData.snippet.description.slice(0, 250) + "..." : ""}</p>
        <hr />
        <h4>{apiData ? value_converter(apiData.statistics.commentCount) : ""} Comments</h4>

        {commentData.map((item, index) => {
          return (
            <div key={index} className="comment">
              <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
              <div>
                <h3>
                  {item.snippet.topLevelComment.snippet.authorDisplayName}{" "}
                  <span>{moment(item.snippet.topLevelComment.snippet.publishedAt).fromNow()} ago</span>
                  <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                  <div className="comment_action">
                    <img src={like} alt="" />
                    <span>{value_converter(item.snippet.topLevelComment.snippet.likeCount)}</span>
                    <img src={dislike} alt="" />
                  </div>
                </h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PlayVideo;
