import React, { useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './index.css';


 function App() {
  const [histogramData, setHistogramData] = useState([]);
  const [submit, setSubmit] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

   const fetchData = async () => {
    setSubmit(true);
try {
  
  const res = await axios.get('https://www.terriblytinytales.com/test.txt');
    const txt = res.data;
    const words = txt.split(/\s+/);
    const freMap = {};
    words.forEach((word) => {
      if (freMap[word]) {
        freMap[word]++;
      } else {
        freMap[word] = 1;
      }
    });

    const arr = Object.entries(freMap);
    const sortedArr = arr.sort((key, val) => val[1] - key[1]);
    const top20Words = sortedArr.slice(0, 20);
    const histogramData = top20Words.map(([word, frequency]) => ({ word, frequency }));
    setHistogramData(histogramData);
    setSubmit(false);
    setIsSubmitted(true);
    } 
      catch (error) {
      console.error(error);
      setSubmit(false);
     }
  };

   const exportData = () => {
    const csvData = histogramData.map(({ word, frequency }) => `${word},${frequency}`).join('\n');
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'histogram.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

   return (
    <div>
    {!isSubmitted && (
       <button className='button' onClick={fetchData} disabled={submit}> Submit</button>
  )}
     
      {histogramData.length > 0 && (
       <div className='chart1'>
       <div>
          <BarChart className='barChart' width={1000} height={400} data={histogramData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="word" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar className='bar' dataKey="frequency" fill='#584fff' />
          </BarChart>
          <button onClick={exportData}>Export</button>
        </div></div>
        
      )}
    </div>
  );
}
 export default App;