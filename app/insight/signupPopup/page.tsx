// components/SignUpPopup.tsx
import { useState, useEffect } from 'react';
import { redirect } from 'next/navigation'

const SignUpPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true); // Open the popup when the component mounts
  }, []);

  const closePopup = () => {
    setIsOpen(false);
    redirect(`/questionnaire`) // Navigate to the new post page

  };

  return (
    <>
      {/* {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
            <form className="flex flex-col space-y-4">
              <input type="text" placeholder="Name" className="border p-2 rounded" />
              <input type="email" placeholder="Email" className="border p-2 rounded" />
              <input type="password" placeholder="Password" className="border p-2 rounded" />
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      )}
      <button onClick={closePopup} className="absolute top-0 right-0 m-4 text-gray-500">
              {/* &#x2715; */}
      {/* </button> */} 
    </>
  );
};

export default SignUpPopup;
