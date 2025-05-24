import React from 'react';
import Banner from '../components/Banner';
import FeaturedGardeners from '../components/FeaturedGardeners';
import { useLoaderData } from 'react-router';
import TrendingTips from '../components/TrendingTips';
import Tyewriter from '../components/Tyewriter';

const Home = () => {
  const users = useLoaderData();
  console.log(users);
  return (
    <div> 
      <Tyewriter></Tyewriter>
      <Banner></Banner>

      
      
      



      <div  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-5 py-16">
        {
        users.map(user => <FeaturedGardeners key={user._id} user={user}></FeaturedGardeners>)
      }
      </div>
      <TrendingTips></TrendingTips>
      
    </div>
  );
};

export default Home;