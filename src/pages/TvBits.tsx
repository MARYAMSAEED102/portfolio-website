import tvBitsMockup1 from "../assets/tv-bits-mockup-1.png";
import tvBitsMockup2 from "../assets/tv-bits-mockup-2.png";
import tvBitsMockup3 from "../assets/tv-bits-mockup-3.png";
import tvBitsMockup4 from "../assets/tv-bits-mockup-4.png";

export default function TvBits() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section>
        <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-8">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              TV BITS
              <br />
              <span className="text-portfolio-text-muted">PROJECT</span>
            </h1>
            <p className="text-portfolio-text-muted mt-6 max-w-lg leading-relaxed mx-auto lg:mx-0">
              TV Bits was a unique and challenging project I worked on for Wurl
              — a leading company in connected TV and content distribution. The
              core idea was to deliver bite-sized, TikTok-style video ads within
              streaming environments. My role was to design an immersive,
              platform-consistent experience across TV apps, web interfaces, and
              mobile screens.
            </p>
          </div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section>
        <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-8">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-3xl lg:text-4xl font-bold text-foreground">
              PROBLEM&nbsp;
              <span className="text-portfolio-text-muted">STATEMENT</span>
            </h1>
            <p className="text-portfolio-text-muted mt-6 max-w-lg leading-relaxed mx-auto lg:mx-0">
              This wasn't a typical single-platform design. The experience had
              to adapt fluidly across three very different environments:
            </p>
            <ul className="text-portfolio-text-muted mt-6 max-w-lg leading-relaxed mx-auto lg:mx-0 list-disc list-outside space-y-2 pl-6">
              <li>
                <strong>TV:</strong> Limited input (remote navigation), large
                screens, lean-back behavior
              </li>
              <li>
                <strong>Web:</strong> Interactive, scroll-driven UX
              </li>
              <li>
                <strong>Mobile:</strong> Gesture-based, fast-paced,
                attention-driven interactions
              </li>
            </ul>
            <p className="text-portfolio-text-muted mt-6 max-w-lg leading-relaxed mx-auto lg:mx-0">
              On top of that, the content format (short, vertical videos similar
              to TikTok or Reels) needed to feel native in each platform — but
              also distinctly branded under Wurl's identity.
            </p>
          </div>
        </div>
      </section>

      {/* Goals & Objectives Section */}
      <section>
        <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-8">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-3xl lg:text-4xl font-bold text-foreground">
              GOALS&nbsp;
              <span className="text-portfolio-text-muted">&</span>&nbsp;
              <span className="text-foreground">OBJECTIVES</span>
            </h1>
            <p className="text-portfolio-text-muted mt-6 max-w-lg leading-relaxed mx-auto lg:mx-0">
              As the sole UI/UX designer on the project, my goals were to:
            </p>
            <ul className="text-portfolio-text-muted mt-6 max-w-lg leading-relaxed mx-auto lg:mx-0 list-disc list-outside space-y-2 pl-6">
              <li>Create a consistent but platform-adaptive design system</li>
              <li>
                Ensure the video-first experience felt engaging across all
                screen sizes
              </li>
              <li>
                Optimize user interaction flows for each device's input model
                (remote, mouse, touch)
              </li>
              <li>
                Strike a balance between ad visibility and user engagement —
                without disrupting entertainment
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Research & Insights Section */}
      <section>
        <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-8">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-3xl lg:text-4xl font-bold text-foreground">
              RESEARCH&nbsp;
              <span className="text-portfolio-text-muted">&</span>&nbsp;
              <span className="text-foreground">INSIGHTS</span>
            </h1>
            <p className="text-portfolio-text-muted mt-6 max-w-lg leading-relaxed mx-auto lg:mx-0">
              Before jumping into visuals, I analyzed the UX patterns of:
            </p>
            <ul className="text-portfolio-text-muted mt-6 max-w-lg leading-relaxed mx-auto lg:mx-0 list-disc list-outside space-y-2 pl-6">
              <li>
                TikTok, Instagram Reels, YouTube Shorts (for interaction pacing
                and content flow)
              </li>
              <li>
                Roku and Apple TV interfaces (for remote control navigation and
                UI legibility on TVs)
              </li>
              <li>
                Web video players and OTT platforms (for ad behavior and
                engagement techniques)
              </li>
            </ul>
            <p className="text-portfolio-text-muted mt-6 max-w-lg leading-relaxed mx-auto lg:mx-0">
              From this, I developed three core principles to guide the
              experience design:
            </p>
            <ul className="text-portfolio-text-muted mt-6 max-w-lg leading-relaxed mx-auto lg:mx-0 list-disc list-outside space-y-2 pl-6">
              <li>
                <strong>Immersive by Default</strong> – Video should always be
                the focal point
              </li>
              <li>
                <strong>Quick Interaction</strong> – Minimal distractions, with
                fast, intuitive controls
              </li>
              <li>
                <strong>Content-aware Layouts</strong> – UI adapts to screen
                type and interaction method
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Design Process Section */}
      <section>
        <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-8">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-3xl lg:text-4xl font-bold text-foreground">
              DESIGN&nbsp;
              <span className="text-portfolio-text-muted">PROCESS</span>
            </h1>
            <p className="text-portfolio-text-muted mt-6 max-w-lg leading-relaxed mx-auto lg:mx-0">
              I designed three variations of the UI optimized for each platform:
            </p>
            <div className="text-portfolio-text-muted mt-6 max-w-lg leading-relaxed mx-auto lg:mx-0 space-y-6">
              <div>
                <h3 className="text-foreground font-semibold mb-2">
                  📱 Mobile Experience
                </h3>
                <ul className="list-disc list-outside space-y-1 pl-6">
                  <li>Vertical scroll with swipe gestures</li>
                  <li>
                    Easy-to-access engagement buttons (like, skip, info)
                  </li>
                  <li>Short video loops with minimal interface overlays</li>
                  <li>
                    Clean transition between videos to keep flow continuous
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-foreground font-semibold mb-2">
                  🖥️ Web Experience
                </h3>
                <ul className="list-disc list-outside space-y-1 pl-6">
                  <li>Larger content tiles to align with desktop viewports</li>
                  <li>Hover-based interactions with smart preview</li>
                  <li>Full-screen playback mode for immersive ad viewing</li>
                  <li>
                    Option to expand info without leaving video context
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-foreground font-semibold mb-2">
                  📺 TV Experience
                </h3>
                <ul className="list-disc list-outside space-y-1 pl-6">
                  <li>
                    Remote-friendly navigation (left/right to skip, up/down for
                    controls)
                  </li>
                  <li>Big, legible CTA buttons and overlays</li>
                  <li>Non-intrusive progress indicators</li>
                  <li>
                    Time-out-based UI fade-out for uninterrupted viewing
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-portfolio-text-muted mt-6 max-w-lg leading-relaxed mx-auto lg:mx-0">
              Each design was tailored, yet visually connected through
              consistent color schemes, typography, and icon sets.
            </p>
          </div>
        </div>
      </section>

      {/* Output Delivered Section */}
      <section>
        <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-8">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-3xl lg:text-4xl font-bold text-foreground">
              OUTPUT&nbsp;
              <span className="text-portfolio-text-muted">DELIVERED</span>
            </h1>
            <p className="text-portfolio-text-muted mt-6 max-w-lg leading-relaxed mx-auto lg:mx-0">
              TV Bits was one of the most dynamic projects I've worked on. As a
              UI/UX designer, I had to scale my thinking beyond a single device
              and deeply understand each platform's unique constraints. The
              challenge of blending short-form, TikTok-style video ads into the
              TV/web/mobile ecosystem was both exciting and creatively demanding
              and I'm proud of the solution I delivered.
            </p>
          </div>
        </div>
      </section>

      {/* Final Reflection Section */}
      <section>
        <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-8">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-3xl lg:text-4xl font-bold text-foreground">
              FINAL&nbsp;
              <span className="text-portfolio-text-muted">REFLECTION</span>
            </h1>
            <p className="text-portfolio-text-muted mt-6 max-w-lg leading-relaxed mx-auto lg:mx-0">
              TV Bits was one of the most dynamic projects I've worked on. As a
              UI/UX designer, I had to scale my thinking beyond a single device
              and deeply understand each platform's unique constraints. The
              challenge of blending short-form, TikTok-style video ads into the
              TV/web/mobile ecosystem was both exciting and creatively demanding
              and I'm proud of the solution I delivered.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-8">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-3xl lg:text-4xl font-bold text-foreground">
              DESIGN&nbsp;
              <span className="text-portfolio-text-muted">MOCKUPS</span>
            </h1>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <img
            src={tvBitsMockup1}
            alt="Tv Bits Mockup 1"
            className="w-full max-w-2xl"
          />
        </div>
        <div className="flex justify-center mt-10">
          <img
            src={tvBitsMockup2}
            alt="Tv Bits Mockup 2"
            className="w-full max-w-2xl"
          />
        </div>
        <div className="flex justify-center mt-10">
          <img
            src={tvBitsMockup3}
            alt="Tv Bits Mockup 3"
            className="w-full max-w-2xl"
          />
        </div>
        <div className="flex justify-center mt-10">
          <img
            src={tvBitsMockup4}
            alt="Tv Bits Mockup 4"
            className="w-full max-w-2xl"
          />
        </div>
      </section>
    </div>
  );
}