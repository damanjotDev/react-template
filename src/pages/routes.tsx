import React, { Component } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Login } from './auth/login';
import { Dashboard } from './main/dashboard';
import { RoutesName } from '../utils/constant';
import { Sidebar } from '../components/navbars/sidebar';
import { Navbar } from '../components/navbars/navbar';
import { Profile } from './main/profile';

const RouteHanding = () => {

      const isLogin = true;

      if (isLogin) {
            return (
                  <div className='w-full h-full'>
                        <Sidebar />
                        <Navbar/>
                        <Routes>

                              <Route path={RoutesName.Dashboard} element={<Dashboard />} />
                              <Route path={RoutesName.Profile} element={<Profile/>}/>

                              {/* Not Found route */}
                              <Route path="*" element={<h1>Not Found</h1>} />
                        </Routes>
                  </div>
            )
      }


      else {
            return (
                  <Routes>
                        // Route for login page
                        <Route path="/" element={<Login />} />
                        {/* Not Found route */}
                        <Route path="*" element={<h1>Not Found</h1>} />
                  </Routes>
            )
      }
}

export { RouteHanding }