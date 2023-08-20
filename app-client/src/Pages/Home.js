import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [territories, setTerritories] = useState([]);

  useEffect(() => {
    fetchTerritories();
  }, []);

  const fetchTerritories = async () => {
    try {
      const response = await axios.get('http://localhost:5000/territories');
      setTerritories(response.data.data);
    } catch (error) {
      console.error('Error fetching territories', error);
    }
  };

  const createTerritoryTree = (territoriesList, parentId = null) => {
    const childTerritories = territoriesList.filter(
      (territory) => territory.parent === parentId
    );

    return childTerritories.map((territory) => (
      <li key={territory.id}>
        <span className="caret">{territory.name}</span>
        <ul className="nested">
          {createTerritoryTree(territoriesList, territory.id)}
        </ul>
      </li>
    ));
  };

  return (
    <div>
      <h2>Territories</h2>
      <p>Here are the list of territories</p>
      <ul id="myUL">{createTerritoryTree(territories)}</ul>
    </div>
  );
};

export default Home;