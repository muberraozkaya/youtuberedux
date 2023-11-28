import { categories } from "./../constants/index";
import { useContext } from "react";
/**abone olmak istediğim context */
import { YoutubeContext } from "../context/youtubeContext";

const SideBar = () => {
  /**sidebar bileşeninden youtubecontext'deki videolara 
   * erişmek istiyorum bu nedenle abone olmam gerek > useContext */
 const {selectedCategory, setSelectedCategory}= useContext(YoutubeContext);
  return (
    /**kendini tekrar eden ve dinamik olmayan yapılarda map kullanırız */

    <div className="flex flex-col px-2 md:px-6">
      {categories.map((item) => (
        <div onClick={() => setSelectedCategory(item)} key={item.name}>
          <div 
          //eğer ki ekrana bastığımız kategori değeri seçili ise arka plan ver
          style={{background: selectedCategory.name === item.name && "#2d2d2d"}} 
          className="flex items-center gap-2 py-4 px-2 md:px-3 md:text-lg cursor-pointer rounded-md hover:bg-[#2d2d2d]">
            <span className="max-sm:text-2xl">{item.icon}</span>
            <span className="max-sm:hidden">{item.name}</span>
          </div>
          {/*itemin divider değeri true ise çizgi bas */}
          {item.divider && <hr />}
        </div>
      ))}
    </div>
  );
};

export default SideBar;
