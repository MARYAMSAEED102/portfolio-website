interface ContactButtonsProps {
  isVisible: boolean;
}

export const ContactButtons = ({ isVisible }: ContactButtonsProps) => {
  return (
    <div className={`hidden lg:flex fixed bottom-4 left-4 md:bottom-8 md:left-8 flex-col z-50 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
    
      <a 
        href="https://www.behance.net/maryamsaeed18" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-portfolio-orange hover:bg-portfolio-orange/90 text-white px-3 py-2 md:px-6  md:py-3 rounded-md  transition-all duration-200 shadow-lg text-sm md:text font-bold text-center"
      >
        Behance
      </a>
      <a 
        href="https://linkedin.com/in/maryam-saeed-301b99200?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-portfolio-green hover:bg-portfolio-green/90 text-background px-3 py-2 md:px-6  md:py-3 rounded-md  transition-all duration-200 shadow-lg text-sm md:text-base font-bold mt-2 md:mt-3 text-center"
      >
        LinkedIn
      </a>
      <a 
        href="mailto:maryamsaeed0119@gmail.com"
        className="bg-white hover:bg-gray-100 text-black px-3 py-10 md:px-10 md:py-3 rounded-md transition-all duration-200 shadow-lg text-sm md:text-base font-bold mt-4 md:mt-6 text-center"
      >
        Contact me
      </a>
    </div>
  );
};
