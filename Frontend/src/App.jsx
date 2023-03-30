import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Link,
  BrowserRouter,
  Routes
} from "react-router-dom";

import Test from "./pages/Test";
import ArticleList from "./pages/articleList";

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Test/>}/>
        <Route path="/a" element={<ArticleList/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;