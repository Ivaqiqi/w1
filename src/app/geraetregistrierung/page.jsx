const GeraetRegistrierungPage = () => {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
          <h1 className="text-2xl font-bold mb-6 text-center">Gerät registrieren</h1>
          <form>
            <div className="mb-4">
              <label htmlFor="bezeichnung" className="block text-gray-700 mb-2">Bezeichnung</label>
              <input
                type="text"
                id="bezeichnung"
                className="w-full p-2 border border-gray-300 rounded text-gray-900"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="foto" className="block text-gray-700 mb-2">Foto (optional)</label>
              <input
                type="file"
                id="foto"
                className="w-full p-2 border border-gray-300 rounded text-gray-900"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="kategorie" className="block text-gray-700 mb-2">Werkzeugkategorie</label>
              <select
                id="kategorie"
                className="w-full p-2 border border-gray-300 rounded text-gray-900"
                required
              >
                <option value="" className="text-gray-500">Kategorie auswählen</option>
                <option value="Gartengeräte">Gartengeräte</option>
                <option value="Gartenwerkzeug">Gartenwerkzeug</option>
              </select>
            </div>
            <div className="mb-6">
              <label htmlFor="besitzer" className="block text-gray-700 mb-2">Besitzer (User)</label>
              <input
                type="text"
                id="besitzer"
                className="w-full p-2 border border-gray-300 rounded text-gray-900"
                required
              />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Registrieren</button>
          </form>
        </div>
      </div>
    );
  };
  
  export default GeraetRegistrierungPage;
  