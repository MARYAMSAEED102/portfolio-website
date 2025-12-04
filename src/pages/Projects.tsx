import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

import tvBitsImage from "@/assets/tv-bits.png";
import lvTechImage from "@/assets/lv-tech.png";
import mindHushImage from "@/assets/mind-hush.png";
import lottoStrategiesImage from "@/assets/lotto-strategies.png";
import lordevImage from "@/assets/lordev.png";
import moreLifeImage from "@/assets/more-life.png";
import nobleAdventureImage from "@/assets/noble-adventure.png";
import gymRepairsImage from "@/assets/gym-repairs.png";
import cumberlandBiotherapeuticsImage from "@/assets/cumberland.png";

const projects = [
  {
    name: "Mind Hush",
    description: "AI-driven mental health chatbot",
    image: mindHushImage,
    link: "/projects/mind-hush",
  },
  {
    name: "Lotto Strategies",
    description: "Lottery Strategy tools and Guidance",
    image: lottoStrategiesImage,
    link: "/projects/lotto-strategies",
  },
  { name: "LORDEV", description: "Soft Dev Company site", image: lordevImage, link: "/projects/lordev" },
  {
    name: "More Life",
    description: "Event Management and Ticketing System",
    image: moreLifeImage,
    link: "/projects/more-life",
  },
  {
    name: "Noble Adventure",
    description: "Travel and Tourism Company",
    image: nobleAdventureImage,
    link: "/projects/noble-adventure",
  },
  { name: "TV BITS", description: "Streaming Platform", image: tvBitsImage, link: "/projects/tv-bits-case-study" },
  {
    name: "Cumberland Biotherapeutics",
    description: "health-focused organization site",
    image: cumberlandBiotherapeuticsImage,
    link: "/projects/cumberland",
  },
  {
    name: "GYM REPAIRS",
    description: "Gym Repair and Maintenance Company site",
    image: gymRepairsImage,
    link: "/projects/gym-repairs",
  },
];

const caseStudies = [
  { name: "TV BITS", description: "Streaming Platform", image: tvBitsImage, link: "/projects/tv-bits-case-study" },
  {
    name: "LV Tech",
    description: "Technician Services Project",
    image: lvTechImage,
  },
];

export default function Projects() {
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

      {/* Case Studies */}
      <section>
        <h2 className="text-3xl md:text-6xl font-bold text-foreground mb-2">
          CASE STUDY
          <br />
          <span className="text-portfolio-text-muted">PROJECTS</span>
        </h2>

        <div className="space-y-4 mt-8">
          {caseStudies.map((project, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:bg-secondary/50 transition-colors cursor-pointer"
            >
              <CardContent className="p-4 md:p-6 flex items-center justify-between">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 overflow-hidden aspect-square">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-slate-700 rounded-lg"></div>
                    )}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-foreground text-sm md:text-base truncate">
                      {project.name}
                    </h3>
                    <p className="text-xs md:text-sm text-portfolio-text-muted line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </div>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink
                      className="text-portfolio-text-muted flex-shrink-0"
                      size={16}
                    />
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Recent Projects */}
      <section>
        <h2 className="text-3xl md:text-6xl font-bold text-foreground mb-2">
          RECENT
          <br />
          <span className="text-portfolio-text-muted">PROJECTS</span>
        </h2>

        <div className="space-y-4 mt-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:bg-secondary/50 transition-colors cursor-pointer"
            >
              <CardContent className="p-4 md:p-6 flex items-center justify-between">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg flex-shrink-0 overflow-hidden aspect-square">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-slate-700 rounded-lg"></div>
                    )}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-foreground text-sm md:text-base truncate">
                      {project.name}
                    </h3>
                    <p className="text-xs md:text-sm text-portfolio-text-muted line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </div>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink
                      className="text-portfolio-text-muted flex-shrink-0"
                      size={16}
                    />
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
