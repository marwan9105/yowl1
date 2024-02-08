import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PagesArtist = () => {
  const [selectedGenres, setSelectedGenres] = useState(new Set());
  const navigate = useNavigate();

  const genresData = [
    { name: 'Classique', icon: '/images/Classique.png' },
    { name: 'Funk', icon: '/images/Funk.png' },
    { name: 'POP', icon: '/images/POP.png' },
    { name: 'Raggae', icon: '/images/Raggae.png' },
    { name: 'Rap Francais', icon: '/images/rapfr.png' },
    { name: 'Techno', icon: '/images/techno.png' },
    { name: 'Rai', icon: '/images/rai.jpg' }, 
    { name: 'K-Pop', icon: '/images/kpop.webp' }, 
  ];

  const toggleGenre = (genreName) => {
    setSelectedGenres((prevSelectedGenres) => {
      const newSelection = new Set(prevSelectedGenres);
      if (newSelection.has(genreName)) {
        newSelection.delete(genreName);
      } else {
        newSelection.add(genreName);
      }
      return newSelection;
    });
  };

  const handleNextStep = () => {
    navigate('/PagesAfter'); 
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-black text-white px-6 py-8">
      <div className="w-full max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-6">Sélectionnez vos genres</h2>
        <p className="text-lg text-center mb-10">
          Commençons par découvrir quels genres musicaux vous passionnent. Quels sont vos genres préférés ?
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {genresData.map((genre) => (
            <button
              key={genre.name}
              className={`flex flex-col items-center justify-center p-6 rounded-xl border-2 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 shadow-lg ${
                selectedGenres.has(genre.name) ? 'bg-gray-700 border-purple-500' : 'bg-gray-800 hover:bg-gray-700'
              }`}
              onClick={() => toggleGenre(genre.name)}
            >
              <img src={genre.icon} alt={genre.name} className="h-32 w-32 mb-4" />
              <span className="text-lg">{genre.name}</span>
            </button>
          ))}
        </div>
        <div className="flex justify-end mt-12">
          <button
            className="bg-purple-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-out shadow-xl hover:shadow hover:bg-purple-700"
            onClick={handleNextStep}
          >
            Suivant
          </button>
        </div>
      </div>
    </div>
  );
};

export default PagesArtist;
