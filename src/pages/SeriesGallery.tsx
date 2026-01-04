import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FilmstripGallery } from "@/components/FilmstripGallery";
import { useLocation } from "react-router-dom";
import portrait1 from "@/assets/portrait-1.jpg";
import portrait2 from "@/assets/portrait-2.jpg";
import portrait3 from "@/assets/portrait-3.jpg";
import portrait4 from "@/assets/portrait-4.jpg";
import portrait5 from "@/assets/portrait-5.jpg";
import portrait6 from "@/assets/portrait-6.jpg";
import portrait7 from "@/assets/portrait-7.jpg";
import portrait8 from "@/assets/portrait-8.jpg";

const seriesData = {
  portraits: {
    title: "Portrait Series",
    images: [
      { src: portrait2, caption: "Sophia Chen - Artist", title: "Creative Voices", year: "2024" },
      { src: portrait1, caption: "Marcus Johnson - Musician", title: "Music in Motion", year: "2024" },
      { src: portrait3, caption: "David Martinez - Writer", title: "Literary Portraits", year: "2023" },
      { src: portrait5, caption: "Isabella Ferrari - Designer", title: "Fashion Makers", year: "2024" },
      { src: portrait7, caption: "Amara Williams - Dancer", title: "Movement Studies", year: "2023" },
      { src: portrait8, caption: "James Chen - Director", title: "Behind the Lens", year: "2024" },
    ],
  },
  documentary: {
    title: "Documentary",
    images: [
      { src: portrait4, caption: "Training Session", title: "Athletes", year: "2023" },
      { src: portrait6, caption: "Kitchen Stories", title: "Culinary Arts", year: "2024" },
      { src: portrait3, caption: "Writing Space", title: "Writers at Work", year: "2023" },
      { src: portrait1, caption: "Studio Session", title: "Making Music", year: "2024" },
      { src: portrait7, caption: "Rehearsal", title: "Dance Documentary", year: "2023" },
      { src: portrait8, caption: "On Set", title: "Film Production", year: "2024" },
    ],
  },
  editorial: {
    title: "Editorial Work",
    images: [
      { src: portrait5, caption: "Spring Collection", title: "Fashion Editorial", year: "2024" },
      { src: portrait2, caption: "Studio Portrait", title: "Magazine Feature", year: "2024" },
      { src: portrait8, caption: "Interview Series", title: "The New Yorker", year: "2023" },
      { src: portrait1, caption: "Album Release", title: "Rolling Stone", year: "2024" },
      { src: portrait6, caption: "Restaurant Profile", title: "Food & Wine", year: "2024" },
      { src: portrait4, caption: "Olympic Preview", title: "Sports Illustrated", year: "2023" },
    ],
  },
};

export default function SeriesGallery() {
  const location = useLocation();
  const seriesKey = location.pathname.slice(1) as keyof typeof seriesData;
  const series = seriesData[seriesKey];

  if (!series) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 flex flex-col justify-center">
        <FilmstripGallery images={series.images} />
      </main>
      
      <Footer />
    </div>
  );
}
