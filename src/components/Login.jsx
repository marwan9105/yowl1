import React from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getDatabase, ref, set } from 'firebase/database';
import { app } from '../../firebase/config';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const auth = getAuth(app);
  const db = getDatabase(app);
  const provider = new GoogleAuthProvider();

  const handleLoginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      // Même fonction pour créer ou mettre à jour le profil de l'utilisateur.
      createOrUpdateUserProfile(user);
      console.log('Utilisateur connecté avec succès:', user);
      navigate('/home');
    } catch (error) {
      console.error('Erreur lors de la connexion de l\'utilisateur:', error.message);
    }
  };

  const createOrUpdateUserProfile = (user) => {
    const userProfileRef = ref(db, 'users/' + user.uid);
    set(userProfileRef, {
      username: user.displayName,
      email: user.email,
      profilePictureUrl: user.photoURL
      // Ajoutez ici d'autres champs si nécessaire.
    });
  };

  return (
    <div>
      <h2>Connexion avec Google</h2>
      <button onClick={handleLoginWithGoogle}>Se connecter avec Google</button>
    </div>
  );
}

export default Login;
