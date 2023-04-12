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
import Admin from  "./admin/Admin";
import AdminContenent from "./admin/pages/Contenent"
import AdminArticles from "./admin/pages/Articles"
import AdminAddArticle from "./admin/pages/addArticle"


function App() {
  return (
    
    <BrowserRouter>
      <Routes>
      <Route path="/*" element={<NotFound/>}/>
        {/*public Routes*/}
          <Route path="/" element={<Home/>}/>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/Plans" element={<Plans/>}/>   
          {/*list all Categories*/}
          <Route path="/Categories" element={<Categories/>}/>
          {/*list all Sub Categories by category id*/}
          <Route path="/Category/:id" element={<Category/>}/>
          {/*list all Courses by sub category id*/}

          {/*Course details by id*/}

          {/*list all Articles*/}   
          <Route path="/Articles" element={<ArticleList/>}/>
          {/*Article Page by id*/}
          <Route path="/Articles/:id" element={<Article/>}/>
        {/*Admin Routes*/}
          <Route path="/Admin" element={<Admin/>}/>
          <Route path="/Admin/Manage-Contenent" element={<AdminContenent/>}/>
          <Route path="/Admin/Articles" element={<AdminArticles/>}/>
          <Route path="/Admin/New-Article" element={<AdminAddArticle/>}/>
        {/*Test Routes*/}
        <Route path="/Putin" element={<Test/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;