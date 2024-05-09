import "./assets/css/style.css";
import React from "react";
import ReactDOM from "react-dom/client";
import MasterLayout from "./layouts/MasterLayout";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AlbumPage from "./pages/Album";
import PlaylistPage from "./pages/PlaylistPage";
import PlaySongPage from "./pages/PlaySong";
import SearchPage from "./pages/SearchPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MasterLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/album/:id" element={<AlbumPage />} />
          <Route path="/playlist/:id" element={<PlaylistPage />} />
          <Route path="/playsong/:id" element={<PlaySongPage />} />
          <Route path="/search/:query" element={<SearchPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
