import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { app } from '../../firebase/config'; // Assurez-vous que ce chemin est correct

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth(app);
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });
  }, []);

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-xl font-semibold">Chargement...</div>
      </div>
    );
  }

  return (
    <div className="profile-container max-w-4xl mx-auto my-10 p-5 shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-4">Profil Utilisateur</h1>
      <div className="user-info flex flex-col items-center">
        <img
          src={user.photoURL}
          alt="Photo de profil"
          className="w-24 h-24 rounded-full mb-4"
        />
        <p className="text-lg"><span className="font-semibold">Pseudo :</span> {user.displayName}</p>
        <p className="text-lg mb-4"><span className="font-semibold">Email :</span> {user.email}</p>
        
        <a href='/mainpage' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4">
          Continuer
        </a>
        
        <div className="text-center text-sm">
          <p>En créant le compte, vous acceptez les <a href="/cgu" className="text-blue-500 underline">CGU</a> et <a href="/cgv" className="text-blue-500 underline">CGV</a> ainsi que notre <a href="/conf" className="text-blue-500 underline">Politique de Confidentialité</a> du site IMELO.</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
