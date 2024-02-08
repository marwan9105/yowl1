import React, { useState } from 'react';

function PostPopup({ onClose }) {
  const [content, setContent] = useState('');

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, vous pouvez soumettre le contenu du post à votre backend ou effectuer toute autre action nécessaire
    // Par exemple, vous pouvez appeler une fonction pour créer un post dans la base de données
    console.log('Contenu du post :', content);
    // Fermez la popup après la soumission
    onClose();
  };

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-600 shadow-md rounded-md p-6">
      <h2 className="text-lg font-bold mb-4">Nouveau post</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={content}
          onChange={handleChange}
          className="w-full h-32 border border-gray-300 rounded-md p-2 mb-4"
          placeholder="Quoi de neuf ?"
          rows="4"
          cols="50"
        />
        <button type="submit" className="bg-indigo-700 text-white px-4 py-2 rounded-md mr-2">Publier</button>
        <button type="button" onClick={onClose} className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md">Annuler</button>
      </form>
    </div>
  );
}

export default PostPopup;
