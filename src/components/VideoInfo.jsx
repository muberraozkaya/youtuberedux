import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getData } from "./../helpers/getData";
import Loading from "../components/Loading";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import StringArea from "./StringArea";
import millify from "millify";
import moment from "moment/moment";
import "moment/locale/tr";

const VideoInfo = () => {
  //https://yt-api.p.rapidapi.com/video/info
  const { id } = useParams();
  const [detail, setDetail] = useState(null);
  const [channel, setChannel] = useState(null);

  //videonun detay bilgileri kanal id'si içinde merdiven gibi istekler
  //gerektirdiğinden async await kullanmamız lazım. useEffect async
  //kullanmamıza kızdığı için yeni fonk tanımlıyoruz
  const getInfos = async () => {
    //kanalın id'si ve video info
    const detailRes = await getData(`/video/info?id=${id}`);
    //önceki istekten kanalın id'sini kullanarak kanal detaylarına erişilir
    const channelRes = await getData(
      `/channel/about?id=${detailRes.data.channelId}`
    );

    setDetail(detailRes.data);
    setChannel(channelRes.data);
  };
  useEffect(() => {
    setDetail(null);
    setChannel(null);
    getInfos();
  }, [id]);

  if (!detail || !channel) {
    return <Loading type={"detail"} />;
  }

  console.log(detail, channel);

  return (
    <>
      <h1 className="mt-3 text-xl font-bold">{detail.title}</h1>
      <div className="flex justify-between mt-3">
        <div className="flex item-center gap-4">
          <img
            className="rounded-full w-12 h-12"
            src={channel.avatar[0].url}
            alt=""
          />
          <div>
            <h4 className="font-bold"> {channel.title} </h4>
            <p className="text-gray-400">{channel.subscriberCountText} abone</p>
          </div>
          <button className="bg-white rounded-full text-black px-3 h-9 transition hover:bg-gray-400">
            Abone Ol
          </button>
        </div>
        <div className="flex items-center rounded-full bg-gray-600 ">
          <div className="flex items-center gap-3 py-2 px-4 border-r">
            <AiFillLike />
            <p>{Math.round(Math.random() * 100)}B</p>
          </div>
          <div className="py-2 px-4">
            <AiFillDislike />
          </div>
        </div>
      </div>

      <div className="bg-gray-600 rounded p-2 mt-4 cursor-pointer hover:bg-gray-700">
        <div className="flex gap-3">
          <p>{millify(detail.viewCount)} izlenme</p>
          <p>{moment(detail.publishDate).fromNow()}</p>
        </div>
        <StringArea text={detail.description} max={300} />
      </div>
    </>
  );
};

export default VideoInfo;
