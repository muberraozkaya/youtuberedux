import { useContext } from "react";
import SideBar from "../components/Sidebar";
import { YoutubeContext } from "../context/youtubeContext";
import Loading from "./../components/Loading";
import VideoCard from "../components/VideoCard";

const Feed = () => {
  const { videos } = useContext(YoutubeContext);
  console.log(videos);
  return (
    <div className="flex gap-4">
      <SideBar />
      <div className="videos">
        {/*
         * 1-videolar yoksa loading bas
         * 2-videolar varsa videoları dön tipi
         * video olan herbiri için ekrana kart bas
         */}
        {!videos ? (
          <Loading type={"video"} />
        ) : (
          videos.map(
            (item) =>
              item.type === "video" && (
                <VideoCard video={item} key={item.videoId} />
              )
          )
        )}
      </div>
    </div>
  );
};

export default Feed;
