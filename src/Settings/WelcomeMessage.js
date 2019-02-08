import React from 'react';
import { AppContext } from '../App/AppProvider';

export default props => (
  <AppContext.Consumer>
    {({firstVisit}) => 
      firstVisit ? 
        <div> 
          Welcome to CryptoDashboard, please select your favorite coins to begin.{' '} 
        </div>
      : null
  
    }
  </AppContext.Consumer>
  );