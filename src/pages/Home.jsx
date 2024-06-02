
import React from 'react'
// import Navbar from "./components/Navbar";


// import RecentBlogs from "./pages/RecentBlogs";
// import Footer from "./Footer";
// import Navbar from '../components/navbar/Navbar';
import MainSlider from '../components/test/MainSlider';
import Header from '../components/Header/Header'
import News from '../components/test/News';
import Categories from '../components/test/Categories';
import Newsletters from '../components/test/Newsletters';
import Multimedia from '../components/test/Multimedia';
import Gallery from '../components/test/Gallery';

function Home() {
    return (
        <div className=''>
            
            <MainSlider/>
            <News/>
            <Categories/>
            <Newsletters/>
            <Multimedia/>
            <Gallery/>  
            {/* <About /> */}
            {/* <Courses /> */}
            {/* <RecentBlogs/> */}
        </div>
    )
}

export default Home
