import React from 'react';
import Sidebar from '../../components/Sidebar';
import { ChartsHeader, LineChart } from '../../components';

const Line = () => (
  
  <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <div className="flex">
    <div className="w-1/5 ">
     <Sidebar />
   </div>
    <ChartsHeader category="Line" title="Inflation Rate" />
    <div className="w-full">
      <LineChart />
    </div>
  </div>
  </div>
);

export default Line;
