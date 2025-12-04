import nobleAdventureMockup1 from "../assets/noble-adventure-mockup-1.png";
import nobleAdventureMockup2 from "../assets/noble-adventure-mockup-2.png";
import nobleAdventureMockup3 from "../assets/noble-adventure-mockup-3.png";
import nobleAdventureMockup4 from "../assets/noble-adventure-mockup-4.png";
import nobleAdventureMockup5 from "../assets/noble-adventure-mockup-5.png";
import nobleAdventureMockup6 from "../assets/noble-adventure-mockup-6.png";

export default function NobelAdventure() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section>
        <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-8">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              NOBLE ADVENTURE
              <br />
              <span className="text-portfolio-text-muted">PROJECT</span>
            </h1>
            <p className="text-portfolio-text-muted mt-6 max-w-lg leading-relaxed mx-auto lg:mx-0">
              Noble Adventure Tour is a travel and tourism company offering guided tours and adventure experiences. The goal was to design a user-friendly, visually engaging website that builds trust and encourages bookings.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-8">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-3xl lg:text-4xl font-bold text-foreground">
              GOALS&nbsp;
              <span className="text-portfolio-text-muted">&</span>&nbsp;
              <span className="text-foreground">OBJECTIVES</span>
            </h1>
            <ul className="text-portfolio-text-muted mt-6 max-w-lg leading-relaxed mx-auto lg:mx-0 list-disc list-outside space-y-2 pl-6">
              <li>Present tours and destinations clearly</li>
              <li>Build credibility with visuals, testimonials, and clean layout</li>
              <li>Simplify the user journey to explore and inquire about trips</li>
              <li>Ensure a responsive experience across devices</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-8">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-3xl lg:text-4xl font-bold text-foreground">
              DESIGN&nbsp;
              <span className="text-portfolio-text-muted">PROCESS</span>
            </h1>
            <p className="text-portfolio-text-muted mt-6 max-w-lg leading-relaxed mx-auto lg:mx-0">
              I designed a scrollable homepage that includes:
            </p>
            <ul className="text-portfolio-text-muted mt-6 max-w-lg leading-relaxed mx-auto lg:mx-0 list-disc list-outside space-y-2 pl-6">
              <li>A strong hero section with visuals and a CTA</li>
              <li>Featured tour categories and packages</li>
              <li>Trust-building elements like reviews and badges</li>
              <li>A clear inquiry/contact section</li>
            </ul>
            <p className="text-portfolio-text-muted mt-6 max-w-lg leading-relaxed mx-auto lg:mx-0">
              The UI uses earthy, adventurous colors and bold imagery to evoke exploration and excitement.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-8">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-3xl lg:text-4xl font-bold text-foreground">
              <span className="text-foreground">FINAL&nbsp;</span>
              <span className="text-portfolio-text-muted">REFLECTION</span>
            </h1>
            <p className="text-portfolio-text-muted mt-6 max-w-lg leading-relaxed mx-auto lg:mx-0">
              The final design delivers an intuitive and aesthetic travel experience that reflects Noble Adventure Tour's spirit — helping users quickly discover trips and feel confident in planning their adventure.
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
            src={nobleAdventureMockup1}
            alt="Noble Adventure Mockup 1"
            className="w-full max-w-2xl"
          />
        </div>
        <div className="flex justify-center mt-10">
          <img
            src={nobleAdventureMockup2}
            alt="Noble Adventure Mockup 2"
            className="w-full max-w-2xl"
          />
        </div>
        <div className="flex justify-center mt-10">
          <img
            src={nobleAdventureMockup3}
            alt="Noble Adventure Mockup 3"
            className="w-full max-w-2xl"
          />
        </div>
        <div className="flex justify-center mt-10">
          <img
            src={nobleAdventureMockup4}
            alt="Noble Adventure Mockup 4"
            className="w-full max-w-2xl"
          />
        </div>  <div className="flex justify-center mt-10">
          <img
            src={nobleAdventureMockup5}
            alt="Noble Adventure Mockup 5"
            className="w-full max-w-2xl"
          />
        </div>  <div className="flex justify-center mt-10">
          <img
            src={nobleAdventureMockup6}
            alt="Noble Adventure Mockup 6"
            className="w-full max-w-2xl"
          />
        </div>
      </section>

    </div>
  );
}
