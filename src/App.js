import React from 'react'
import MainRoutes from './Pages/MainRoutes';
import Header from './Components/Header';

const App = () => {
  const port = process.env.REACT_APP_JSON_SERVER_PORT;

  return (
    <div>
      <Header/>
      <MainRoutes/>
      
    </div>
  )
}

export default App