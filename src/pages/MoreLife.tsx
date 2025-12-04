import moreLifeMockup1 from "../assets/more-life-mockup-1.png";
import moreLifeMockup2 from "../assets/more-life-mockup-2.png";
import moreLifeMockup3 from "../assets/more-life-mockup-3.png";
import moreLifeMockup4 from "../assets/more-life-mockup-4.png";

export default function MoreLife() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section>
        <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-8">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              MORE LIFE
              <br />
              <span className="text-portfolio-text-muted">PROJECT</span>
            </h1>
            <p className="text-portfolio-text-muted mt-6 max-w-lg leading-relaxed mx-auto lg:mx-0">
              More Life" began as a straightforward event management platform,
              but as I progressed through the project, the scope expanded to
              include a complete ticketing system. My goal was to design a
              seamless, modern experience that allowed users to not only
              discover events but also book tickets effortlessly — all from a
              single, intuitive platform.
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
              When I first looked at the problem, I realized that most event
              platforms feel either too basic or too overloaded. Users are often
              forced to jump between discovery and ticketing systems, creating
              unnecessary friction. I wanted to solve that by building a
              centralized, visually engaging, and user-friendly experience.
              <br />
              <br />
              For me, the key challenge was balancing both user types —
              attendees looking for quick access to events and tickets, and
              organizers needing clarity and control over listings and bookings
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
            <p className="text-portfolio-text-muted mt-6 max-w-lg leading-relaxed mx-auto lg:mx-0">
              As the UI/UX Designer, my focus was to:
            </p>
            <ul className="text-portfolio-text-muted mt-6 max-w-lg leading-relaxed mx-auto lg:mx-0 list-disc list-outside space-y-2 pl-6">
              <li>
                Design a clean, scalable structure that could handle both events
                and ticketing
              </li>
              <li>
                Prioritize usability and accessibility — ensuring everything
                works smoothly across screen sizes
              </li>
              <li>
                Deliver an interface that feels vibrant yet professional,
                fitting the excitement of events
              </li>
              <li>
                Craft a booking experience that feels lightweight, clear, and
                conversion-friendly
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-8">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-3xl lg:text-4xl font-bold text-foreground">
              RESEARCH&nbsp;
              <span className="text-portfolio-text-muted">&</span>&nbsp;
              <span className="text-foreground">INSIGHTS</span>
            </h1>
            <p className="text-portfolio-text-muted mt-6 max-w-lg leading-relaxed mx-auto lg:mx-0">
              To begin, I did a visual and UX audit of platforms like
              Eventbrite, DICE, and BookMyShow. I noted what worked — like
              simple navigation and image-driven cards — and what didn’t, such
              as overcrowded layouts or confusing checkout processes.
            </p>
            <ul className="text-portfolio-text-muted mt-6 max-w-lg leading-relaxed mx-auto lg:mx-0 list-disc list-outside space-y-2 pl-6">
              <li>These insights helped me identify core UX goals</li>
              <li>Use progressive disclosure to avoid overwhelming users</li>
              <li>Ensure CTAs and actions are context-aware and accessible</li>
              <li>
                Give clear ticketing feedback, like availability status and
                confirmation
              </li>
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
              I structured my work into two flows:
            </p>
            <div className="text-portfolio-text-muted mt-6 max-w-lg leading-relaxed mx-auto lg:mx-0 space-y-6">
              <div>
                <h3 className="text-foreground font-semibold mb-2">
                  1. Event Discovery Experience
                </h3>
                <p>
                  I created an engaging interface with event cards that clearly
                  display imagery, titles, and timing. I used clean filters for
                  type, date, and location to help users narrow their choices.
                  On the event detail page, I focused on clarity — the
                  information is sectioned and supported by hierarchy,
                  typography, and space.
                </p>
              </div>
              <div>
                <h3 className="text-foreground font-semibold mb-2">
                  2. Integrated Ticketing Flow
                </h3>
                <p>
                  Here, my priority was ease and speed. Users can view ticket
                  types, select quantities, and complete bookings in just a few
                  steps. I introduced clear status tags (like "Available" or
                  "Sold Out") and included confirmation screens with QR-based
                  tickets for a real-world, event-day experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-8">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-3xl lg:text-4xl font-bold text-foreground">
              FINAL&nbsp;
              <span className="text-portfolio-text-muted">REFLECTION</span>
            </h1>
            <p className="text-portfolio-text-muted mt-6 max-w-lg leading-relaxed mx-auto lg:mx-0">
              As the sole UI/UX Designer on this project, I loved the challenge
              of turning a simple idea into a fully-featured product. "More
              Life" taught me how to think holistically — not just about pages,
              but about how people experience a platform from start to finish.
              It was a great exercise in balancing aesthetics with
              functionality, and it sharpened my ability to design systems that
              feel both joyful and purposeful.
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
            src={moreLifeMockup1}
            alt="More Life Mockup 1"
            className="w-full max-w-2xl"
          />
        </div>
        <div className="flex justify-center mt-10">
          <img
            src={moreLifeMockup2}
            alt="More Life Mockup 2"
            className="w-full max-w-2xl"
          />
        </div>
        <div className="flex justify-center mt-10">
          <img
            src={moreLifeMockup3}
            alt="More Life Mockup 3"
            className="w-full max-w-2xl"
          />
        </div>
        <div className="flex justify-center mt-10">
          <img
            src={moreLifeMockup4}
            alt="More Life Mockup 4"
            className="w-full max-w-2xl"
          />
        </div>
      </section>
    </div>
  );
}
