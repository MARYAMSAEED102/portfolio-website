import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ExternalLink, Layers, Grid2X2 } from "lucide-react";
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
// Tool images
import figmaImage from "@/assets/figma.png";
import chatgptImage from "@/assets/chatgpt.png";
import miroImage from "@/assets/miro.png";
import jiraImage from "@/assets/jira.png";
import sketchImage from "@/assets/sketch.png";
import mazeImage from "@/assets/maze.png";
import photoshopImage from "@/assets/photoshop.png";
import illustratorImage from "@/assets/illustrator.png";

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
  { name: "TV BITS", description: "Streaming Platform", image: tvBitsImage, link: "/projects/tv-bits" },
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
    link: "/projects/lv-tech",
  },
];
const tools = [
  { 
    name: "Figma", 
    description: "Design Tool",
    image: figmaImage 
  },
  { 
    name: "ChatGPT", 
    description: "AI Assistant",
    image: chatgptImage 
  },
  { 
    name: "Miro", 
    description: "Whiteboarding Tool",
    image: miroImage 
  },
  { 
    name: "Jira", 
    description: "Project Management Tool",
    image: jiraImage 
  },
  { 
    name: "Sketch", 
    description: "Design Tool",
    image: sketchImage 
  },
  { 
    name: "Maze", 
    description: "UX Research Tool",
    image: mazeImage 
  },
  { 
    name: "Photoshop", 
    description: "Editing Tool",
    image: photoshopImage 
  },
  { 
    name: "Illustrator", 
    description: "Vector Graphics Tool",
    image: illustratorImage 
  },
];

const articles = [
  {
    title:
      "The Clash Between Aesthetic Trends and Usability: Where Do We Draw the Line?",
    description:
      "This article explores the tension between trendy aesthetics and practical usability in design, emphasizing the need for balance.",
    date: "Aug 4, 2024",
    readTime: "3 min read",
    link: "https://medium.com/@maryamsaeed0119/the-clash-between-aesthetic-trends-and-usability-where-do-we-draw-the-line-fdb940ed9550",
  },
  {
    title: "Design Systems: Your Ultimate Cheat Code for UX Design Success",
    description:
      "Design systems streamline UX design by providing reusable components and consistent guidelines.",
    date: "Aug 18, 2024",
    readTime: "2 min read",
    link: "https://medium.com/@maryamsaeed0119/design-systems-your-ultimate-cheat-code-for-ux-design-success-a6449f2ab1c1",
  },
  {
    title: "Social Media Hesitation: It's More Than Just Procrastination",
    description:
      "Social media hesitation often runs deeper than procrastination.",
    date: "Jan 20, 2025",
    readTime: "2 min read",
    link: "https://medium.com/@maryamsaeed0119/title-social-media-hesitation-its-more-than-just-procrastination-9410e94ddb81",
  },
];

export default function Home() {
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

      {/* Statistics Section */}
      <section>
        <div className="flex flex-wrap gap-3 md:gap-4 justify-center lg:justify-start">
          <Card className="bg-portfolio-black p-4 md:p-6 text-white">
            <CardContent className="p-0">
              <div className="text-4xl md:text-5xl font-bold">2</div>
              <div className="text-xs text-white/70">YEARS OF EXPERIENCE</div>
            </CardContent>
          </Card>

          <Card className="bg-portfolio-black  p-4 md:p-6 text-white">
            <CardContent className="p-0">
              <div className="text-4xl md:text-5xl font-bold">+20</div>
              <div className="text-xs text-white/70">PROJECTS COMPLETED</div>
            </CardContent>
          </Card>

          <Card className="bg-portfolio-black  p-4 md:p-6 text-white">
            <CardContent className="p-0">
              <div className="text-4xl md:text-5xl font-bold">90%</div>
              <div className="text-xs text-white/70">CLIENT SATISFACTION</div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <div className="flex flex-wrap gap-3 md:gap-4 justify-center lg:justify-start">
          <Card className="bg-portfolio-orange p-4 md:p-6 text-background rounded-lg w-56 h-48 flex items-center justify-center">
            <CardContent className="p-0 text-left">
              <Layers className="w-8 h-8 md:w-10 md:h-10 mb-2 text-white" />
              <div className="text-sm text-white font-bold leading-tight">
                DYNAMIC ANIMATION, MOTION DESIGN
              </div>
            </CardContent>
          </Card>

          <Card className="bg-portfolio-green p-4 md:p-6 text-background rounded-lg  w-56  h-48 flex items-center justify-center">
            <CardContent className="p-0 text-left">
              <Grid2X2 className="w-8 h-8 md:w-10 md:h-10 mb-2 text-black" />
              <div className="text-sm text-black font-bold leading-tight">
                SKETCH, MIRO FIGMA, MAZE
              </div>
            </CardContent>
          </Card>
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
                <Link to={project.link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink
                    className="text-portfolio-text-muted flex-shrink-0"
                    size={16} 
                  />
                </Link>
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
                  <Link to={project.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink
                      className="text-portfolio-text-muted flex-shrink-0"
                      size={16}
                    />
                  </Link>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 md:mb-8">
          2 YEARS OF
          <br />
          <span className="text-portfolio-text-muted">EXPERIENCE</span>
        </h2>

        <div className="space-y-8">
          <div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-1">
              <h3 className="text-lg md:text-xl font-semibold text-foreground">
                Associate UI/UX Designer
              </h3>
              <span className="text-portfolio-text-muted text-sm md:text-base">
                Code District
              </span>
            </div>
            <p className="text-portfolio-text-muted text-sm mb-1">
              Designed intuitive web/mobile UIs, maintained the design system,
              and ensured smooth cross-functional collaboration
            </p>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-xs md:text-sm text-portfolio-text-muted gap-1">
              <span>07/2024 - Present</span>
              <span>Full time Onsite, Lahore, Pakistan</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-semibold text-foreground">
                Associate UI/UX Designer
              </h3>
              <span className="text-portfolio-text-muted">LORDEV</span>
            </div>
            <p className="text-portfolio-text-muted text-sm mb-1">
              Designed scalable interfaces, ensured design system consistency,
              and supported product teams through research and design delivery
            </p>
            <div className="flex justify-between items-center text-sm text-portfolio-text-muted">
              <span>01/2024 - 07/2024</span>
              <span>Remote Part time, Lahore, Pakistan</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-semibold text-foreground">
                Creative Designer
              </h3>
              <span className="text-portfolio-text-muted">IOI Technology</span>
            </div>
            <p className="text-portfolio-text-muted text-sm mb-1">
              Developed user-centric web/mobile wireframes and prototypes for a
              global IT services provider, enhancing UX with positive user
              feedback
            </p>
            <div className="flex justify-between items-center text-sm text-portfolio-text-muted">
              <span>01/2023 - 06/2023</span>
              <span>Part time Hybrid, Lahore, Pakistan</span>
            </div>
          </div>
        </div>
      </section>

      {/* Working Tools */}
      <section>
        <h2 className="text-4xl font-bold text-foreground mb-8">
          WORKING
          <br />
          <span className="text-portfolio-text-muted">TOOLS</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {tools.map((tool, index) => (
            <Card
              key={index}
              className="bg-card border-border p-3 md:p-4 hover:bg-secondary/50 transition-colors"
            >
              <CardContent className="p-0">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0">
                    <img
                      src={tool.image}
                      alt={tool.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base md:text-lg font-semibold text-foreground mb-1">
                      {tool.name}
                    </h3>
                    <p className="text-xs md:text-sm text-portfolio-text-muted">
                      {tool.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Design Thoughts */}
      <section>
        <h2 className="text-4xl font-bold text-foreground mb-8">
          DESIGN
          <br />
          <span className="text-portfolio-text-muted">THOUGHTS</span>
        </h2>

        <div className="space-y-6">
          {articles.map((article, index) => (
            <a
              key={index}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="bg-card border-border hover:bg-secondary/50 transition-colors cursor-pointer group">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-foreground text-lg leading-tight flex-1 pr-4 group-hover:text-portfolio-orange transition-colors">
                      {article.title}
                    </h3>
                    <ExternalLink
                      className="text-portfolio-text-muted group-hover:text-portfolio-orange transition-colors flex-shrink-0"
                      size={20}
                    />
                  </div>
                  <p className="text-portfolio-text-muted text-sm mb-3 leading-relaxed">
                    {article.description}
                  </p>
                  <div className="flex justify-between items-center text-xs text-portfolio-text-muted">
                    <span>{article.date}</span>
                    <span>{article.readTime}</span>
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
