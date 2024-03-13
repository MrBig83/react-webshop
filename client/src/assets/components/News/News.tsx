import React from 'react';
import Sidebar from '../Sidebar/Sidebar';


const News: React.FC = () => {
  return (
    <>
      <h1>Nyheter</h1>
      <Sidebar />
      <p>Vi har tyvärr inga nyheter för tillfället</p>
      
    </>
  );
};

export default News;