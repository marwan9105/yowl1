import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './components/Signup';
import PagesArtist from './pages/PagesArtist';
import PagesAfter from './pages/PagesAfter';
import Profile from './pages/Profile'; 
import CGU from './pages/cgu'; 
import CGV from './pages/cgv'; 
import Conf from './pages/conf'; 
import MainPage from './pages/MainPage';
import Search from './pages/Search';
import Communaute from './pages/Communaute';
import Setting from './pages/Setting';
import Notif from './pages/Notif';
import CondEtPol from './pages/condEtPol';
import Confid from './pages/Confid';
import Securite from './pages/Securite';
import VotreCompte from './pages/VotreCompte';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/pagesartist" element={<PagesArtist />} />
          <Route path="/pagesafter" element={<PagesAfter />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cgu" element={<CGU />} /> 
          <Route path="/cgv" element={<CGV />} /> 
          <Route path="/confidentialite" element={<conf/>} />
          <Route path="mainpage" element={<MainPage />} />
          <Route path="recherche" element={<Search />} />
          <Route path="communaute" element={<Communaute />} />
          <Route path="setting" element={<Setting />} />
          <Route path="notification" element={<Notif />} /> 
          <Route path="condition-politique" element={<CondEtPol />} /> 
          <Route path="confidentialite" element={<Confid />} /> 
          <Route path="securite" element={<Securite />} /> 
          <Route path="votre-compte" element={<VotreCompte />} />
          <Route path="cdu" element={<Conf />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
