import React, { createContext, useState, useContext, useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import axios from 'axios';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [token, setToken] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const params = new URLSearchParams(window.location.search);
      const dataParam = params.get('data');
     

      if (dataParam) {
        const jsonData = JSON.parse(decodeURIComponent(dataParam));
        console.log(jsonData.token);
        if (jsonData.token) {
          setToken(jsonData.token);
          const decoded = jwt_decode(jsonData.token);
          localStorage.setItem('token1', jsonData.token);
          const userId = decoded.id;

          try {
            const apiUrl = `https://api.suitscardgame.com/api/v1/auth/getuser/${userId}`;
            const response = await axios.get(apiUrl, {
              headers: {
                Authorization: `Bearer ${jsonData.token}`,
              },
            });
            const data = response.data;
            setUserData(data);
          } catch (error) {
            console.error('Error fetching user data:', error);
          }
        }
      }
    };

    fetchData(); // Call the async function
  }, []); 

  const setUser = (data) => {
    setUserData(data);
  };

  return (
    <UserContext.Provider value={{ userData, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};