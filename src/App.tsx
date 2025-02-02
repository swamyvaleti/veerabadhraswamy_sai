import React, { useEffect, useState } from "react";
import { Phone, MapPin, Instagram, Facebook } from "lucide-react";
import image1 from "./assets/image1.jpg";
import image2 from "./assets/image2.jpg";
import image3 from "./assets/image3.jpg";
import { motion } from "framer-motion";
import Footer from "./omsymbol";
import SpiritualEntry from "./spirtualentry";

const images = [image1, image2, image3];

function App() {
  const [showShiva, setShowShiva] = useState(false);
  const [isVisable, setIsVisable] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisable(true);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-orange-100">
      {!isVisable ? (
        <SpiritualEntry setShowShiva={setShowShiva} showShiva={showShiva} />
      ) : (
        <>
          <header className="relative py-8 px-4 shadow-lg bg-gradient-to-r from-orange-600 via-purple-600 to-orange-600">
            <div className="container mx-auto flex items-center justify-center gap-4 relative z-10">
              {/* Om Symbol Image (Left) */}
              <motion.img
                src="https://cdni.iconscout.com/illustration/premium/thumb/indian-diwali-diya-illustration-download-in-svg-png-gif-file-formats--oil-lamp-candle-auspicious-light-festival-culture-traditional-pack-people-illustrations-8703535.png?f=webp"
                alt="Om Symbol"
                className="w-20 h-20 md:w-24 md:h-24 object-contain opacity-70 mix-blend-multiply"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              />

              {/* Title */}
              <motion.h1
                className="text-2xl md:text-3xl font-bold text-center text-yellow-300 drop-shadow-lg"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              >
                శ్రీ భద్రకాళీ సమేత శ్రీ కళ్యాణ వీరభద్ర స్వామి వారు
              </motion.h1>

              {/* Om Symbol Image (Right) */}
              <motion.img
                src="https://cdni.iconscout.com/illustration/premium/thumb/indian-diwali-diya-illustration-download-in-svg-png-gif-file-formats--oil-lamp-candle-auspicious-light-festival-culture-traditional-pack-people-illustrations-8703535.png?f=webp"
                alt="Om Symbol"
                className="w-20 h-20 md:w-24 md:h-24 object-contain opacity-70 mix-blend-multiply"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              />
            </div>
          </header>

          <main className="container mx-auto px-4 py-8">
            {/* Hero Section */}

            <section className="text-center mb-16">
              <h2 className="text-4xl font-bold text-orange-800 mb-6">
                🕉 Sri Kalyana Veerabhadra Swamy Temple 🕉
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Welcome to the divine abode of Lord Veerabhadra Swamy, one of
                the most powerful manifestations of Lord Shiva.
              </p>
            </section>

            {/* Temple Images Section */}
            <section className="mb-16">
              <div className="grid grid-cols-1 gap-12">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className="rounded-lg overflow-hidden shadow-lg"
                  >
                    <img
                      src={image}
                      alt={`Temple Darshan ${index + 1}`}
                      className="w-full h-[600px] object-cover"
                    />
                  </div>
                ))}
              </div>
            </section>

            {/* About Veerabhadra Swamy */}
            <section className="mb-16">
              <h3 className="text-2xl font-bold text-orange-800 mb-6">
                About Lord Veerabhadra Swamy
              </h3>
              <div className="text-center mb-6">
                <img
                  src="https://cdn.pixabay.com/photo/2024/07/09/03/48/shiva-poster-8882316_1280.jpg"
                  alt="Shiva Poster"
                  className="mx-auto rounded-lg shadow-lg w-full max-w-3xl"
                />
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <p className="text-gray-700 mb-4">
                  Lord Veerabhadra is a fierce and powerful manifestation of
                  Lord Shiva, born from His divine rage. His creation was in
                  response to the insult suffered by Shiva when Daksha, Sati's
                  father, refused to invite Him to a grand yagna. Enraged by
                  Sati’s self-immolation, Shiva created Veerabhadra to bring
                  justice and destruction upon Daksha’s sacrificial ritual.
                </p>
                <p className="text-gray-700 mb-4">
                  Veerabhadra, depicted as a dark and fearsome warrior with
                  multiple arms, led a celestial army to disrupt the yagna. He
                  decapitated Daksha and wreaked havoc, symbolizing divine
                  retribution. Eventually, Shiva’s anger subsided, and He
                  revived Daksha, teaching the lesson of humility and reverence.
                </p>
                <p className="text-gray-700">
                  Worshipped as a guardian deity, Veerabhadra is sought for
                  strength, protection, and the removal of obstacles. His story
                  remains a powerful symbol of Shiva’s dual nature—both a
                  destroyer and a compassionate restorer of balance.
                </p>
              </div>
            </section>

            {/* Last Image */}
            <section className="mb-16 text-center">
              <img
                src="https://media.assettype.com/thenewsagency%2F2020-09%2Fa7f51188-31be-4afe-b873-c5c8986cbc1f%2Fsfs.jpg?w=640&auto=format%2Ccompress"
                alt="Veerabhadra Swamy"
                className="mx-auto rounded-lg shadow-lg w-full max-w-3xl"
              />
              <h3 className="text-2xl font-bold text-orange-800 mt-6">
                Jai Veerabhadra Swamy 🙏
              </h3>
            </section>
          </main>

          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
