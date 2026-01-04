import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navigation = [
  { name: "Work", href: "/" },
  { name: "About", href: "/about" },
];

export const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full py-6 md:py-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between md:block">
          <Link to="/" className="block">
            <h1 className="font-serif text-[clamp(1.125rem,4vw,1.625rem)] tracking-tight uppercase">
              Marcus Chen Photography
            </h1>
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex gap-x-6 mt-4">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={`text-headline font-sans transition-colors duration-200 ${
                  isActive
                    ? "font-bold text-foreground"
                    : "font-normal text-gray-500 hover:text-gray-700"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Mobile navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-y-4">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-headline font-sans transition-colors duration-200 ${
                    isActive
                      ? "font-bold text-foreground"
                      : "font-normal text-gray-500"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>
        )}
      </div>
    </header>
  );
};
