import React, { useState } from 'react';
import Papa from 'papaparse';
import './Styles.css';

const FileUploader = ({ onDataProcessed }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const processFile = () => {
    if (!file) return;
    Papa.parse(file, {
      header: true,
      dynamicTyping: true,
      complete: (results) => {
        const data = results.data.filter(row => row.sales_date && row.product_description && row.quantity_sold);
        onDataProcessed(data);
      },
    });
  };

  return (
    <div>
      <input type="file" accept=".csv" onChange={handleFileChange} />
      <button  className="submit-button"  onClick={processFile}>Submit File</button>
    </div>
  );
};

export default FileUploader;
