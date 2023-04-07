import React from "react";

import {
  BrowserRouter as Router,
  Route,
  BrowserRouter,
  Routes
} from "react-router-dom";

import Home from "./pages/Home";
import Article from "./pages/article";
import Test from "./pages/Test";
import ArticleList from "./pages/articleList";

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Categories" element={<Home/>}/>
        <Route path="/Putin" element={<Test/>}/>
        <Route path="/Articles" element={<ArticleList/>}/>
        <Route path="/Articles/articleUniqueTitle" element={<Article/>}/>
        <Route path="/Articles/:id" element={<Article/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;