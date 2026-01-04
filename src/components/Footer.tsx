export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full py-6 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-4">
          <button
            onClick={scrollToTop}
            className="text-base underline hover:opacity-70 transition-opacity duration-fast"
          >
            Back to Top
          </button>
        </div>
        <div className="text-right text-footnote text-gray-500">
          <p>e: contact@elenarossi.com</p>
          <p>m: +1 (555) 123-4567</p>
        </div>
      </div>
    </footer>
  );
};
