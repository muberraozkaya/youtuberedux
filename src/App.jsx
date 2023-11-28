import { BrowserRouter, Route, Routes } from "react-router-dom";
import Feed from "./pages/Feed";
import VideoDetail from "./pages/VideoDetail";
import SearchResaults from "./pages/SearchResaults";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Feed/>}/>
      <Route path="/watch/:id" element={<VideoDetail/>}/>
      <Route path="/results" element={<SearchResaults/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
