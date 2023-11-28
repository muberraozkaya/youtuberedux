import React, { useState } from "react";
import millify from "millify";
import { useNavigate } from "react-router-dom";

const VideoCard = ({ video,type }) => {
  const [isHover, setIsHover] = useState(false);
  //div yerine a etiketi verip linki tıklanabilir yapabiliridik ama css anlamında sorun yaşarız,
  //o yüzden div'e onClick verip,navigate tanımlamak sorunu çözmek için daha etkili.
  const navigate = useNavigate()
  //console.log(video)
  return (
    <div
    onClick={() => navigate(`/watch/${video.videoId}`)}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={`cursor-pointer ${type && "row"}`}
    >
      {/**resim kısmı 
       -[] kısımdaki bilgiler js'de dizideki sonuncu 
       elemana ulaşmak için kullanılır*/}
      <div>
        <img
          className={`rounded-lg w-full h-full`}
          //mause üzerindeyse hareketli thumbnail bas
          src={
            isHover && video.richThumbnail
              ? video.richThumbnail[0].url //hoversa ve gif thumbnail varsa
              : video.thumbnail[video.thumbnail.length - 1].url //değilse
          }
        />
      </div>
      {/**detay kısmı */}
      <div className="flex gap-4 mt-5">
        <img
          className={`w-14 h-14 rounded-full ${type && "hidden"}`}
          src={video.channelThumbnail[0].url}
        />
        <div>
          <h4 className={`font-bold ${type && "truncate"} `}>{video.title}</h4>
          <p> {video.channelTitle} </p>
          <div className="flex gap-2">
            <p> {millify(video.viewCount)} görüntülenme </p>
            <p> {video.publishedTimeText} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
