import React, { useState, useEffect } from 'react';
import SideBar from './Sidebar';
import Footer from './Footer';
import SidebarRight from './SidebarRight';
import './mainpage.css';
import HeaderMobil from './HeaderMobil';

function MainPage() {
  // État pour stocker la taille de l'écran
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 670);

  // Fonction pour mettre à jour l'état de la taille de l'écran
  const handleWindowSizeChange = () => {
    setIsMobile(window.innerWidth <= 670);
  };

  useEffect(() => {
    // Ajouter un écouteur pour détecter les changements de taille d'écran
    window.addEventListener('resize', handleWindowSizeChange);

    // Retirer l'écouteur lors du démontage du composant
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []); // Le tableau de dépendances vide indique que cet effet ne doit être exécuté qu'une seule fois après le montage initial

  return (
    <div>
      <HeaderMobil />
      <div className="content">
        <div className='side'><SideBar /></div>
        <div className="right"><SidebarRight /></div>
      </div>
      {isMobile && <Footer />}
    </div>
  );
}

export default MainPage;
