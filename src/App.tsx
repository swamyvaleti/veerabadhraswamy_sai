// // import React from "react";
// // import { Bot as Lotus, Phone, Mail } from "lucide-react";
// // import image1 from "./assets/image1.jpg";
// // import image2 from "./assets/image2.jpg";
// // import image3 from "./assets/image3.jpg";

// // const images = [image1, image2, image3];

// // function App() {
// //   return (
// //     <div className="min-h-screen bg-gradient-to-b from-orange-50 to-orange-100">
// //       {/* Header */}
// //       <header className="bg-orange-600 text-white py-6 px-4 shadow-lg">
// //         <div className="container mx-auto flex flex-col items-center justify-center text-center">
// //           <div className="flex items-center gap-2">
// //             <Lotus size={32} />
// //             <h1 className="text-2xl md:text-3xl font-bold">
// //               Sai Bhushan Bonagiri Welcomes You
// //             </h1>
// //           </div>
// //         </div>
// //       </header>

// //       {/* Main Content */}
// //       <main className="container mx-auto px-4 py-8">
// //         {/* Hero Section */}
// //         <section className="text-center mb-16">
// //           <h2 className="text-4xl font-bold text-orange-800 mb-6">
// //             🕉 Sri Veerabhadra Swamy Temple 🕉
// //           </h2>
// //           <p className="text-lg text-gray-700 max-w-3xl mx-auto">
// //             Welcome to the divine abode of Lord Veerabhadra Swamy, one of the
// //             most powerful manifestations of Lord Shiva.
// //           </p>
// //         </section>

// //         {/* Temple Images Section */}
// //         <section className="mb-16">
// //           <h3 className="text-2xl font-bold text-orange-800 mb-6 text-center">
// //             Jai veerabhadra swamy
// //           </h3>
// //           <div className="grid grid-cols-1 gap-12">
// //             {images.map((image, index) => (
// //               <div key={index} className="rounded-lg overflow-hidden shadow-lg">
// //                 <img
// //                   src={image}
// //                   alt={`Temple Darshan ${index + 1}`}
// //                   className="w-full h-[600px] object-cover"
// //                 />
// //               </div>
// //             ))}
// //           </div>
// //         </section>

// //         {/* About Veerabhadra Swamy */}
// //         <section className="mb-16">
// //           <h3 className="text-2xl font-bold text-orange-800 mb-6">
// //             About Lord Veerabhadra Swamy
// //           </h3>
// //           <div className="bg-white rounded-lg shadow-lg p-6">
// //             <p className="text-gray-700 mb-4">
// //               Lord Veerabhadra is a powerful and fierce incarnation of Lord
// //               Shiva, created from His divine anger. He is considered one of the
// //               most powerful deities in Hindu mythology, known for His immense
// //               strength and protective nature towards His devotees.
// //             </p>
// //             <p className="text-gray-700 mb-4">
// //               The name 'Veerabhadra' comes from two words: 'Veera' meaning brave
// //               and 'Bhadra' meaning auspicious. He is depicted with multiple
// //               arms, carrying various weapons, symbolizing His role as the
// //               destroyer of evil and protector of dharma.
// //             </p>
// //             <p className="text-gray-700">
// //               Devotees worship Lord Veerabhadra for courage, strength, and
// //               protection from negative energies. His blessings are particularly
// //               sought for overcoming obstacles and enemies.
// //             </p>
// //           </div>
// //         </section>

// //         {/* Other Hindu Gods */}
// //         <section className="mb-16">
// //           <h3 className="text-2xl font-bold text-orange-800 mb-6">
// //             Other Hindu Gods
// //           </h3>
// //           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //             <div className="bg-white rounded-lg shadow-lg p-6">
// //               <h4 className="text-xl font-bold text-orange-700 mb-3">
// //                 Lord Shiva
// //               </h4>
// //               <p className="text-gray-700">
// //                 The Supreme Being, destroyer of evil, and the transformer. Lord
// //                 Shiva represents the aspect of the Supreme Being that
// //                 continuously dissolves to recreate in the cyclic process of
// //                 creation, preservation, dissolution, and recreation of the
// //                 universe.
// //               </p>
// //             </div>
// //             <div className="bg-white rounded-lg shadow-lg p-6">
// //               <h4 className="text-xl font-bold text-orange-700 mb-3">
// //                 Lord Ganesha
// //               </h4>
// //               <p className="text-gray-700">
// //                 The remover of obstacles and patron of arts and sciences. Lord
// //                 Ganesha is one of the best-known and most worshipped deities in
// //                 the Hindu pantheon.
// //               </p>
// //             </div>
// //             <div className="bg-white rounded-lg shadow-lg p-6">
// //               <h4 className="text-xl font-bold text-orange-700 mb-3">
// //                 Goddess Parvati
// //               </h4>
// //               <p className="text-gray-700">
// //                 The divine mother and consort of Lord Shiva. She represents
// //                 devotion, power, and the nurturing aspect of divine mother.
// //               </p>
// //             </div>
// //             <div className="bg-white rounded-lg shadow-lg p-6">
// //               <h4 className="text-xl font-bold text-orange-700 mb-3">
// //                 Lord Vishnu
// //               </h4>
// //               <p className="text-gray-700">
// //                 The preserver and protector of the universe. Lord Vishnu
// //                 maintains the cosmic order and restores dharma through his
// //                 various avatars.
// //               </p>
// //             </div>
// //           </div>
// //         </section>
// //       </main>

// //       {/* Footer */}
// //       <footer className="bg-orange-800 text-white py-8 px-4">
// //         <div className="container mx-auto">
// //           <div className="flex flex-col md:flex-row justify-between items-center">
// //             <div className="mb-4 md:mb-0">
// //               <h4 className="text-xl font-bold mb-2">Contact Information</h4>
// //               <div className="flex items-center gap-2 mb-2">
// //                 <Phone size={16} />
// //                 <span>+91 9492463545</span>
// //               </div>
// //               <div className="flex items-center gap-2">
// //                 <Mail size={16} />
// //                 <span>contact@saibhushan.com</span>
// //               </div>
// //             </div>
// //             <div className="text-center md:text-right">
// //               <p className="text-sm">© 2024 Sai Bhushan Bonagiri</p>
// //               <p className="text-sm">All Rights Reserved</p>
// //             </div>
// //           </div>
// //         </div>
// //       </footer>
// //     </div>
// //   );
// // }

// // export default App;

// import React from "react";
// import { Bot as Lotus, Phone, Mail } from "lucide-react";
// import image1 from "./assets/image1.jpg";
// import image2 from "./assets/image2.jpg";
// import image3 from "./assets/image3.jpg";

// const images = [image1, image2, image3];

// function App() {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-orange-50 to-orange-100">
//       {/* Header */}
//       <header className="bg-orange-600 text-white py-6 px-4 shadow-lg">
//         <div className="container mx-auto flex flex-col items-center justify-center text-center">
//           <div className="flex items-center gap-2">
//             <Lotus size={32} />
//             <h1 className="text-2xl md:text-3xl font-bold">
//               Sai Bhushan Bonagiri Welcomes You
//             </h1>
//           </div>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="container mx-auto px-4 py-8">
//         {/* Hero Section */}
//         <section className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-orange-800 mb-6">
//             🕉 Sri Veerabhadra Swamy Temple 🕉
//           </h2>
//           <p className="text-lg text-gray-700 max-w-3xl mx-auto">
//             Welcome to the divine abode of Lord Veerabhadra Swamy, one of the
//             most powerful manifestations of Lord Shiva.
//           </p>
//         </section>

//         {/* Temple Images Section */}
//         <section className="mb-16">
//           <h3 className="text-2xl font-bold text-orange-800 mb-6 text-center">
//             Jai Veerabhadra Swamy
//           </h3>
//           <div className="grid grid-cols-1 gap-12">
//             {images.map((image, index) => (
//               <div key={index} className="rounded-lg overflow-hidden shadow-lg">
//                 <img
//                   src={image}
//                   alt={`Temple Darshan ${index + 1}`}
//                   className="w-full h-[600px] object-cover"
//                 />
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* About Veerabhadra Swamy */}
//         <section className="mb-16">
//           <h3 className="text-2xl font-bold text-orange-800 mb-6">
//             About Lord Veerabhadra Swamy
//           </h3>
//           <div className="bg-white rounded-lg shadow-lg p-6">
//             <p className="text-gray-700 mb-4">
//               Lord Veerabhadra is a fierce and powerful manifestation of Lord
//               Shiva, born from His divine rage. His creation was in response to
//               the insult suffered by Shiva when Daksha, Sati's father, refused
//               to invite Him to a grand yagna. Enraged by Sati’s self-immolation,
//               Shiva created Veerabhadra to bring justice and destruction upon
//               Daksha’s sacrificial ritual.
//             </p>
//             <p className="text-gray-700 mb-4">
//               Veerabhadra, depicted as a dark and fearsome warrior with multiple
//               arms, led a celestial army to disrupt the yagna. He decapitated
//               Daksha and wreaked havoc, symbolizing divine retribution.
//               Eventually, Shiva’s anger subsided, and He revived Daksha,
//               teaching the lesson of humility and reverence.
//             </p>
//             <p className="text-gray-700">
//               Worshipped as a guardian deity, Veerabhadra is sought for
//               strength, protection, and the removal of obstacles. His story
//               remains a powerful symbol of Shiva’s dual nature—both a destroyer
//               and a compassionate restorer of balance.
//             </p>
//           </div>
//         </section>

//         {/* Last Image */}
//         <section className="mb-16 text-center">
//           <img
//             src="https://media.assettype.com/thenewsagency%2F2020-09%2Fa7f51188-31be-4afe-b873-c5c8986cbc1f%2Fsfs.jpg?w=640&auto=format%2Ccompress"
//             alt="Veerabhadra Swamy"
//             className="mx-auto rounded-lg shadow-lg w-full max-w-3xl"
//           />
//           <h3 className="text-2xl font-bold text-orange-800 mt-6">
//             Jai Veerabhadra Swamy 🙏
//           </h3>
//         </section>
//       </main>

//       {/* Footer */}
//       <footer className="bg-orange-800 text-white py-8 px-4">
//         <div className="container mx-auto">
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <div className="mb-4 md:mb-0">
//               <h4 className="text-xl font-bold mb-2">Contact Information</h4>
//               <div className="flex items-center gap-2 mb-2">
//                 <Phone size={16} />
//                 <span>+91 9492463545</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <Mail size={16} />
//                 <span>contact@saibhushan.com</span>
//               </div>
//             </div>
//             <div className="text-center md:text-right">
//               <p className="text-sm">© 2024 Sai Bhushan Bonagiri</p>
//               <p className="text-sm">All Rights Reserved</p>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default App;

import React from "react";
import { Bot as Lotus, Phone, Mail } from "lucide-react";
import image1 from "./assets/image1.jpg";
import image2 from "./assets/image2.jpg";
import image3 from "./assets/image3.jpg";

const images = [image1, image2, image3];

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-orange-100">
      {/* Header */}
      <header className="bg-orange-600 text-white py-6 px-4 shadow-lg">
        <div className="container mx-auto flex flex-col items-center justify-center text-center">
          <div className="flex items-center gap-2">
            <Lotus size={32} />
            <h1 className="text-2xl md:text-3xl font-bold">
              Sai Bhushan Bonagiri Welcomes You
            </h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h2 className="text-4xl font-bold text-orange-800 mb-6">
            🕉 Sri Veerabhadra Swamy Temple 🕉
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Welcome to the divine abode of Lord Veerabhadra Swamy, one of the
            most powerful manifestations of Lord Shiva.
          </p>
        </section>

        {/* Temple Images Section */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold text-orange-800 mb-6 text-center">
            Veerabhadra Swamy
          </h3>
          <div className="grid grid-cols-1 gap-12">
            {images.map((image, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-lg">
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
              Lord Veerabhadra is a fierce and powerful manifestation of Lord
              Shiva, born from His divine rage. His creation was in response to
              the insult suffered by Shiva when Daksha, Sati's father, refused
              to invite Him to a grand yagna. Enraged by Sati’s self-immolation,
              Shiva created Veerabhadra to bring justice and destruction upon
              Daksha’s sacrificial ritual.
            </p>
            <p className="text-gray-700 mb-4">
              Veerabhadra, depicted as a dark and fearsome warrior with multiple
              arms, led a celestial army to disrupt the yagna. He decapitated
              Daksha and wreaked havoc, symbolizing divine retribution.
              Eventually, Shiva’s anger subsided, and He revived Daksha,
              teaching the lesson of humility and reverence.
            </p>
            <p className="text-gray-700">
              Worshipped as a guardian deity, Veerabhadra is sought for
              strength, protection, and the removal of obstacles. His story
              remains a powerful symbol of Shiva’s dual nature—both a destroyer
              and a compassionate restorer of balance.
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

      {/* Footer */}
      <footer className="bg-orange-800 text-white py-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h4 className="text-xl font-bold mb-2">Contact Information</h4>
              <div className="flex items-center gap-2 mb-2">
                <Phone size={16} />
                <span>+91 9492463545</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>contact@saibhushan.com</span>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm">© 2024 Sai Bhushan Bonagiri</p>
              <p className="text-sm">All Rights Reserved</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
