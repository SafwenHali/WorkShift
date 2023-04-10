import React from "react";

import {
  BrowserRouter as Router,
  Route,
  BrowserRouter,
  Routes
} from "react-router-dom";

import Home from "./pages/Home";
import Test from "./pages/Test";
import NotFound from "./pages/404_not_found";
import Categories from "./pages/allCategories"
import Plans from "./pages/Plans";
import Article from "./pages/article";
import ArticleList from "./pages/articleList";
import Category from "./pages/category";

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
      <Route path="/*" element={<NotFound/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/Home" element={<Home/>}/>   
        <Route path="/Categories" element={<Categories/>}/>
        <Route path="/Category/:id" element={<Category/>}/>

        <Route path="/Plans" element={<Plans/>}/>   
        <Route path="/Articles" element={<ArticleList/>}/>
        <Route path="/Articles/articleUniqueTitle" element={<Article/>}/>
        <Route path="/Articles/:id" element={<Article/>}/>
        
        <Route path="/Putin" element={<Test/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;