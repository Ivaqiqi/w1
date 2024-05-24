'use client';

import { useState } from 'react';

const AdminPage = () => {
  const [categories, setCategories] = useState([
    "Gartengeräte",
    "Gartenwerkzeug"
  ]);
  const [newCategory, setNewCategory] = useState("");

  const handleInputChange = (e) => {
    setNewCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newCategory.trim() !== "") {
      setCategories([...categories, newCategory.trim()]);
      setNewCategory("");
    }
  };

  const handleDelete = (index) => {
    const newCategories = categories.filter((_, i) => i !== index);
    setCategories(newCategories);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl">
        <h1 className="text-3xl font-bold mb-6 text-center">Administration</h1>
        
        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-4 text-black">Liste aller Benutzer</h2>
          <ul className="list-disc pl-5 text-black">
            <li className="py-2 border-b border-gray-200">Benutzer 1</li>
            <li className="py-2 border-b border-gray-200">Benutzer 2</li>
            <li className="py-2 border-b border-gray-200">Benutzer 3</li>
            {/* Fügen Sie hier die vollständige Liste der Benutzer hinzu */}
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-4 text-black">Werkzeugkategorien</h2>
          <ul className="list-disc pl-5 text-black mb-4">
            {categories.map((category, index) => (
              <li key={index} className="py-2 border-b border-gray-200 flex justify-between items-center">
                <span>{category}</span>
                <button
                  onClick={() => handleDelete(index)}
                  className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600"
                >
                  Löschen
                </button>
              </li>
            ))}
          </ul>
          <form onSubmit={handleSubmit} className="flex space-x-2">
            <input
              type="text"
              value={newCategory}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              placeholder="Neue Kategorie hinzufügen"
            />
            <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">Hinzufügen</button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default AdminPage;
