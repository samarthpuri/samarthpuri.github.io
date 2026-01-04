import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FilmstripGallery } from "@/components/FilmstripGallery";
import portrait1 from "@/assets/portrait-1.jpg";
import portrait2 from "@/assets/portrait-2.jpg";
import portrait3 from "@/assets/portrait-3.jpg";
import portrait4 from "@/assets/portrait-4.jpg";
import portrait5 from "@/assets/portrait-5.jpg";
import portrait6 from "@/assets/portrait-6.jpg";
import portrait7 from "@/assets/portrait-7.jpg";
import portrait8 from "@/assets/portrait-8.jpg";

const featuredImages = [
  { src: portrait1, caption: "Marcus Johnson - Musician", title: "Music in Motion", year: "2024" },
  { src: portrait2, caption: "Sophia Chen - Artist", title: "Creative Voices", year: "2024" },
  { src: portrait3, caption: "David Martinez - Writer", title: "Literary Portraits", year: "2023" },
  { src: portrait4, caption: "Jordan Rivers - Athlete", title: "Sports Documentary", year: "2023" },
  { src: portrait5, caption: "Isabella Ferrari - Designer", title: "Fashion Makers", year: "2024" },
  { src: portrait6, caption: "Thomas Anderson - Chef", title: "Culinary Portraits", year: "2024" },
  { src: portrait7, caption: "Amara Williams - Dancer", title: "Movement Studies", year: "2023" },
  { src: portrait8, caption: "James Chen - Director", title: "Behind the Lens", year: "2024" },
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 flex flex-col justify-center">
        <FilmstripGallery images={featuredImages} />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
