import cumberlandMockup1 from "../assets/cumberland-mockup-1.png";
import cumberlandMockup2 from "../assets/cumberland-mockup-2.png";
import cumberlandMockup3 from "../assets/cumberland-mockup-3.png";

export default function Cumberland() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section>
        <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-8">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              CUMBERLAND
              <br />
              <span className="text-portfolio-text-muted">PROJECT</span>
            </h1>
            <p className="text-portfolio-text-muted mt-6 max-w-lg leading-relaxed mx-auto lg:mx-0">
              Cumberland BioTherapeutics is a health-focused organization aiming
              to bring breakthrough therapeutic solutions to market. However,
              their existing website (formerly hosted on a generic template at
              deckingonlinestore.com) lacked brand identity, trust, and
              usability — all critical in the biotech and life sciences space.
            </p>
            <p className="text-portfolio-text-muted mt-4 max-w-lg leading-relaxed mx-auto lg:mx-0">
              I was brought in to reimagine the site from the ground up, turning
              it into a professional, credible, and user-centered experience
              that reflects the values of science, innovation, and healing.
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
              The original site did not reflect who Cumberland was — it looked
              like a placeholder for a construction supply store. It had:
            </p>
            <ul className="text-portfolio-text-muted mt-6 max-w-lg leading-relaxed mx-auto lg:mx-0 list-disc list-outside space-y-2 pl-6">
              <li>No real brand language or consistency</li>
              <li>Unclear information architecture</li>
              <li>Generic e-commerce elements irrelevant to biotech</li>
              <li>
                Poor readability, accessibility, and mobile responsiveness
              </li>
            </ul>
            <p className="text-portfolio-text-muted mt-6 max-w-lg leading-relaxed mx-auto lg:mx-0">
              The biggest challenge was to start from scratch — there was no
              solid base to improve upon, so I had to define structure, content
              hierarchy, tone, and design direction from zero.
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
            <ul className="text-portfolio-text-muted mt-6 max-w-lg leading-relaxed mx-auto lg:mx-0 list-disc list-outside space-y-2 pl-6">
              <li>Establish brand credibility and trust through design</li>
              <li>Create a clean, medical-science-inspired visual identity</li>
              <li>
                Ensure users can easily understand what the company does and why
                it matters
              </li>
              <li>Improve usability across desktop, tablet, and mobile</li>
              <li>
                Highlight key offerings like therapeutic focus areas, research
                background, and contact opportunities
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
              Since the old site offered no real inspiration, I conducted a
              competitive analysis of biotech and life sciences websites
              including:
            </p>
            <ul className="text-portfolio-text-muted mt-6 max-w-lg leading-relaxed mx-auto lg:mx-0 list-disc list-outside space-y-2 pl-6">
              <li>Moderna</li>
              <li>Amgen</li>
              <li>Gilead</li>
              <li>Local/regional biotherapeutic firms</li>
            </ul>
            <p className="text-portfolio-text-muted mt-6 max-w-lg leading-relaxed mx-auto lg:mx-0">
              I focused on their navigation structure, tone of content, visual
              cues, and storytelling patterns. The goal was to make Cumberland
              look credible and ready for partnerships, research funding, and
              patient trust.
            </p>
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
            <div className="text-portfolio-text-muted mt-6 max-w-lg leading-relaxed mx-auto lg:mx-0 space-y-6">
              <div>
                <h3 className="text-foreground font-semibold mb-2">
                  📐 Information Architecture
                </h3>
                <p className="mb-2">
                  I restructured the entire site around clear content buckets,
                  such as:
                </p>
                <ul className="list-disc list-outside space-y-1 pl-6">
                  <li>Who We Are (company vision + values)</li>
                  <li>Therapeutic Areas</li>
                  <li>Research & Development</li>
                  <li>News & Media</li>
                  <li>Contact / Get In Touch</li>
                </ul>
                <p className="mt-2">
                  This gave the brand a proper narrative flow.
                </p>
              </div>
              <div>
                <h3 className="text-foreground font-semibold mb-2">
                  🎨 Visual Design
                </h3>
                <ul className="list-disc list-outside space-y-1 pl-6">
                  <li>
                    I opted for a clean, white-dominant layout with strategic
                    use of blue, green, and neutral tones to evoke health,
                    trust, and calm
                  </li>
                  <li>
                    Introduced human imagery, DNA illustrations, and soft
                    background textures to subtly convey biotech and healing
                  </li>
                  <li>
                    Designed for clarity and breathing space — especially on
                    mobile where scientific content can easily feel overwhelming
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-foreground font-semibold mb-2">
                  📱 Responsiveness & Usability
                </h3>
                <ul className="list-disc list-outside space-y-1 pl-6">
                  <li>
                    I ensured the design adapts gracefully to all screen sizes,
                    especially mobile, where many users might first interact
                  </li>
                  <li>
                    CTAs like "Learn More" and "Contact Us" are consistently
                    placed and clearly visible
                  </li>
                  <li>
                    Used large touch targets, readable font sizes, and
                    WCAG-friendly contrast
                  </li>
                </ul>
              </div>
            </div>
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
              The redesign positioned Cumberland BioTherapeutics as a credible,
              forward-thinking player in the biotech space. It’s now easier for
              visitors — whether patients, researchers, or investors to
              understand the company’s work, explore its impact, and reach out.
              Revamping Cumberland BioTherapeutics wasn’t just a visual redesign
              it was about redefining how the company communicates its identity.
              As the UI/UX designer, I had the opportunity to shape the entire
              experience from the ground up. The final outcome feels modern,
              structured, and emotionally aligned with the mission of helping
              people through science.
            </p>
          </div>
        </div>
      </section>

      {/* Design Mockups Section */}
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
            src={cumberlandMockup1}
            alt="Cumberland BioTherapeutics Mockup 1"
            className="w-full max-w-2xl"
          />
        </div>
        <div className="flex justify-center mt-10">
          <img
            src={cumberlandMockup2}
            alt="Cumberland BioTherapeutics Mockup 2"
            className="w-full max-w-2xl"
          />
        </div>
        <div className="flex justify-center mt-10">
          <img
            src={cumberlandMockup3}
            alt="Cumberland BioTherapeutics Mockup 3"
            className="w-full max-w-2xl"
          />
        </div>
      </section>
    </div>
  );
}
