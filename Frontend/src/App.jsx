import React from "react";

import {
  BrowserRouter as Router,
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/signUp";
import Profile from "./Users/Profile";
import EditProfile from "./Users/editProfile";
import NotFound from "./pages/404_not_found";
import Test from "./pages/Test";
import Plans from "./pages/Plans";
import Jobs from "./pages/Jobs";
import JobOffer from "./pages/JobOffer"
import Explore from "./pages/Explore";
import Quiz from "./pages/Quiz/discover";
import QuizHobbies from "./pages/Quiz/hobbies";
import Categories from "./pages/allCategories";
import Category from "./pages/category";
import SubCategory from "./pages/subCategory";
import Formation from "./pages/formation";
import Article from "./pages/article";
import ArticleList from "./pages/articleList";
import Admin from "./admin/Admin";
import AdminContenent from "./admin/pages/Contenent";
import AdminArticles from "./admin/pages/Articles";
import AdminAddArticle from "./admin/pages/addArticle";
import AdminEditArticle from "./admin/pages/editArticle";
import AdminCourses from "./admin/pages/Courses";
import AdminAddCourse from "./admin/pages/addCourse";
import AdminEditCourse from "./admin/pages/editCourse";
import AdminQuiz from "./admin/pages/quiz/Quiz";
import AdminHobbies from "./admin/pages/quiz/Hobbies";
import AdminAddHobby from "./admin/pages/quiz/addHobby";
import AdminEditHobby from "./admin/pages/quiz/editHobby";
import AdminCategories from "./admin/pages/Categories";
import AdminAddCategory from "./admin/pages/addCategory";
import AdminEditCategory from "./admin/pages/editCategory";
import AdminAddSubCategory from "./admin/pages/addSubCategory";
import AdminEditSubCategory from "./admin/pages/editSubCategory";
import Formateur from "./Users/formateur";
import FormateurAddCourse from "./Users/AddCourse";
import Student from "./Users/student";
import Enterprise from "./Users/enterprise";
import EnterpriseAddJobOffer from "./Users/addJobOffer";
import EnterpriseEditJobOffer from "./Users/editJobOffer"

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* To be checked Routes  */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/welcome" element={<Home />} />



        <Route path="/*" element={<NotFound />} />

        <Route path="/register" element={<SignUp />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/User/Profile" element={<Profile />} />
        <Route path="Profile" element={<Profile />} />
        <Route path="/User" element={<Profile />} />
        <Route path="/Edit-Profile" element={<EditProfile />} />
        <Route path="/Plans" element={<Plans />} />
        <Route path="/Explore" element={<Explore />} />
        {/*Quiz*/}
        <Route path="/Find-A-Job" element={<Jobs />} />
        <Route path="/JobOffer/:id" element={<JobOffer />} />
        {/*Quiz*/}
        <Route path="/Discover" element={<Quiz />} />
        <Route path="/Hobbies" element={<QuizHobbies />} />
        {/*list all Categories*/}
        <Route path="/Categories" element={<Categories />} />
        {/*list all Sub Categories by category id*/}
        <Route path="/Category/:id" element={<Category />} />
        {/*list all Courses by sub category id*/}
        <Route path="/SubCategory/:id" element={<SubCategory />} />
        {/*Course details by id*/}
        <Route path="/Formation/:id" element={<Formation />} />
        {/*list all Articles*/}
        <Route path="/Articles" element={<ArticleList />} />
        {/*Article Page by id*/}
        <Route path="/Articles/:id" element={<Article />} />
        {/*Admin Routes*/}
        <Route path="/Admin" element={<Admin />} />
        <Route path="/Admin/Dashboard" element={<Admin />} />
        <Route path="/Admin/Manage-Contenent" element={<AdminContenent />} />
        <Route path="/Admin/Contenent" element={<AdminContenent />} />
        <Route path="/Admin/Articles" element={<AdminArticles />} />
        <Route path="/Admin/New-Article" element={<AdminAddArticle />} />
        <Route path="/Admin/Edit-Article/:id" element={<AdminEditArticle />} />
        <Route path="/Admin/Courses" element={<AdminCourses />} />
        <Route path="/Admin/New-Course" element={<AdminAddCourse />} />
        <Route path="/Admin/Edit-Course/:id" element={<AdminEditCourse />} />
        <Route path="/Admin/Manage-Quiz" element={<AdminQuiz />} />
        <Route path="/Admin/Quiz" element={<AdminQuiz />} />
        <Route path="/Admin/Quiz/Hobbies" element={<AdminHobbies />} />
        <Route path="/Admin/Quiz/New-Hobby" element={<AdminAddHobby />} />
        <Route path="/Admin/Quiz/Edit-Hobby/:id" element={<AdminEditHobby />} />
        <Route path="/Admin/Categories" element={<AdminCategories />} />
        <Route path="/Admin/New-Category" element={<AdminAddCategory />} />
        <Route path="/Admin/Edit-Category/:id" element={<AdminEditCategory />}/>
        <Route path="/Admin/New-SubCategory/:id"element={<AdminAddSubCategory />}/>
        <Route path="/Admin/Edit-SubCategory/:id"element={<AdminEditSubCategory />}/>
        {/*Formateur Routes*/}
        <Route path="/Formateur" element={<Formateur />} />
        <Route path="/Formateur/AddCourse" element={<FormateurAddCourse />} />
        {/*student Routes*/}
        <Route path="/Student" element={<Student />} />
        {/*Enterprise Routes*/}
        <Route path="/Enterprise" element={<Enterprise />} />
        <Route path="/Enterprise/New-Job-Offer" element={<EnterpriseAddJobOffer />} />
        <Route path="/Enterprise/New-Post" element={<EnterpriseAddJobOffer />} />
        <Route path="/Enterprise/Add-Job-Offer" element={<EnterpriseAddJobOffer />} />
        <Route path="/Enterprise/Edit-Job-Offer" element={<EnterpriseAddJobOffer />} />
        <Route path="/Enterprise/Edit-Post/:id" element={<EnterpriseEditJobOffer />} />
        {/*Test Routes*/}
        <Route path="/Putin" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
