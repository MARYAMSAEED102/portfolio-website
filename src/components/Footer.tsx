import { Mail, ExternalLink } from "lucide-react";
import { forwardRef } from "react";

export const Footer = forwardRef<HTMLElement>((props, ref) => {
  return (
    <footer ref={ref} className="bg-portfolio-section-bg border-t border-border mt-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-foreground">
              MARYAM SAEED
            </h3>
            <p className="text-portfolio-text-muted text-sm leading-relaxed">
              UX/UI Designer passionate about crafting intuitive, engaging experiences 
              that bring ideas to life.
            </p>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">GET IN TOUCH</h4>
            <div className="space-y-3">
              <a 
                href="mailto:maryamsaeed0119@gmail.com"
                className="flex items-center gap-2 text-portfolio-text-muted hover:text-portfolio-orange transition-colors text-sm"
              >
                <Mail size={16} />
                maryamsaeed0119@gmail.com
              </a>
              <div className="text-portfolio-text-muted text-sm">
                Lahore, Pakistan
              </div>
            </div>
          </div>

          {/* Social Links Section */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">FOLLOW ME</h4>
            <div className="space-y-3">
              <a 
                href="https://www.behance.net/maryamsaeed18" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-portfolio-text-muted hover:text-portfolio-orange transition-colors text-sm group"
              >
                <span>Behance</span>
                <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a 
                href="https://linkedin.com/in/maryam-saeed-301b99200?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-portfolio-text-muted hover:text-portfolio-blue transition-colors text-sm group"
              >
                <span>LinkedIn</span>
                <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-8 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-portfolio-text-muted text-sm">
              © 2024 Maryam Saeed. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-portfolio-text-muted text-sm">
              <span>Designed with passion</span>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-portfolio-orange rounded-full"></div>
                <div className="w-2 h-2 bg-portfolio-green rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}); 
