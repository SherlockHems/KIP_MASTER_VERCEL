import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const App = () => {
  const [salesData, setSalesData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/sales_data')
      .then(response => response.json())
      .then(data => {
        const formattedData = data.salesPerson.map((person, index) => ({
          name: person,
          income: data.cumulativeIncome[index]
        }));
        setSalesData(formattedData);
      });
  }, []);

  return (
    <div>
      <h1>Sales Dashboard</h1>
      <BarChart width={600} height={300} data={salesData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="income" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default App;