"use client"


import Hero from './components/HeroSection';
import CategoryBrowsing from './components/category';
import Posts from './components/post';
import TopDestination from './components/Destination';
import Post from "./components/postcomment"

const Home: React.FC = () => {
  

  return (
    <div>
      {/* <Post/> */}
      <Hero />
      

      <CategoryBrowsing/>
       <Post/>
      <Posts  />
      <TopDestination />
      
    
    </div>
  );
};

export default Home;
