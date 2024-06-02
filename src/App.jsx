import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from "./pages/Home"
import Footer from "./pages/Footer"
import Kitaphana from "./pages/Kitaphana"
import Mumkincilik from "./pages/YashlarMumkinchilik"
import Category from "./pages/MumkinCategory"
import Vacancy from "./pages/Vacancy"
import AboutVac from "./pages/AboutVacancy"
import NewsLetter from "./pages/NewsLetter"
import Search from "./pages/SearchBar";

import { useState } from "react";
import { useTranslation } from "react-i18next";

const App = () => {
  
  const { t, i18n: {changeLanguage, language} } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(language)
  const handleChangeLanguage = () => {
   const newLanguage = currentLanguage === "en" ? "tk" : "en";
   setCurrentLanguage(newLanguage);
   changeLanguage(newLanguage);
 }
  
  return (
    <>
    <div className="flex min-h-[100vh] flex-col">
      <Navbar /> 

      <div className="grow">
      {/* <Home /> */}
      <div>
        
      </div>
      <Routes>
          
          <Route path="yashlar-homepg/" exact element={<Home />} />
          <Route path="/library" element={<Kitaphana />} />
          <Route path="/mumkincilik" element={<Mumkincilik />} />
          <Route path="/category" element={<Category />} />
          <Route path="/vacancy" element={<Vacancy />} />
          <Route path="/vacancy/about" element={<AboutVac />} />
          <Route path="/makala" element={<NewsLetter />} />
          <Route path="/search" element={<Search />} /> 
      </Routes>

     


      <Footer /> 

      {/* <h1>
       Our Translated Header: 
       {t('headerTitle', { appName: "App for Translations" })}
     </h1>
     <h3>
       Current Language: {currentLanguage}
     </h3>
     <button 
        type="button" 
        onClick={handleChangeLanguage}
     >
      Change Language
     </button> */}
      </div>
    </div>
      


    </>
  )
}

export default App
