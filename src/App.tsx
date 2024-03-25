import React, { useEffect, useState } from 'react';
import 'chart.js/auto'; // for registering all charts in web
import { RouteHanding } from './pages/routes';
import MultiSelect from './components/inputs/multiSelect';


function App() {

  return (
    <div className="w-full h-auto bg-background">
  {/* <MultiSelect id='select' value={[{value:1,label:'hi'}]} label='dropdown' onChange={(res: any)=>console.log(res)} options={[{value:1,label:'hi'},{value:2,label:'hi12'},{value:3,label:'hi3'},{value:4,label:'hi4'}]}/> */}
      <RouteHanding/>

    
    </div>
  );
}

export default App;
