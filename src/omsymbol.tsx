import { MapPin, Instagram, Facebook } from "lucide-react";

const Deepam = ({ className }: any) => (
  <svg viewBox="0 0 100 100" className={className}>
    <defs>
      <radialGradient
        id="flameGradient"
        cx="50%"
        cy="30%"
        r="50%"
        fx="50%"
        fy="30%"
      >
        <stop offset="0%" style={{ stopColor: "#FFD700", stopOpacity: 1 }}>
          <animate
            attributeName="stop-color"
            values="#FFD700;#FFA500;#FF8C00;#FFD700"
            dur="1s"
            repeatCount="indefinite"
          />
        </stop>
        <stop offset="100%" style={{ stopColor: "#FF4500", stopOpacity: 0.8 }}>
          <animate
            attributeName="stop-color"
            values="#FF4500;#FF8C00;#FFA500;#FF4500"
            dur="0.8s"
            repeatCount="indefinite"
          />
        </stop>
      </radialGradient>
      <filter id="glow">
        <feGaussianBlur stdDeviation="2" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    {/* Traditional Diya Bowl */}
    <path
      d="M25,60 C25,45 75,45 75,60 L70,65 C70,55 30,55 30,65 Z"
      fill="#CD853F"
    >
      <animate
        attributeName="fill"
        values="#CD853F;#DAA520;#CD853F"
        dur="1.5s"
        repeatCount="indefinite"
      />
    </path>

    {/* Bowl Interior */}
    <path d="M30,65 C30,55 70,55 70,65 C70,75 30,75 30,65" fill="#8B4513" />

    {/* Cotton Wick */}
    <rect x="48" y="58" width="4" height="4" fill="#F5F5DC" />

    {/* Animated Flame */}
    <path
      d="M50,35 Q60,45 50,50 Q40,45 50,35"
      fill="url(#flameGradient)"
      filter="url(#glow)"
    >
      <animate
        attributeName="d"
        values="M50,35 Q60,45 50,50 Q40,45 50,35;
                M50,33 Q65,43 50,50 Q35,43 50,33;
                M50,37 Q55,45 50,50 Q45,45 50,37;
                M50,35 Q60,45 50,50 Q40,45 50,35"
        dur="0.8s"
        repeatCount="indefinite"
      />
      <animate
        attributeName="opacity"
        values="0.8;1;0.8"
        dur="0.5s"
        repeatCount="indefinite"
      />
    </path>

    {/* Decorative Patterns on Bowl */}
    <path
      d="M32,62 C35,60 40,59 45,58 M55,58 C60,59 65,60 68,62"
      stroke="#DAA520"
      strokeWidth="1"
      fill="none"
    />
  </svg>
);

export default function TempleWebsite() {
  return (
    <div className="bg-gradient-to-b from-orange-50 via-purple-50 to-orange-50">
      {/* Header with Deepams */}
      <header className="bg-gradient-to-r from-orange-600 via-purple-600 to-orange-600 text-white py-8 px-4 shadow-lg">
        <div className="container mx-auto flex items-center justify-center gap-4">
          <Deepam className="w-16 h-16" />
          <h1 className="text-2xl md:text-3xl font-bold text-center">
            {/* శ్రీ భద్రకాళీ సమేత శ్రీ కళ్యాణ వీరభద్ర స్వామి వారు */}
            1992 మహాశివరాత్రి రోజున అంబాజీపేటలో కొలువై దినదిన దేవిప్యమానంగా
            అభివృద్ధి చెందుతూ కోరిన కోరికలు తీర్చే కనిపించి మాట్లాడే దైవం
            బోనగిరి వారి వీరన్న
          </h1>
          <Deepam className="w-16 h-16" />
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-12">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-100 to-purple-100 rounded-2xl opacity-50"></div>
          <div className="relative rounded-2xl">
            <div className="">
              {/* Address in Column */}
              <div className="flex flex-col gap-6 items-center text-center">
                <div className="text-xl">
                  <p>
                    శ్రీ భద్రకాళీ సమేత శ్రీ కళ్యాణ వీరభద్ర స్వామి వారు, <br />
                    M R O ఆఫీస్ వెనుక, కొర్లపాటి వారి పాలెం, <br />
                    అంబాజీపేట, కోనసీమ జిల్లా, <br />
                    ఆంధ్రప్రదేశ్ - 533214
                  </p>
                </div>

                <div className="text-xl">
                  <p>
                    Sree Bhadrakali Sametha Sree Kalyana Veerabadhra Swamy Varu,{" "}
                    <br />
                    M R O Office Back side, Korlapati Vari Palem, <br />
                    Ambajipeta, Konaseema Dt, <br />
                    Andhra Pradesh- 533214
                  </p>
                </div>
              </div>

              {/* Temple Location Link */}
              <div className="flex justify-between">
                <div>
                  {/* Social Media Links */}
                  <div className="text-center pt-4 pb-4">
                    <span className="text-lg font-bold">Follow us</span>
                  </div>
                  <div className="flex gap-4 justify-center">
                    <a
                      href="https://www.instagram.com/sriveerabhadraswamy_ambajipeta"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-purple-600 hover:text-purple-700 transition-colors"
                    >
                      <Instagram className="w-8 h-8" />
                    </a>
                    <a
                      href="https://www.facebook.com/share/19W8BmF4CM/?mibextid=qi2Omg"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      <Facebook className="w-8 h-8" />
                    </a>
                    <a
                      href="https://x.com/veerabhadra_abj?t=6LPNM1fJGoARbq6MS8GIew&s=08"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-500 hover:text-blue-700 transition-colors"
                    >
                      <img
                        src="https://i.pinimg.com/736x/ee/5e/5f/ee5e5f58afcfb20500d8f8f1489ea191.jpg"
                        alt="Twitter Icon"
                        className="w-12 h-8"
                      />
                    </a>
                  </div>
                </div>

                <div className="pt-8">
                  <div className="flex items-center gap-4 justify-center pt-4 pb-4">
                    <MapPin className="w-8 h-8 text-orange-600" />
                    <a
                      href="https://maps.app.goo.gl/EEEChWE2wCZbPr8t5?g_st=com.google.maps.preview.copy"
                      target="_blank"
                      className="text-xl text-orange-600 hover:text-orange-700 underline"
                    >
                      Locate us at
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-600 via-purple-600 to-green-600 text-white py-4">
        <div className="text-center">
          <div className="flex items-center justify-center">
            <p>&copy; Designed & Developed by Swamy Valeti</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
