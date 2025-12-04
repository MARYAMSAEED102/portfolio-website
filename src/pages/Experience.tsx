export default function Experience() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section>
        <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-8">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              UX/UI
              <br />
              <span className="text-portfolio-text-muted">DESIGNER</span>
            </h1>
            <p className="text-portfolio-text-muted mt-6 max-w-lg leading-relaxed mx-auto lg:mx-0">
              Passionate about crafting intuitive, engaging experiences that
              bring ideas to life. With a focus on beauty, clarity, and purpose,
              I transform visions into timeless digital products.
            </p>
          </div>
        </div>
      </section>
      {/* Experience Timeline */}
      <section>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 md:mb-8">
          2 YEARS OF
          <br />
          <span className="text-portfolio-text-muted">EXPERIENCE</span>
        </h2>

        <div className="space-y-12">
          <div className="border-l-2 border-border pl-6 md:pl-8 relative">
            <div className="absolute -left-2 top-0 w-4 h-4 bg-portfolio-orange rounded-full"></div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
              <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                Associate UI/UX Designer
              </h3>
              <span className="text-portfolio-text-muted font-medium text-sm md:text-base">
                Code District
              </span>
            </div>
            <p className="text-portfolio-text-muted mb-4 leading-relaxed">
              Designed intuitive web/mobile UIs, maintained the design system,
              and ensured smooth cross-functional collaboration
            </p>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center text-xs md:text-sm text-portfolio-text-muted gap-1">
              <span className="font-medium">07/2024 - Present</span>
              <span>Full time Onsite, Lahore, Pakistan</span>
            </div>
          </div>

          <div className="border-l-2 border-border pl-8 relative">
            <div className="absolute -left-2 top-0 w-4 h-4 bg-portfolio-orange rounded-full"></div>
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-semibold text-foreground">
                Associate UI/UX Designer
              </h3>
              <span className="text-portfolio-text-muted font-medium">
                LORDEV
              </span>
            </div>
            <p className="text-portfolio-text-muted mb-4 leading-relaxed">
              Designed scalable interfaces, ensured design system consistency,
              and supported product teams through research and design delivery
            </p>
            <div className="flex justify-between items-center text-sm text-portfolio-text-muted">
              <span className="font-medium">01/2024 - 07/2024</span>
              <span>Remote Part time, Lahore, Pakistan</span>
            </div>
          </div>

          <div className="border-l-2 border-border pl-8 relative">
            <div className="absolute -left-2 top-0 w-4 h-4 bg-portfolio-orange rounded-full"></div>
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-semibold text-foreground">
                Creative Designer
              </h3>
              <span className="text-portfolio-text-muted font-medium">
                IOI Technology
              </span>
            </div>
            <p className="text-portfolio-text-muted mb-4 leading-relaxed">
              Developed user-centric web/mobile wireframes and prototypes for a
              global IT services provider, enhancing UX with positive user
              feedback
            </p>
            <div className="flex justify-between items-center text-sm text-portfolio-text-muted">
              <span className="font-medium">01/2023 - 06/2023</span>
              <span>Part time Hybrid, Lahore, Pakistan</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
