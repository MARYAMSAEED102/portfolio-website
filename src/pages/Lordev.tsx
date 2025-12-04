import lordevMockup1 from "../assets/lordev-mockeup-1.png";
import lordevMockup2 from "../assets/lordev-mockeup-2.png";
import lordevMockup3 from "../assets/lordev-mockeup-3.png";
import lordevMockup4 from "../assets/lordev-mockeup-4.png";

export default function Lordev() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section>
        <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-8">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              LORDEV
              <br />
              <span className="text-portfolio-text-muted">PROJECT</span>
            </h1>
            <p className="text-portfolio-text-muted mt-6 max-w-lg leading-relaxed mx-auto lg:mx-0">
              LORDEV is a software development company that offers a range of services to clients looking for digital solutions. They needed a professional one-page website to introduce their brand, explain their services, and encourage potential clients to connect. My role was to design a simple yet effective site that could represent their business identity with clarity and confidence.
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
              LORDEV had no existing design or brand guideline — just a name, a rough content draft, and a basic idea of the services they offer. Their main challenge was:
            </p>
            <ul className="text-portfolio-text-muted mt-6 max-w-lg leading-relaxed mx-auto lg:mx-0 list-disc list-outside space-y-2 pl-6">
              <li>How to communicate their services effectively on a single page</li>
              <li>How to make the design feel modern and credible without being overly complex</li>
              <li>How to give users a quick, scrollable overview with an easy call to action</li>
            </ul>
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
              <li>Clearly communicate who LORDEV is and what they offer</li>
              <li>Keep the design simple, modern, and trustworthy</li>
              <li>Ensure smooth user flow with strong CTAs</li>
              <li>Make it fully responsive across devices</li>
            </ul>
          </div>
        </div>
      </section>

      {/* My Approach Section */}
      <section>
        <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-8">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-3xl lg:text-4xl font-bold text-foreground">
              MY&nbsp;
              <span className="text-portfolio-text-muted">APPROACH</span>
            </h1>
            <p className="text-portfolio-text-muted mt-6 max-w-lg leading-relaxed mx-auto lg:mx-0">
              I structured the page into clear sections: Hero, About, Services, Why Choose Us, and Contact. I used a minimal, tech-inspired color palette, modern typography, and icon-based service highlights for quick readability.
            </p>
          </div>
        </div>
      </section>

      {/* Result Section */}
      <section>
        <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-8">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-3xl lg:text-4xl font-bold text-foreground">
              <span className="text-foreground">RESULT</span>
            </h1>
            <p className="text-portfolio-text-muted mt-6 max-w-lg leading-relaxed mx-auto lg:mx-0">
              The result was a responsive, professional site that builds trust and makes it easy for users to understand LORDEV's value — all within a single scroll.
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
        <div className="flex flex-col gap-10 mt-10">
          <div className="flex justify-center">
            <img src={lordevMockup1} alt="LORDEV Mockup 1" className="w-full max-w-4xl" />
          </div>
          <div className="flex justify-center">
            <img src={lordevMockup2} alt="LORDEV Mockup 2" className="w-full max-w-4xl" />
          </div>
          <div className="flex justify-center">
            <img src={lordevMockup3} alt="LORDEV Mockup 3" className="w-full max-w-4xl" />
          </div>
          <div className="flex justify-center">
            <img src={lordevMockup4} alt="LORDEV Mockup 4" className="w-full max-w-4xl" />
          </div>
        </div>
      </section>

    </div>
  );
}
