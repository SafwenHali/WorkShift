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
import NotFound from "./pages/404_not_found";

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
      <Route path="/*" element={<NotFound/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/Home" element={<Home/>}/>     
        <Route path="/Articles" element={<ArticleList/>}/>
        <Route path="/Articles/articleUniqueTitle" element={<Article/>}/>
        <Route path="/Articles/:id" element={<Article/>}/>
        
        <Route path="/Putin" element={<Test/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;