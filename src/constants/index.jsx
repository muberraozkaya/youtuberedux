import { BsFire } from "react-icons/bs";
import {
  FaBolt,
  FaCog,
  FaCommentAlt,
  FaFilm,
  FaGamepad,
  FaGraduationCap,
  FaHistory,
  FaMusic,
  FaNewspaper,
  FaPalette,
  FaQuestionCircle,
} from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import {MdLiveTv} from 'react-icons/md'

/**kategoriler */

export const categories = [
  { name: "Anasayfa", icon: <AiFillHome />, type: "home" },
  { name: "Trend", icon: <BsFire />, type: "trending" },
  { name: "Müzik", icon: <FaMusic />, type: "category" },
  { name: "Filmler", icon: <FaFilm />, type: "category" },
  { name: "Canlı", icon: <MdLiveTv />, type: "category" },
  { name: "Oyun", icon: <FaGamepad />, type: "category" },
  { name: "Haberler", icon: <FaNewspaper />, type: "category" },
  { name: "Spor", icon: <FaBolt />, type: "category" },
  { name: "Eğitici", icon: <FaGraduationCap />, type: "category" },
  /**objenin altındaki çizgiyi divider sağlar */
  { name: "Güzellik & Kozmetik", icon: <FaPalette />, type: "category", divider:true},
  { name: "Ayarlar", icon: <FaCog />, type: "menu" },
  { name: "Report History", icon: <FaHistory />, type: "menu" },
  { name: "Yardım", icon: <FaQuestionCircle />, type: "menu" },
  { name: "Send Feedback", icon: <FaCommentAlt />, type: "menu" },
];
