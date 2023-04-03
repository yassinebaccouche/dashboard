import React from 'react';
import Sidebar from '../../components/Sidebar';
import { ChartsHeader, Stacked as StackedChart } from '../../components';

const Stacked = () => (
  
  <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
    <div className="flex">
  <div className="w-1/5 ">
   <Sidebar />
 </div>
    <ChartsHeader category="Stacked" title="Revenue Breakdown" />
    <div className="w-full">
      <StackedChart />
    </div>
  </div>
  </div>
);

export default Stacked;
