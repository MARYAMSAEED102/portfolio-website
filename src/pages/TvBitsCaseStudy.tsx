import { Navigation } from "../components/Navigation";
import tvBitsGlow1 from "../assets/tv-bits-glow-1.png";
import tvBitsGlow2 from "../assets/tv-bits-glow-2.png";
import tvBitCase1 from "../assets/tv-bits-case-1.png";
import tvBitCaseIcon1 from "../assets/tv-bits-case-icon-1.png";
import tvBitsProblemImg1 from "../assets/tv-bits-case-problem-statement-img-1.svg";
import tvBitsProblemImg2 from "../assets/tv-bits-case-problem-statement-img-2.svg";
import tvBitsProblemImg3 from "../assets/tv-bits-case-problem-statement-img-3.svg";
import tvBitsGoalsImg1 from "../assets/tv-bits-case-goals.svg";
import tvBitsResearchImg1 from "../assets/tv-bits-case-insights.svg";
import tvBitsUserFlowImg1 from "../assets/tv-bits-case-user-flow.svg";
import ellipse1 from "../assets/ellipse-1.svg";
import ellipse2 from "../assets/ellipse-2.svg";
import ellipse3 from "../assets/ellipse-3.svg";
import workFlowImg1 from "../assets/workflow.svg";
import vector1 from "../assets/vector1.svg";
import vector2 from "../assets/vector2.svg";
import vector3 from "../assets/vector3.svg";
import vector4 from "../assets/vector4.svg";
import vector5 from "../assets/vector5.svg";
import tvBitsBranding1 from "../assets/tv-bits-case-branding-1.svg";
import tvBitsBranding2 from "../assets/tv-bits-case-branding-2.svg";
import tvBitsBranding3 from "../assets/tv-bits-case-branding-3.svg";
import tvBitsCaseHowItWorks1 from "../assets/tv-bits-case-how-it-works.svg";
import tvBitsLastImage1 from "../assets/tv-bits-case-last-image-1.svg";
import tvBitsLastImage2 from "../assets/tv-bits-case-last-image-2.svg";
import tvBitsFinalReflectionIcon from "../assets/tv-bits-case-final-reflection-icon.svg";
import { FaUser, FaEnvelope } from "react-icons/fa";

export default function TvBitsCaseStudy() {
  return (
    <div className="bg-black text-white font-sans relative min-h-screen overflow-x-hidden">
      {/* Top Left Glow */}
      <div
        className="absolute top-0 left-0 pointer-events-none"
        style={{ zIndex: 1 }}
      >
        <img
          src={tvBitsGlow1}
          alt=""
          className="w-[400px] h-auto opacity-90"
          style={{ transform: "translate(-50px, -50px)" }}
        />
      </div>

      {/* Top Right Glow */}
      <div
        className="absolute top-0 right-0 pointer-events-none"
        style={{ zIndex: 1 }}
      >
        <img
          src={tvBitsGlow2}
          alt=""
          className="w-[400px] h-auto opacity-90"
          style={{ transform: "translate(50px, -50px)" }}
        />
      </div>

      <div className="relative" style={{ zIndex: 10 }}>
        <Navigation />
        <div className="mt-24 max-w-6xl mx-auto px-4">
          {/* Header */}
          <header className="text-center py-8">
            <h2 className="text-red-500 uppercase font-extrabold tracking-widest text-3xl">
              TV Bits
            </h2>
            <h1 className="text-4xl md:text-5xl font-bold my-2">
              Design That Performs
            </h1>
            <p className="text-gray-400 max-w-xl mx-auto">
              TV Bits was a unique and challenging project I worked on for Wurl
              which is a leading company in connected TV and content
              distribution. The core idea was to deliver bite-sized,
              TikTok-style video ads within streaming environments. My role was
              to design an immersive, platform-consistent experience across TV
              apps, web interfaces, and mobile screens.
            </p>
          </header>

          {/* Tags */}
          <section className="flex flex-col md:flex-row justify-center gap-6 px-4">
            <div
              className="px-6 py-2 rounded-full backdrop-blur-lg bg-opacity-20 border border-white/20 w-full md:w-auto md:min-w-[120px] text-center"
              style={{ backgroundColor: "#330C0C" }}
            >
              <p className="text-white">TV Design</p>
            </div>
            <div
              className="px-6 py-2 rounded-full backdrop-blur-lg bg-opacity-40 border border-white/20 w-full md:w-auto md:min-w-[120px] text-center"
              style={{ backgroundColor: "#330C0C" }}
            >
              <p className="text-white">Web Design</p>
            </div>
            <div
              className="px-6 py-2 rounded-full backdrop-blur-lg bg-opacity-20 border border-white/20 w-full md:w-auto md:min-w-[120px] text-center"
              style={{ backgroundColor: "#330C0C" }}
            >
              <p className="text-white">Mobile Design</p>
            </div>
          </section>

          {/* Created for company WURL */}
          <section>
            <h2 className="text-center font-normal mt-4 text-white">
              ⚡Created for company WURL
            </h2>
          </section>

          {/* Hero Images */}
          <section className="flex justify-center items-center py-8 px-4">
            <img
              src={tvBitCase1}
              alt="TV Bits"
              className="max-w-4xl w-full h-auto rounded-lg"
            />
          </section>

          <div
            className="px-4 py-2 rounded-full backdrop-blur-lg border border-white/40 w-fit mx-auto mb-4 bg-gradient-to-r from-gray-800 to-black"
            style={{ backgroundColor: "transparent" }}
          >
            <div className="flex items-center gap-2">
              <img src={tvBitCaseIcon1} alt="TV Bits" className="w-5 h-5" />
              <p className="text-white text-sm">Requirement</p>
            </div>
          </div>
          {/* Problem Statement */}
          <section className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold my-2">
              Problem Statement
            </h1>
            <p className="text-gray-400 max-w-xl mx-auto mb-6">
              This wasn't a typical single platform design. had to design and
              decide experience for three very different environments
            </p>
            <ul
              className="text-gray-300 max-w-2xl mx-auto space-y-2 font-bold list-disc list-inside"
              style={{ listStyleType: "disc", color: "#ea580c" }}
            >
              <li>
                <span className="text-orange-600">TV:</span>{" "}
                <span className="text-white">
                  Limited input (remote navigation), large screens, lean-back
                  behavior
                </span>
              </li>
              <li>
                <span className="text-orange-600">Web:</span>{" "}
                <span className="text-white">
                  Interactive, scroll-driven UX
                </span>
              </li>
              <li>
                <span className="text-orange-600">Mobile:</span>{" "}
                <span className="text-white">
                  Gesture-based, fast-paced, attention-driven interactions
                </span>
              </li>
            </ul>
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-4 py-8">
            {/* TV Design */}
            <div className="relative group">
              <img
                src={tvBitsProblemImg1}
                alt="TV Design"
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-black/50 to-transparent rounded-t-lg"></div>
              <div className="absolute top-2 right-4 px-3 py-1 rounded-full backdrop-blur-lg border border-white/20 bg-transparent">
                <p className="text-white text-sm font-semibold">TV Design</p>
              </div>
            </div>

            {/* Mobile Design */}
            <div className="relative group">
              <img
                src={tvBitsProblemImg2}
                alt="Mobile Design"
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-black/50 to-transparent rounded-t-lg"></div>
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-full backdrop-blur-lg border border-white/20 bg-transparent">
                <p className="text-white text-sm font-semibold">
                  Mobile Design
                </p>
              </div>
            </div>

            {/* Web Design */}
            <div className="relative group">
              <img
                src={tvBitsProblemImg3}
                alt="Web Design"
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-black/50 to-transparent rounded-t-lg"></div>
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-full backdrop-blur-lg border border-white/20 bg-transparent">
                <p className="text-white text-sm font-semibold">Web Design</p>
              </div>
            </div>
          </section>

          {/* Goals & Objectives */}
          <section>
            {/* Goals Button Header */}

            {/* Two Column Layout */}
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Image Column */}
              <div className="flex justify-center items-center">
                <img
                  src={tvBitsGoalsImg1}
                  alt="Goals & Objectives"
                  className="max-w-full h-auto rounded-lg"
                />
              </div>

              {/* Goals Text Column */}
              <div className="flex flex-col justify-center pt-4">
                <div className="px-4 py-2 rounded-full backdrop-blur-lg border border-white/40 w-fit bg-transparent">
                  <div className="flex items-center gap-2">
                    <img src={tvBitCaseIcon1} alt="Goals" className="w-5 h-5" />
                    <p className="text-white text-sm">Goals</p>
                  </div>
                </div>

                <h2 className="text-xl mt-3 font-semibold text-white mb-4">
                  Goals & Objectives
                </h2>
                <p className="text-gray-300 mb-3 text-sm">
                  As the sole UI/UX designer on the project, my goals were to:
                </p>
                <ul className="text-gray-300 space-y-1 text-sm list-none">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 text-lg">✅</span>
                    <span>
                      Create a consistent but platform-adaptive design system
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 text-lg">✅</span>
                    <span>
                      Ensure the video-first experience felt engaging across all
                      screen sizes
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 text-lg">✅</span>
                    <span>
                      Optimize user interaction flows for each device's input
                      model (remote, mouse, touch)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 text-lg">✅</span>
                    <span>
                      Strike a balance between ad visibility and user engagement
                      — without disrupting entertainment
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Research & Insights */}
          <section className="py-10 mt-8 p-4">
            {/* Research & Insights Button Header */}

            {/* Two Column Layout */}
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Research & Insights Text Column */}
              <div className="flex flex-col justify-center pt-4">
                <div className="px-4 py-2 rounded-full backdrop-blur-lg border border-white/40 w-fit bg-transparent">
                  <div className="flex items-center gap-2">
                    <img src={tvBitCaseIcon1} alt="Goals" className="w-5 h-5" />
                    <p className="text-white text-sm">Research & Insights</p>
                  </div>
                </div>

                <h2 className="text-xl mt-3 font-semibold text-white mb-4">
                  Research & Insights
                </h2>
                <p className="text-gray-300 mb-3 text-sm">
                  Before jumping into visuals, I analyzed the UX patterns of:
                </p>
                <ul className="text-gray-300 space-y-1 text-sm mb-6 list-disc list-inside font-bold">
                  <li>
                    TikTok, Instagram Reels, YouTube Shorts (for interaction
                    pacing and content flow)
                  </li>
                  <li>
                    Roku and Apple TV interfaces (for remote control navigation
                    and UI legibility on TVs)
                  </li>
                  <li>
                    Web video players and OTT platforms (for ad behavior and
                    engagement techniques)
                  </li>
                </ul>

                <p className="text-gray-300 mb-3 text-sm">
                  From this, I developed three core principles to guide the
                  experience design:
                </p>
                <ul className="text-gray-300 space-y-1 text-sm list-disc list-inside font-bold">
                  <li>
                    Immersive by Default – Video should always be the focal
                    point
                  </li>
                  <li>
                    Quick Interaction – Minimal distractions, with fast,
                    intuitive controls
                  </li>
                  <li>
                    Content-aware Layouts – UI adapts to screen type and
                    interaction method
                  </li>
                </ul>
              </div>
              {/* Image Column */}
              <div className="flex justify-center items-center">
                <img
                  src={tvBitsResearchImg1}
                  alt="Goals & Objectives"
                  className="max-w-full h-80 rounded-lg"
                />
              </div>
            </div>
          </section>

          {/* User Flow */}
          <section className="py-16 px-6">
            <div className="flex flex-col justify-center pt-4">
              <div className="px-4 py-2 rounded-full backdrop-blur-lg border border-white/40 w-fit bg-transparent">
                <div className="flex items-center gap-2">
                  <img src={tvBitCaseIcon1} alt="Goals" className="w-5 h-5" />
                  <p className="text-white text-sm">User Flow</p>
                </div>
              </div>
            </div>
            <h2 className="text-2xl font-semibold text-white mt-4">
              Initial User Flow
            </h2>
            <img
              src={tvBitsUserFlowImg1}
              alt="User Flow Diagram"
              className="w-full rounded-lg shadow-lg mt-6"
            />
          </section>

          {/* User Persona */}

          <div
            className="px-4 py-2 rounded-full backdrop-blur-lg border border-white/40 w-fit mx-auto mb-4 bg-gradient-to-r from-gray-800 to-black"
            style={{ backgroundColor: "transparent" }}
          >
            <div className="flex items-center gap-2">
              <img src={tvBitCaseIcon1} alt="TV Bits" className="w-5 h-5" />
              <p className="text-white text-sm">User Research</p>
            </div>
          </div>
          <section className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-3xl font-bold my-4 mb-4">
              User Persona
            </h1>
          </section>
          <div
            className="rounded-2xl shadow-2xl p-4 max-w-4xl w-full 
        bg-black border border-white/20 mx-auto"
          >
            {/* Grid Layout */}
            <div className="grid grid-cols-12 gap-6 p-4">
              {/* Left Side Icon */}
              <div className="col-span-3 flex justify-center items-center hidden md:block">
                <div className="bg-black rounded-lg flex items-center justify-center w-full h-full min-h-[400px] relative overflow-hidden">
                  <span className="text-9xl font-bold text-orange-500 relative z-10">
                    <FaUser />
                  </span>
                  {/* Ellipse in bottom right corner */}
                  <div className="absolute bottom-0 right-0 pointer-events-none">
                    <img
                      src={ellipse1}
                      alt=""
                      className="w-70 h-50 opacity-70"
                      style={{ transform: "translate(0%, 0%)" }}
                    />
                  </div>
                </div>
              </div>

              {/* Right Side Content */}
              <div className="col-span-9 md:col-span-9 col-span-12 grid gap-4">
                {/* Bio */}
                <div
                  className="p-4 rounded-lg relative overflow-hidden h-full"
                  style={{ backgroundColor: "#1A1A1A" }}
                >
                  <h2 className="font-bold text-lg mb-2 text-orange-600">
                    Bio
                  </h2>
                  <p className="text-sm leading-relaxed">
                    Arooj Fatima is a media student who loves binge-watching and
                    edits short videos as a hobby. She follows fan edits and
                    reacts to show clips on TikTok and Instagram.
                  </p>
                  {/* Ellipse in bottom right corner */}
                  <div className="absolute bottom-0 right-0 pointer-events-none">
                    <img
                      src={ellipse2}
                      alt=""
                      className="w-70 h-30 opacity-30"
                      style={{ transform: "translate(0%, 0%)" }}
                    />
                  </div>
                </div>

                {/* Demography & Technology */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
                  <div
                    className="p-4 rounded-lg relative overflow-hidden h-full"
                    style={{ backgroundColor: "#1A1A1A" }}
                  >
                    <h2 className="font-bold text-lg mb-2 text-orange-600">
                      Demography
                    </h2>
                    <ul className="text-sm space-y-1">
                      <li>Age: 25 (Targeted Gen Z or Young Millennials)</li>
                      <li>Gender: Female</li>
                      <li>Education: Graduated</li>
                      <li>Profession: Content Creator</li>
                      <li>Location: Nottingham, UK</li>
                    </ul>
                    {/* Ellipse in bottom right corner */}
                    <div className="absolute bottom-0 right-0 pointer-events-none">
                      <img
                        src={ellipse3}
                        alt=""
                        className="w-70 h-30 opacity-30"
                        style={{ transform: "translate(0%, 0%)" }}
                      />
                    </div>
                  </div>
                  <div
                    className="p-4 rounded-lg relative overflow-hidden h-full"
                    style={{ backgroundColor: "#1A1A1A" }}
                  >
                    <h2 className="font-bold text-lg mb-2 text-orange-600">
                      Technology
                    </h2>
                    <ul className="text-lg space-y-2">
                      <li>Internet</li>
                      <li>Social Media/Apps</li>
                      <li>Online Shopping</li>
                    </ul>
                    {/* Ellipse in bottom right corner */}
                    <div className="absolute bottom-0 right-0 pointer-events-none">
                      <img
                        src={ellipse2}
                        alt=""
                        className="w-70 h-30 opacity-30"
                        style={{ transform: "translate(0%, 0%)" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Core needs & Frustrations */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div
                className="p-4 rounded-lg relative overflow-hidden h-full"
                style={{ backgroundColor: "#1A1A1A" }}
              >
                <h2 className="font-bold text-lg mb-2 text-orange-600">
                  Core needs
                </h2>
                <ul className="text-sm list-disc ml-4 space-y-1">
                  <li>Quick Watch Of Short Video Clips</li>
                  <li>Discover New Content Through Short-Form Content</li>
                  <li>Engage With A TV-Focused Content Community</li>
                </ul>
                {/* Ellipse in bottom right corner */}
                <div className="absolute bottom-0 right-0 pointer-events-none">
                  <img
                    src={ellipse3}
                    alt=""
                    className="w-70 h-30 opacity-30"
                    style={{ transform: "translate(0%, 0%)" }}
                  />
                </div>
              </div>
              <div
                className="p-4 rounded-lg relative overflow-hidden h-full"
                style={{ backgroundColor: "#1A1A1A" }}
              >
                <h2 className="font-bold text-lg mb-2 text-orange-600">
                  Frustrations
                </h2>
                <ul className="text-sm list-disc ml-4 space-y-1">
                  <li>Gets Irrelevant Content On TikTok</li>
                  <li>Can't Find Quality Edits From Her Favorite Shows</li>
                  <li>
                    Streaming Platforms Don't Offer Quick Recaps Or Moments
                  </li>
                  <li>Finds Fan Content Scattered Across Multiple Platforms</li>
                </ul>
                {/* Ellipse in bottom right corner */}
                <div className="absolute bottom-0 right-0 pointer-events-none">
                  <img
                    src={ellipse2}
                    alt=""
                    className="w-70 h-30 opacity-30"
                    style={{ transform: "translate(0%, 0%)" }}
                  />
                </div>
              </div>
            </div>

            {/* Platform usage & Personality trait */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div
                className="p-4 rounded-lg relative overflow-hidden h-full"
                style={{ backgroundColor: "#1A1A1A" }}
              >
                <h2 className="font-bold text-lg mb-2 text-orange-600">
                  Platform usage and comfort level
                </h2>
                <p className="text-sm">
                  Comfortable Using Mobile Apps, Social Media, Streaming, And
                  Light Editing Tools
                </p>
                {/* Ellipse in bottom right corner */}
                <div className="absolute bottom-0 right-0 pointer-events-none">
                  <img
                    src={ellipse3}
                    alt=""
                    className="w-70 h-30 opacity-30"
                    style={{ transform: "translate(0%, 0%)" }}
                  />
                </div>
              </div>
              <div
                className="p-4 rounded-lg relative overflow-hidden h-full"
                style={{ backgroundColor: "#1A1A1A" }}
              >
                <h2 className="font-bold text-lg mb-2 text-orange-600">
                  Personality trait
                </h2>
                <ul className="text-sm flex gap-3 flex-wrap">
                  <li className="px-3 py-1 bg-black/40 rounded-lg">
                    Dedicated
                  </li>
                  <li className="px-3 py-1 bg-black/40 rounded-lg">
                    Disciplined
                  </li>
                  <li className="px-3 py-1 bg-black/40 rounded-lg">
                    Farsighted
                  </li>
                </ul>
                {/* Ellipse in bottom right corner */}
                <div className="absolute bottom-0 right-0 pointer-events-none">
                  <img
                    src={ellipse2}
                    alt=""
                    className="w-70 h-30 opacity-30"
                    style={{ transform: "translate(0%, 0%)" }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Design Process */}
          <section className="py-16 px-6">
            <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {/* Left Side - Content */}
              <div className="space-y-6 md:col-span-3">
                <h2 className="text-2xl font-semibold text-white mb-6">
                  Design Process
                </h2>

                {/* First Row - 2 Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div
                    className="p-4 rounded-lg relative overflow-hidden h-full"
                    style={{ backgroundColor: "#1A1A1A" }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <img
                        src={vector1}
                        alt="Discovery & Research"
                        className="w-5 h-5"
                      />
                      <h3 className="font-bold text-lg text-white">
                        Discovery & Research
                      </h3>
                    </div>
                    <p className="text-sm">
                      In-depth analysis to understand the requirements
                    </p>
                  </div>
                  <div
                    className="p-4 rounded-lg relative overflow-hidden h-full"
                    style={{ backgroundColor: "#1A1A1A" }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <img
                        src={vector2}
                        alt="Design System Creation"
                        className="w-5 h-5"
                      />
                      <h3 className="font-bold text-lg text-white">
                        Design System Creation
                      </h3>
                    </div>
                    <p className="text-sm">
                      Building a cohesive design language for consistency.
                    </p>
                  </div>
                </div>

                {/* Second Row - 3 Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div
                    className="p-4 rounded-lg relative overflow-hidden h-full"
                    style={{ backgroundColor: "#1A1A1A" }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <img
                        src={vector3}
                        alt="Wireframe Development"
                        className="w-5 h-5"
                      />
                      <h3 className="font-bold text-lg text-white">
                        Wireframe Development
                      </h3>
                    </div>
                    <p className="text-sm">
                      Structuring layouts for optimal user experience.
                    </p>
                  </div>
                  <div
                    className="p-4 rounded-lg relative overflow-hidden h-full"
                    style={{ backgroundColor: "#1A1A1A" }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <img src={vector4} alt="UI Design" className="w-5 h-5" />
                      <h3 className="font-bold text-lg text-white">
                        UI Design
                      </h3>
                    </div>
                    <p className="text-sm">
                      Crafting visually stunning and intuitive interfaces.
                    </p>
                  </div>
                  <div
                    className="p-4 rounded-lg relative overflow-hidden h-full"
                    style={{ backgroundColor: "#1A1A1A" }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <img
                        src={vector5}
                        alt="Prototyping & Testing"
                        className="w-5 h-5"
                      />
                      <h3 className="font-bold text-lg text-white">
                        Prototyping & Testing
                      </h3>
                    </div>
                    <p className="text-sm">
                      Developed interactive Figma prototypes and conduct
                      testing.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center md:col-span-1">
                {" "}
                <img
                  src={workFlowImg1}
                  alt="Design Process"
                  className="max-w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </section>

          {/* Branding & Design System */}
          <div
            className="px-4 py-2 rounded-full backdrop-blur-lg border border-white/40 w-fit mx-auto mb-4"
            style={{ backgroundColor: "transparent" }}
          >
            <div className="flex items-center gap-2">
              <img src={vector4} alt="TV Bits" className="w-5 h-5" />
              <p className="text-white text-sm">Branding</p>
            </div>
          </div>
          <section className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-3xl font-bold my-4 mb-4">
              Branding & Design System
            </h1>
            <p>
              Consistent and Effective branding and design system used through
              out the designs
            </p>
          </section>
          <section className="py-16 px-6">
            <div className="max-w-6xl mx-auto">
              {/* First Row - 2 Images */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="flex justify-center">
                  <img
                    src={tvBitsBranding2}
                    alt="TV Bits Branding 1"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <div className="flex justify-center">
                  <img
                    src={tvBitsBranding1}
                    alt="TV Bits Branding 2"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>

              {/* Second Row - 1 Image */}
              <div className="flex justify-center">
                <img
                  src={tvBitsBranding3}
                  alt="TV Bits Branding 3"
                  className="w-full max-w-5xl h-auto rounded-lg"
                />
              </div>
            </div>
          </section>

          {/* Navigation */}
          <div
            className="px-4 py-2 rounded-full backdrop-blur-lg border border-white/40 w-fit mx-auto mb-4"
            style={{ backgroundColor: "transparent" }}
          >
            <div className="flex items-center gap-2">
              <img src={vector4} alt="TV Bits" className="w-5 h-5" />
              <p className="text-white text-sm">How it works</p>
            </div>
          </div>
          <section className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-3xl font-bold my-4 mb-4">
              How it works for TV Navigation{" "}
            </h1>
            <img
              src={tvBitsCaseHowItWorks1}
              alt="TV Bits How it works"
              className="w-full max-w-5xl h-auto rounded-lg"
            />
          </section>

          {/* Last Image */}
          <section className="text-center max-w-4xl mx-auto mt-32">
            <img
              src={tvBitsLastImage1}
              alt="TV Bits Last Image"
              className="w-full max-w-5xl h-auto rounded-lg"
            />
          </section>

          <section className="text-center max-w-3xl mx-auto mt-20">
            <img
              src={tvBitsLastImage2}
              alt="TV Bits Last Image"
              className="w-full max-w-5xl h-auto rounded-lg"
            />
          </section>

          {/* Final Reflection */}
          <div
            className="px-4 py-2 rounded-full backdrop-blur-lg border border-white/40 w-fit mx-auto mb-4"
            style={{ backgroundColor: "transparent" }}
          >
            <div className="flex items-center gap-2">
              <img src={vector5} alt="TV Bits" className="w-5 h-5" />
              <p className="text-white text-sm">Output</p>
            </div>
          </div>
          <section className="text-center mx-auto">
            <h1 className="text-4xl md:text-3xl font-bold my-4 mb-4">
              Final Reflection
            </h1>
          </section>

          {/* Innovative UI/UX Design Container */}
          <section className="max-w-4xl mx-auto px-4 py-8">
            <div
              className="backdrop-blur-sm border border-transparent rounded-lg p-6"
              style={{ backgroundColor: "#0A0A0B" }}
            >
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={tvBitsFinalReflectionIcon}
                  alt="Innovative UI/UX Design"
                  className="w-10 h-10"
                />
                <h2 className="text-xl font-semibold text-white">
                  Innovative UI/UX Design
                </h2>
              </div>
              <p className="text-gray-300 leading-relaxed">
                TV Bits was one of the most dynamic projects I've worked on. As
                a UI/UX designer, I had to scale my thinking beyond a single
                device and deeply understand each platform's unique constraints.
                The challenge of blending short-form, TikTok-style video ads
                into the TV/web/mobile ecosystem was both exciting and
                creatively demanding and I'm proud of the solution I delivered.
              </p>
            </div>
          </section>

          {/* Footer */}
          <footer className="max-w-4xl mx-auto px-4 py-8">
            <div
              className="backdrop-blur-sm border border-transparent rounded-lg p-12"
              style={{ backgroundColor: "#0A0A0B" }}
            >
              <h2 className="text-3xl font-semibold text-white">
                If you made it this far, thanks for watching till the very last
                bit{" "}
              </h2>
              <p className="text-gray-300 leading-relaxed mt-6">
                <strong>Fun Fact:</strong> I switched between mobile, web, and
                TV layouts so many times, my artboard practically traveled
                dimensions.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Still a little confused?
              </p>
              <p className="text-gray-300 leading-relaxed">
                No worries ... just like a good plot twist, it all makes sense
                in the end. And if it doesn’t... I’m always here for a friendly
                UX chat!
              </p>

              <div className="flex flex-col sm:flex-row justify-start gap-4 mt-10">
              <a 
                href="https://www.behance.net/maryamsaeed18" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
              >
                <button className="px-6 py-2 font-bold rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2" style={{backgroundColor: "#D54B20", color: "white"}}>
                  Contact LinkedIn
                </button>
              </a>
              <a 
                href="mailto:maryamsaeed18@gmail.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
              >
                <button className="px-6 py-2 font-bold rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2" style={{backgroundColor: "#18181B", color: "white"}}>
                  <FaEnvelope className="w-4 h-4" />
                  Email Me
                </button>
              </a>
            </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
