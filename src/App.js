import React, { useState } from 'react';
import FileUploader from './FileUploader';
import SalesForecasting from './SalesForecasting';
import './Styles.css';

const App = () => {
  const [data, setData] = useState(null);

  return (
    <div >
      <h1 style={{ textAlign: 'center', fontFamily: 'Montserrat, sans-serif', fontSize: '55px', marginBottom: '50px', color: '#ffffff' }}>Sales Forecasting</h1>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        {!data && <FileUploader onDataProcessed={setData} />}
        {data && <SalesForecasting data={data} />}
      </div>
    </div>
  );
};

export default App;
