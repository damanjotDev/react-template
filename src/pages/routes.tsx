import React, { Component } from 'react';
import { Routes , Route} from 'react-router-dom';
import { Login } from './auth/login';

export const RouteHanding = () => {
 return (
    <Routes>
          <Route path="/" element={<Login />} />
    </Routes>
 )
}