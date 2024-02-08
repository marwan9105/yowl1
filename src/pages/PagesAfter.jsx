import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PagesArtists = () => {
  const navigate = useNavigate();

  const [selectedArtists, setSelectedArtists] = useState([]);

  const artistsData = [
    {
      id: 1,
      name: 'Beethoven',
      genre: 'Classique',
      image: '/images/ludwig.png',
    },
    {
      id: 2,
      name: 'James Brown',
      genre: 'Funk',
      image: '/images/james.png',
    },
    {
      id: 3,
      name: 'Ariana Grande',
      genre: 'POP',
      image: '/images/arianagrande.webp',
    },
    {
      id: 4,
      name: 'Bob Marley',
      genre: 'Reggae',
      image: '/images/bobmarley.webp',
    },
    {
      id: 5,
      name: 'Booba',
      genre: 'Rap Francais',
      image: '/images/booba.jpg',
    },
    {
      id: 6,
      name: 'Carl Cox',
      genre: 'Techno',
      image: '/images/carl.jpg',
    },
    {
      id: 7,
      name: 'Cheb Khaled',
      genre: 'Rai',
      image: '/images/khaled.jpg',
    },
    {
      id: 8,
      name: 'LESSERAFIM',
      genre: 'K-Pop',
      image: '/images/LESSERAFIM.webp',
    },
  ];

  const toggleArtist = (artistId) => {
    setSelectedArtists((prev) => {
      const isSelected = prev.includes(artistId);
      return isSelected ? prev.filter((id) => id !== artistId) : [...prev, artistId];
    });
  };

  const handleNextStep = () => {
    navigate('/Profile'); // Remplacez par votre route réelle
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-black text-white px-6 py-8">
      <div className="w-full max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-6">Découvrez nos artistes</h2>
        <p className="text-lg text-center mb-10">
          Nous vous recommandons les artistes suivants en fonction de vos goûts musicaux.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {artistsData.map((artist) => (
            <div key={artist.id} className="flex flex-col items-center justify-center p-6 rounded-xl bg-gray-800 hover:bg-gray-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 shadow-lg">
              <img src={artist.image} alt={artist.name} className="h-24 w-24 mb-4 rounded-full object-cover" />
              <span className="text-lg">{artist.name}</span>
              <span className="text-md text-gray-400">{artist.genre}</span>
              <button
                className={`mt-4 px-4 py-2 rounded-lg font-semibold ${selectedArtists.includes(artist.id) ? 'bg-purple-500 text-white' : 'bg-white text-purple-500'}`}
                onClick={() => toggleArtist(artist.id)}
              >
                {selectedArtists.includes(artist.id) ? 'Désélectionner' : 'Sélectionner'}
              </button>
            </div>
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

export default PagesArtists;
