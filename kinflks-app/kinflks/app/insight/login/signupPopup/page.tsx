// components/SignUpPopup.tsx
import { useState } from 'react';
import LoginPage from '../page';


interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

const SignUpPopup = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [formData, setFormData] = useState<SignUpFormData>({
    name: '',
    email: '',
    password: '',
  });

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you can handle form submission, e.g., sending data to a server
    console.log(formData);
    // Close the pop-up after submission
    closePopup();
  };

  return (
    <>
      <button onClick={openPopup} className="bg-blue-500 text-white px-4 py-2 rounded">
        Sign Up
      </button>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
            <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="border p-2 rounded"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="border p-2 rounded"
                value={formData.email}
                onChange={handleChange}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="border p-2 rounded"
                value={formData.password}
                onChange={handleChange}
              />
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                Sign Up
              </button>
            </form>
            <button onClick={closePopup} className="absolute top-0 right-0 m-4 text-gray-500">
              &#x2715;
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SignUpPopup;
