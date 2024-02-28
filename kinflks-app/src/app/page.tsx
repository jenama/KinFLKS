import Image from "next/image";
import backgroundImage1 from '../../public/Images/gettyimages1.jpeg'

export default function Home() {
  return (
    <main className="home">
      <div className="container">
        <div className="">
          <Image className="bg-hero-pattern h-64 bg-cover bg-center" src={backgroundImage1} alt="back ground image1"></Image>
        </div>
      </div>
    </main>
  );
}
