import React from 'react';
import Calculate from './Calculate';

import { CalculateProvider } from './reducer/Reducer';

const App = () => {

  return (
    <CalculateProvider>
      <Calculate />
    </CalculateProvider>
  )
}

export default App;