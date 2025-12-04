import gymRepairsMockup1 from "../assets/gym-mockup-1.png";
import gymRepairsMockup2 from "../assets/gym-mockup-2.png";
import gymRepairsMockup3 from "../assets/gym-mockup-3.png";
import gymRepairsMockup4 from "../assets/gym-mockup-4.png";

export default function GymRepairs() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section>
        <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-8">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              GYM REPAIRS
              <br />
              <span className="text-portfolio-text-muted">PROJECT</span>
            </h1>
            <p className="text-portfolio-text-muted mt-6 max-w-lg leading-relaxed mx-auto lg:mx-0">
              Gym Repairs is a company offering professional repair and maintenance services for gym equipment. They needed a website that communicates trust, explains services clearly, and makes it easy for customers to get in touch.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-8">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-3xl lg:text-4xl font-bold text-foreground">
              PROBLEM&nbsp;
              <span className="text-portfolio-text-muted">STATEMENT</span>
            </h1>
            <p className="text-portfolio-text-muted mt-6 max-w-lg leading-relaxed mx-auto lg:mx-0">
              When I first looked at the problem, I realized that most event platforms feel either too basic or too overloaded. Users are often forced to jump between discovery and ticketing systems, creating unnecessary friction. I wanted to solve that by building a centralized, visually engaging, and user-friendly experience.
            </p>
            <p className="text-portfolio-text-muted mt-6 max-w-lg leading-relaxed mx-auto lg:mx-0">
              For me, the key challenge was balancing both user types — attendees looking for quick access to events and tickets, and organizers needing clarity and control over listings and bookings.
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
              <li>Clearly showcase services and expertise</li>
              <li>Build credibility and professionalism through design</li>
              <li>Ensure users can quickly request a service or contact the team</li>
              <li>Make the site responsive and easy to navigate</li>
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
              I created a clean, structured layout featuring:
            </p>
            <ul className="text-portfolio-text-muted mt-6 max-w-lg leading-relaxed mx-auto lg:mx-0 list-disc list-outside space-y-2 pl-6">
              <li>A strong hero section with service highlights and CTA</li>
              <li>Clear breakdown of services (repairs, maintenance, diagnostics)</li>
              <li>Why choose us section with trust signals (certifications, years of experience)</li>
              <li>Contact form and service request CTA at key touchpoints</li>
            </ul>
            <p className="text-portfolio-text-muted mt-6 max-w-lg leading-relaxed mx-auto lg:mx-0">
              The visual style combines dark tones and high-contrast accents to reflect strength, precision, and professionalism — fitting for a gym-centered business.
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
              The result was a modern, responsive website that helps Gym Repairs attract, inform, and convert visitors into clients — while reinforcing their position as experts in the fitness industry.
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
            <img src={gymRepairsMockup1} alt="Gym Repairs Mockup 1" className="w-full max-w-2xl" />
          </div>
          <div className="flex justify-center mt-10">
            <img src={gymRepairsMockup2} alt="Gym Repairs Mockup 2" className="w-full max-w-2xl" />
        </div>
        <div className="flex justify-center mt-10">
          <img src={gymRepairsMockup3} alt="Gym Repairs Mockup 3" className="w-full max-w-2xl" />
        </div>
        <div className="flex justify-center mt-10">
          <img src={gymRepairsMockup4} alt="Gym Repairs Mockup 4" className="w-full max-w-2xl" />
        </div>
      </section>

    </div>
  );
}
