import Image from "next/image";
import backgroundImage2 from '../public/Images/gettyimages2.jpeg';
import backgroundImage3 from '../public/Images/gettyimages3.jpeg';
import backgroundImage4 from '../public/Images/gettyimages4.jpeg';


import Head from 'next/head';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Your Website | Home</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <section className="bg-cover bg-center py-20" style={{ backgroundImage: "url('/Images/gettyimages1.jpeg')" }}>
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold text-white mb-4">Welcome to Kinflks</h1>
                    <p className="text-lg text-white mb-8">Where you get advice for your type 3 or 4 hair.</p>
                    <a href="/ask-the-professionals" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-full inline-block">Get Started</a>
                </div>
            </section>

            <section className="bg-gray-100 py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8">Our Services</h2>
                    {/* Service cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" >
                        <div className="bg-white rounded-lg shadow p-6">
                            <h3 className="text-xl font-semibold mb-2">Service 1</h3>
                            <Image className="text-gray-600" src={backgroundImage2} alt="back ground image2"></Image>
                        </div>
                        <div className="bg-white rounded-lg shadow p-6">
                            <h3 className="text-xl font-semibold mb-2">Service 2</h3>
                            <Image className="text-gray-600" src={backgroundImage3} alt="back ground image3"></Image>
                        </div>
                        <div className="bg-white rounded-lg shadow p-6">
                            <h3 className="text-xl font-semibold mb-2">Service 3</h3>
                            <Image className="text-gray-600 h-100%" src={backgroundImage4} alt="back ground image4"></Image>
                        </div>
                        {/* Add more services */}
                    </div>
                </div>
            </section>

            <section className="bg-gray-200 py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8">Testimonials</h2>
                    {/* Testimonials */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white rounded-lg shadow p-6">
                            <p className="text-gray-600">"Lorem ipsum dolor sit amet, consectetur adipiscing elit."</p>
                            <p className="text-gray-800 font-semibold mt-4">- Client 1</p>
                        </div>
                        <div className="bg-white rounded-lg shadow p-6">
                            <p className="text-gray-600">"Lorem ipsum dolor sit amet, consectetur adipiscing elit."</p>
                            <p className="text-gray-800 font-semibold mt-4">- Client 2</p>
                        </div>
                        <div className="bg-white rounded-lg shadow p-6">
                            <p className="text-gray-600">"Lorem ipsum dolor sit amet, consectetur adipiscing elit."</p>
                            <p className="text-gray-800 font-semibold mt-4">- Client 3</p>
                        </div>
                        {/* Add more testimonials */}
                    </div>
                </div>
            </section>

            <footer className="bg-gray-900 text-white py-8">
                <div className="container mx-auto px-4">
                    {/* Footer content */}
                </div>
            </footer>
        </div>
    );
}

