import { createContext, useEffect, useState } from "react";
import { categories } from "./../constants/index";
import { getData } from "./../helpers/getData";

/**createContext yapısı: veri paylaşımını kolaylaştırır
 * context'de tutulan verileri uygulamaya aktarır
 */
export const YoutubeContext = createContext();

export function YoutubeProvider({ children }) {
  /**seçili kategori */
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  /**videoları tutar */
  const [videos, setVideos] = useState(null);

  //API çekmek için
  useEffect(() => {
    //api'den video çeker
    if (
      selectedCategory.type === "home" ||
      selectedCategory.type === "trending"
    ) {
      //yardımcı fonk kullanıp api isteği atma
      getData(`/${selectedCategory.type}`).then((res) =>
        setVideos(res.data.data)
      );
    }

    //tip kategoriyse o kategori için istek at
    if (selectedCategory.type === "category") {
      getData(`/search?query=${selectedCategory.name}&type=video`).then((res) =>
        //state'i güncelle
        setVideos(res.data.data)
      );
    }
  }, [selectedCategory]);

  return (
    <YoutubeContext.Provider
      /**value tek değer alır ama ben 3 elemanı
       * kullanmak istiyorum bu yüzden obje şeklinde vermek için {{}} şeklinde değer verdim*/
      value={{ selectedCategory, setSelectedCategory, videos }}
    >
      {children}
    </YoutubeContext.Provider>
  );
}
