// // pages/SignUp.tsx
// import { useState } from 'react';

// export default function InfoForm() {
//     const [formData, setFormData] = useState({
//         firstname: '',
//         email: '',
//         lastname: '',
//     });

//     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//         console.log('name', e.target.name)
//     };

//     const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         // Add your form submission logic here
//         console.log(formData);
//     };

//     return (
//         <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//             <div className="max-w-md w-full space-y-8">
//                 <div>
//                     <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Let's get started</h2>
//                 </div>
//                 <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//                     <div className="rounded-md shadow-sm -space-y-px">
//                         <div>
//                             <label htmlFor="firstname" className="sr-only">firstname</label>
//                             <input
//                                 id="firstname"
//                                 name="firstname"
//                                 type="text"
//                                 autoComplete="firstname"
//                                 required
//                                 className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//                                 placeholder="firstname"
//                                 value={formData.firstname}
//                                 onChange={handleChange}
//                             />
//                         </div>
//                         <div>
//                             <label htmlFor="lastname" className="sr-only">lastname</label>
//                             <input
//                                 id="lastname"
//                                 name="lastname"
//                                 type="lastname"
//                                 autoComplete="new-lastname"
//                                 required
//                                 className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//                                 placeholder="lastname"
//                                 value={formData.lastname}
//                                 onChange={handleChange}
//                             />
//                         </div>
//                         <div>
//                             <label htmlFor="email" className="sr-only">Email address</label>
//                             <input
//                                 id="email"
//                                 name="email"
//                                 type="email"
//                                 autoComplete="email"
//                                 required
//                                 className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//                                 placeholder="Email address"
//                                 value={formData.email}
//                                 onChange={handleChange}
//                             />
//                         </div>
//                     </div>

//                     <div>
//                         <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
//                             Sign up
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// }
