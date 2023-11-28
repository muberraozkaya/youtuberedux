import { Link, useNavigate } from "react-router-dom";
import { BsBell, BsSearch } from "react-icons/bs";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";

const Header = () => {

  const navigate = useNavigate();
  //kullanıcıyı arama sonuçları sayfasına yönlendir
  // url e arama parametresi olarak aratılan terimi ekle
  const handleSubmit = (e) => {
    e.preventDefault();
    const text = e.target[0].value;
    navigate(`/results?search_query=${text}`);
  };

   // Path params (Yol Parametreleri) > useParams
  // www.amazon.com/ürün/60

  // Query Params (Arama Parametreleri) > useSearchParams
  // www.youtube.com/watch?id=12&start=47
  
  return (
    <header className="flex justify-between px-4 items-center">
      {/**tailwind'de özel değer atamak istersek [] kullanırız. ör:gap-[21px] */}
      <Link className="flex items-center">
        <img
          className="mt-2 hover:scale-110 transition-transform duration-300"
          width={80}
          src="/yt-logo.png"
        />
        <h1 className="text-2xl hidden md:block">Youtube</h1>
      </Link>

      <form
        onSubmit={handleSubmit}
        className="flex items-center border border-gray-400 rounded-[20px]"
      >
        <input
          placeholder="ör: mymecra"
          className="bg-black outline-none rounded-[20px] px-3 py-1"
          type="search"
        />
        <button className="grid place-items-center border-1 px-2 text-xl">
          <BsSearch />
        </button>
      </form>

      <div className="flex gap-2 text-xl cursor-pointer">
        <div className="p-2 transition duration-500 hover:bg-gray-700 rounded-full">
          <BsBell />
        </div>
        <div className="p-2 transition duration-500 hover:bg-gray-700 rounded-full">
          <AiOutlineVideoCameraAdd />
        </div>
      </div>
    </header>
  );
};

export default Header;
