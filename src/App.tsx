import React, { useEffect, useState } from 'react';
import 'chart.js/auto'; // for registering all charts in web
import { RouteHanding } from './pages/routes';


function App() {

  return (
    <div className="w-full h-screen bg-background">

      <RouteHanding/>
    </div>
  );
}

export default App;
