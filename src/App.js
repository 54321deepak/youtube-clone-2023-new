import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Recommended from './Recommended';
import SearchPage from './SearchPage';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"   //use kiya hai react router 

function App() {
  return (<>
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/search/:searchTerm" element={   <>  {/*:searchTerm is match you write and give result  */}
          <div className='app_page'>
                <Sidebar />
                <SearchPage />
              </div>
              </>
              }>           
          </Route>
          <Route path="/" element={
            <>                                         {/*wrap many*/}
              <div className='app_page'>
                <Sidebar />
                <Recommended />
              </div>
            </>
          }>
          </Route>
        </Routes>
      </Router>
    </div>
  </>);
}

export default App;
