import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const Root = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData(); // Fetch initial data when component mounts
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.example.com/data');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          {/* Pass data as props to App component */}
          <App data={data} />
        </Route>
        {/* Add more routes here */}
      </Switch>
    </Router>
  );
};

// Render the Root component instead of directly rendering the App component
ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);

// Report web vitals
reportWebVitals(console.log);
