import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage";
import PostsPage from "./pages/PostsPage";
import NotFound from "./pages/NotFound";
import NavBar from "./components/NavBar";
import AboutPage from "./pages/AboutPage";
import Triple from "./pages/Triple";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <NavBar/>
          <Routes>
              <Route path='/' element={<MainPage/>}/>
              <Route path="posts" element={<PostsPage/>}/>
              <Route path="about" element={<AboutPage/>}/>
              <Route path="*" element={<NotFound/>}/>
              <Route path="triple" element={<Triple/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
