import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getDatabase, ref, set } from 'firebase/database';
import { app } from '../../firebase/config';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();
  const auth = getAuth(app);
  const db = getDatabase(app);
  const provider = new GoogleAuthProvider();

  const handleSignupWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      // Appel à une fonction pour créer ou mettre à jour le profil utilisateur dans la base de données.
      createOrUpdateUserProfile(user);
      console.log('Utilisateur créé avec succès:', user);
      navigate('/PagesArtist');
    } catch (error) {
      console.error('Erreur lors de la création de l\'utilisateur avec Google:', error.message);
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
      <h2>Inscription avec Google</h2>
      <button onClick={handleSignupWithGoogle}>S'inscrire avec Google</button>
    </div>
  );
}

export default Signup;
