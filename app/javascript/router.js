import React from 'react';
import { Routes, Route } from 'react-router-dom';
import WelcomeRoute from './routes/WelcomeRoute';

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<WelcomeRoute />} />
      </Routes>
    </>
  );
}

export default Router;