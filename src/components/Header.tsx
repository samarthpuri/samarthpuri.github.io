import { Link, useLocation } from "react-router-dom";

const navigation = [
  { name: "Work", href: "/" },
  { name: "About", href: "/about" },
];

export const Header = () => {
  const location = useLocation();

  return (
    <header className="flex justify-between items-center h-[55px] px-5 md:px-10 py-4 bg-white">
      <h1 className="text-base md:text-lg font-bold tracking-[0] leading-[25px]">
        <Link to="/" className="hover:opacity-80 transition-opacity duration-300">
          Sam Puri
        </Link>
      </h1>
      <nav className="flex items-center gap-4 md:gap-6">
        {navigation.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <Link
              key={item.name}
              to={item.href}
              className={`text-sm font-medium tracking-[0] leading-[25px] transition-opacity duration-300 ${
                isActive ? "text-black" : "text-gray-400 hover:text-black"
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>
    </header>
  );
};
