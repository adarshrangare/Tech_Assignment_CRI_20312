import React from 'react';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import HomePage from './HomePage';
import LogIn from './LogIn';
import MovieDetail from './MovieDetail';

const PrivateRoute = ({ children }) => {
  const { isAuth } = useSelector((state) => state.auth);
  const location = useLocation();

  return isAuth ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location.pathname }} />
  );
};

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LogIn />} />
      <Route
        path="/movie/:id"
        element={
          <PrivateRoute>
            <MovieDetail />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default MainRoutes;
