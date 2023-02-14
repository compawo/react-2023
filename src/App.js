import React from 'react';
import {Comments, Posts, Users} from "./components";


const App = () => {
  return (
      <div>
          <Users/>
          <Posts/>
          <Comments/>
      </div>
  );
};

export {App};
