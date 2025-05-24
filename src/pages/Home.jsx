import React from 'react';
import Banner from '../components/Banner';
import FeaturedGardeners from '../components/FeaturedGardeners';
import { useLoaderData } from 'react-router';
import TrendingTips from '../components/TrendingTips';
import Tyewriter from '../components/Tyewriter';
import SeasonalTips from '../components/SeasonalTips';
import GardenTools from '../components/GardenTools';

const Home = () => {
  const users = useLoaderData();
  console.log(users);
  return (
    <div> 
      <Tyewriter></Tyewriter>
      <Banner></Banner>

      
      
      


       
      <div>
        <h1 className=' font-bold pb-2 text-4xl text-center text-green-700 mt-10'>Featured Gardeners</h1>
        <div  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-5 pb-16">
        
        {
        users.map(user => <FeaturedGardeners key={user._id} user={user}></FeaturedGardeners>)
      }
      </div>
      </div>
      <TrendingTips></TrendingTips>

      <SeasonalTips></SeasonalTips>

      <GardenTools></GardenTools>
      
    </div>
  );
};

export default Home;