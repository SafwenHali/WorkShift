import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Link,
  BrowserRouter,
  Routes
} from "react-router-dom";

import Test from "./pages/Test";

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Test/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;