import grocerMockup1 from "../assets/grocer-ui-1.svg";
import grocerMockup2 from "../assets/grocer-ui-2.svg";
import grocerMockup5 from "../assets/grocer-ui-5.svg";
import grocerProcessLine from "../assets/grocer-ui-3.svg";
import grocerDesignSystem from "../assets/grocer-ui-4.svg";
import figmaLogo from "../assets/figma.png";
import grocerUI6 from "../assets/grocer-ui-6.svg";

export default function Grocer() {
  return (
    <div className="relative bg-[#FFF7F0] text-[#3B2920] font-sans min-h-screen overflow-hidden">
      {/* Top background hero images */}
      <div className="pointer-events-none absolute inset-x-0 -top-10 md:-top-6">
        <div className="max-w-5xl mx-auto px-4 md:px-8 flex items-start justify-between gap-4 md:gap-8">
          {/* Left: mobile mockup with orange background */}
          <div className="mt-0 md:mt-2">
            <div className="relative">
              <div className="absolute inset-0 rounded-[32px] " />
              <img
                src={grocerMockup2}
                alt="Grocer mobile UI"
                className="relative w-64 md:w-80 h-full"
              />
            </div>
          </div>
          <></>
          {/* Right: additional Grocer UI mockup */}
          <div className="mt-4 md:mt-0 hidden sm:block">
            <img
              src={grocerMockup5}
              alt="Grocer UI screens"
              className="w-44 md:w-64 h-auto drop-shadow-xl"
            />
          </div>
        </div>
      </div>

      <main className="relative z-0 mt-20 pb-20">
        {/* Hero / Case Study Header */}
        <section className="max-w-5xl mx-auto md:px-8 pt-12 pb-8 flex items-start justify-center">
          <div className="w-full md:w-1/2 flex flex-col gap-4 z-10 text-left">
              <p className="flex items-center gap-2 text-md uppercase tracking-[0.2em] text-black font-bold">
                <span className="text-xl leading-none">←</span>
                <span>Case Study</span>
              </p>
              <h1 className="mt-2 text-4xl md:text-5xl font-extrabold tracking-wide text-[#FF8A3D]">
                GROCER
              </h1>
              <p className="mt-4 text-sm md:text-base leading-relaxed text-[#6B4C3A] max-w-xl mx-auto md:mx-0">
                Grocer at Home is a mobile application designed to simplify online
                grocery shopping. It enables users to browse, select, and order
                fresh groceries delivered to their doorstep, offering a smooth and
                intuitive experience from login to checkout.
              </p>

              <div className="mt-6 flex flex-col items-start gap-1 text-sm">
                <span className="px-3 py-1 text-black font-light">
                  Tool Used:
                </span>
                <span className="px-3 py-1 text-black text-xl font-medium flex items-center gap-2">
                  <img
                    src={figmaLogo}
                    alt="Figma logo"
                    className="w-7 h-7 object-contain"
                  />
                  <span>Figma</span>
                </span>
              </div>
            </div>
            </section>

        {/* About / Problem Statement */}
        <section className="max-w-5xl mx-auto px-4 md:px-8 mt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-[#FF8A3D] mb-6">
            About
          </h2>
          <div className="bg-white rounded-3xl shadow-md border border-[#FFE1C5] p-6 md:p-8">
            <h3 className="text-lg md:text-xl font-semibold text-center text-[#FF8A3D]">
              Problem Statement
            </h3>
            <p className="mt-4 text-sm md:text-base leading-relaxed text-[#6B4C3A] max-w-3xl mx-auto">
              In busy urban lifestyles, users struggle with time‑consuming grocery
              store visits and poorly designed online platforms. This app was
              created to streamline the grocery ordering process, ensuring ease of
              use, product visibility, and secure checkout — all from a mobile
              device.
            </p>
          </div>

          {/* Target Audience & User Research */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-3xl shadow-md border border-[#FFE1C5] p-6 md:p-7">
              <h3 className="text-base md:text-lg font-semibold text-[#FF8A3D] mb-4">
                Target Audience
              </h3>
              <ul className="space-y-3 text-sm md:text-base text-[#6B4C3A] list-disc list-inside">
                <li>Working professionals with limited time for grocery shopping.</li>
                <li>Homemakers who prefer ordering groceries online.</li>
                <li>
                  Students or individuals living independently in urban areas.
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-3xl shadow-md border border-[#FFE1C5] p-6 md:p-7">
              <h3 className="text-base md:text-lg font-semibold text-[#FF8A3D] mb-4">
                User Research
              </h3>
              <ul className="space-y-3 text-sm md:text-base text-[#6B4C3A] list-disc list-inside">
                <li>
                  Conducted surveys and interviews to understand expectations from
                  grocery apps.
                </li>
                <li>
                  Users preferred clean layouts, clear pricing, and simple product
                  discovery.
                </li>
                <li>
                  A key insight was the demand for product details and nutritional
                  information within the app.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Design Process */}
        <section className="max-w-5xl mx-auto px-4 md:px-8 mt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-[#FF8A3D] mb-8">
            Design Process
          </h2>
          <div className="flex flex-col items-center gap-6">
            <img
              src={grocerProcessLine}
              alt="Grocer design process"
              className="w-full h-auto"
            />
          </div>
        </section>

        {/* Design System */}
        <section className="max-w-5xl mx-auto px-4 md:px-8 mt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-[#FF8A3D] mb-6">
            Design System
          </h2>
          <div className="bg-white rounded-3xl shadow-md border border-[#FFE1C5] p-4 md:p-6">
            <img
              src={grocerDesignSystem}
              alt="Grocer design system with colors and typography"
              className="w-full h-auto"
            />
          </div>
        </section>

        {/* User Interface */}
        <section className="max-w-5xl mx-auto px-4 md:px-8 mt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-[#FF8A3D] mb-6">
            User Interface
          </h2>
          <p className="text-sm md:text-base text-[#6B4C3A] max-w-3xl mb-6">
            The UI focuses on a friendly, fresh look with soft rounded cards,
            generous white space, and clear call‑to‑action buttons, guiding users
            from onboarding to order confirmation.
          </p>

          <div className="mt-4">
            <img
              src={grocerMockup1}
              alt="Grocer mobile app screens"
              className="w-full h-auto rounded-3xl border border-[#FFE1C5] shadow-md"
            />
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 md:px-8 pt-12 pb-8 flex items-center justify-center">
        <div className="w-full flex items-center justify-center">
        <img src={grocerUI6} />
        </div>
        </section>

      
      </main>
    </div>
  );
}


