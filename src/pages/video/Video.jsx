import { useParams } from "react-router-dom";
import PlayVideo from "../../component/playVideo/PlayVideo";
import Recommended from "../../component/Recommended/Recommended";

const Video = () => {
  const { videoId, categoryId } = useParams();
  return (
    <div className="play_container">
      <PlayVideo videoId={videoId} />
      <Recommended categoryId={categoryId} />
    </div>
  );
};
export default Video;
