import axios from "axios"

//istek ile gönderilmesi gereken kimilk
const options = {
  params: {
    geo: 'TR',
    lang:'tr'
  },
    headers: {
      'X-RapidAPI-Key': '6da412b40cmsh1dabdc248e454a7p1ff4e9jsna9459f37cede',
      'X-RapidAPI-Host': 'yt-api.p.rapidapi.com'
    }
  };


//api'ye verdiğimiz endpoint içi
//istek atıp verileri döndüren bir fonksiyon yazı
//?bir çok type için ayrı axios.get yazmak yerine 
//?bunu yapmak temiz kod için önemli

// todo: base url tanımla (axios için özel bir kullanım)
//bütün isteklerin (baseurl) başlangıcı olan url'i tanımlar
axios.defaults.baseURL='https://yt-api.p.rapidapi.com';

//!Bir programlama bağlamında, asenkron 
//!programlama, bir işlem veya görevin 
//!tamamlanmasını beklemek yerine diğer 
//!işlemlerin devam etmesine izin veren bir 
//!programlama paradigmasıdır.
//base url tanımlandığı için fonk url yerine path kullanılır
export const getData = async (path) => {
try {
    //parametre oalrak gelen yola istek atar
    //return ile de aldığı verileri döndürür
   return await axios.get(path,options);
} catch(err) {
    console.log("verileri çekerken bir hata oluştu");
}
}