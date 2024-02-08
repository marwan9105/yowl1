import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate('/login');
  };

  const navigateToSignup = () => {
    navigate('/signup');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Bienvenue sur Notre Plateforme</h1>
        <p className="mb-8 text-lg text-gray-600">Votre espace pour une expérience personnalisée</p>
        <div className="space-x-4">
          <button
            onClick={navigateToSignup}
            className="px-6 py-3 bg-blue-500 text-white text-sm uppercase font-medium rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-700 transition duration-300 ease-in-out"
          >
            S'inscrire avec Google
          </button>
          <button
            onClick={navigateToLogin}
            className="px-6 py-3 bg-green-500 text-white text-sm uppercase font-medium rounded hover:bg-green-600 focus:outline-none focus:bg-green-700 transition duration-300 ease-in-out"
          >
            Se connecter avec Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
