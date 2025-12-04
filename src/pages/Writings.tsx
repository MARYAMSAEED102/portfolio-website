import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const articles = [
  {
    title:
      "The Clash Between Aesthetic Trends and Usability: Where Do We Draw the Line?",
    description:
      "This article explores the tension between trendy aesthetics and practical usability in design, emphasizing the need for balance. It argues that while visual appeal is important, it should never compromise user experience.",
    date: "Aug 4, 2024",
    readTime: "3 min read",
    link: "https://medium.com/@maryamsaeed0119/the-clash-between-aesthetic-trends-and-usability-where-do-we-draw-the-line-fdb940ed9550",
  },
  {
    title: "Design Systems: Your Ultimate Cheat Code for UX Design Success",
    description:
      "Design systems streamline UX design by providing reusable components and consistent guidelines, making product development faster and more scalable. They are the ultimate cheat code for maintaining quality while accelerating delivery.",
    date: "Aug 18, 2024",
    readTime: "2 min read",
    link: "https://medium.com/@maryamsaeed0119/design-systems-your-ultimate-cheat-code-for-ux-design-success-a6449f2ab1c1",
  },
  {
    title: "Social Media Hesitation: More Than Just Procrastination",
    description:
      "Social media hesitation often runs deeper than procrastination. It is about fear, pressure, and emotional barriers. Behind every delayed post is a story of self-doubt, overthinking, and the fear of being misunderstood.",
    date: "Jan 20, 2025",
    readTime: "2 min read",
    link: "https://medium.com/@maryamsaeed0119/title-social-media-hesitation-its-more-than-just-procrastination-9410e94ddb81",
  },
];

export default function Writings() {
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
      {/* Design Thoughts */}
      <section>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 md:mb-8">
          DESIGN
          <br />
          <span className="text-portfolio-text-muted">THOUGHTS</span>
        </h2>

        <div className="space-y-8">
          {articles.map((article, index) => (
            <a
              key={index}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="bg-card border-border hover:bg-secondary/50 transition-colors cursor-pointer group">
                <CardContent className="p-4 md:p-6 lg:p-8">
                  <div className="flex items-start justify-between mb-4 gap-4">
                    <h3 className="font-semibold text-foreground text-lg md:text-xl lg:text-2xl leading-tight flex-1 group-hover:text-portfolio-orange transition-colors">
                      {article.title}
                    </h3>
                    <ExternalLink
                      className="text-portfolio-text-muted group-hover:text-portfolio-orange transition-colors flex-shrink-0 mt-1"
                      size={20}
                    />
                  </div>
                  <p className="text-portfolio-text-muted mb-4 md:mb-6 leading-relaxed text-sm md:text-base lg:text-lg">
                    {article.description}
                  </p>
                  <div className="flex justify-between items-center text-sm text-portfolio-text-muted">
                    <span className="font-medium">{article.date}</span>
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
