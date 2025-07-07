import React, { useState } from 'react';
import OverviewCards from './components/OverviewCards';
import ActivityChart from './components/ActivityChart';
import TopPostsTable from './components/TopPostsTable';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import PlatformCards from './components/PlatformCards';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`d-flex flex-column vh-100 ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>      
      <div className="d-flex flex-grow-1 overflow-hidden">
        <Sidebar darkMode={darkMode} setDarkMode={setDarkMode} />
        <div className="flex-grow-1 d-flex flex-column overflow-auto">
          <Header darkMode={darkMode} />
          <main className="flex-grow-1 p-4">
            <PlatformCards darkMode={darkMode}/>
            <ActivityChart darkMode={darkMode} />
            <OverviewCards darkMode={darkMode}/>
            <TopPostsTable darkMode={darkMode}/>
          </main>
          <Footer darkMode={darkMode} />
        </div>
      </div>
    </div>
  );
};

export default App;
