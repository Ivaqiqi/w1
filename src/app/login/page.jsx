// const LoginPage = () => {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-100">
//         <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
//           <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
//           <form>
//             <div className="mb-4">
//               <label htmlFor="email" className="block text-gray-700 mb-2">E-Mail</label>
//               <input
//                 type="email"
//                 id="email"
//                 className="w-full p-2 border border-gray-300 rounded"
//                 required
//               />
//             </div>
//             <div className="mb-6">
//               <label htmlFor="password" className="block text-gray-700 mb-2">Passwort</label>
//               <input
//                 type="password"
//                 id="password"
//                 className="w-full p-2 border border-gray-300 rounded"
//                 required
//               />
//             </div>
//             <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Login</button>
//           </form>
//         </div>
//       </div>
//     );
//   };
  
//   export default LoginPage;


  const LoginPage = () => {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 mb-2">E-Mail</label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border border-gray-300 rounded text-black"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 mb-2">Passwort</label>
              <input
                type="password"
                id="password"
                className="w-full p-2 border border-gray-300 rounded text-black"
                required
              />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Login</button>
          </form>
        </div>
      </div>
    );
  };
  
  export default LoginPage;
  