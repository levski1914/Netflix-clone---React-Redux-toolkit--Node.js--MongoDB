import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Netflix from "./pages/Netflix";
import "./app.css";
import Movies from "./pages/Movies";
import TVshows from "./pages/TVshows";
import UserLiked from "./pages/UserLiked";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/movies" element={<Movies />} />
          <Route exact path="/tv" element={<TVshows />} />
          <Route exact path="/mylist" element={<UserLiked />} />
          <Route path="/" element={<Netflix />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
