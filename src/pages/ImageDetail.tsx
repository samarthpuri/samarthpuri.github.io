import { useParams, Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { galleryImages } from "@/data/galleryImages";
import { usePassword } from "@/contexts/PasswordContext";
import { PasswordGate } from "@/components/PasswordGate";
import { ThemeToggle } from "@/components/ThemeToggle";
const navigation = [{
  name: "Work",
  href: "/"
}, {
  name: "About",
  href: "/about"
}];
const ImageDetail = () => {
  const {
    id
  } = useParams();
  const location = useLocation();
  const {
    isUnlocked
  } = usePassword();
  const imageIndex = parseInt(id || "0", 10);
  const image = galleryImages[imageIndex];
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);
  if (!image) {
    return <div className="min-h-screen flex items-center justify-center bg-background">
        <p className="text-muted-foreground">Image not found</p>
      </div>;
  }

  // Show password gate if project is protected and not unlocked
  if (image.passwordProtected && !isUnlocked) {
    return <PasswordGate><></></PasswordGate>;
  }
  return <div className="fixed inset-0 bg-background overflow-hidden">
      {/* Header */}
      <header className="flex justify-between items-center h-[55px] px-10 py-4 absolute top-0 left-0 right-0 z-[1090] bg-background">
        <h1 className="text-lg font-bold tracking-[0] leading-[25px]">
          <Link to="/" className="hover:opacity-80 transition-opacity duration-300">Sam Puri</Link>
        </h1>
        <nav className="flex items-center gap-6">
          {navigation.map(item => {
          const isActive = location.pathname === item.href;
          return <Link key={item.name} to={item.href} className={`text-sm font-medium tracking-[0] leading-[25px] transition-opacity duration-300 ${isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}>
                {item.name}
              </Link>;
        })}
          <ThemeToggle />
        </nav>
      </header>

      {/* Content Area */}
      <div className="absolute top-[55px] bottom-0 left-0 right-0 overflow-y-auto">
        <div className="flex flex-col items-center px-10 py-10">
          {/* Image */}
          <div className="w-full max-w-4xl">
            <img src={image.src.original} alt={image.title || `Image ${imageIndex + 1}`} className="w-full h-auto shadow-[0_2px_12px_rgba(0,0,0,0.08)] dark:shadow-[0_2px_12px_rgba(0,0,0,0.3)] ring-1 ring-black/5 dark:ring-white/10" />
          </div>

          {/* Case Study Content */}
          {image.caseStudy && <div className="w-full max-w-4xl mt-12 space-y-8">
              {/* Goal */}
              <div>
                <h2 className="text-sm font-semibold tracking-wide text-foreground mb-2">The Goal</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">{image.caseStudy.goal}</p>
                {/* Single external URL */}
                {image.caseStudy.externalUrl && <a href={image.caseStudy.externalUrl} target="_blank" rel="noopener noreferrer" className="inline-block mt-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
                    View on console.twilio.com →
                  </a>}
                {/* Multiple external links */}
                {image.caseStudy.externalLinks && <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2">
                    {image.caseStudy.externalLinks.map((link: {
                label: string;
                url: string;
              }, index: number) => <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
                        {link.label}
                      </a>)}
                  </div>}
              </div>

              {/* Solution */}
              <div>
                <h2 className="text-sm font-semibold tracking-wide text-foreground mb-2">The Solution</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">{image.caseStudy.solution}</p>
              </div>

              {/* Outcome */}
              <div>
                <h2 className="text-sm font-semibold tracking-wide text-foreground mb-2">The Outcome</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">{image.caseStudy.outcome}</p>
              </div>
            </div>}
        </div>
      </div>
    </div>;
};
export default ImageDetail;