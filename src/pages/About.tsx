import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import photographerPortrait from "@/assets/photographer-portrait.jpg";
export default function About() {
  return <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 px-4 md:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12">
            {/* Left Column - Portrait */}
            

            {/* Right Column - Biography */}
            <div className="md:col-span-3">
              <h2 className="text-title-1 font-serif mb-6">About</h2>
              
              <div className="space-y-6 text-body text-gray-700 leading-relaxed">
                <p>
                  Marcus Chen is a visual artist and photographer based in New York, 
                  specializing in capturing the profound beauty found in both human connection and the natural world. 
                  His work bridges documentary photography and fine art, creating visual narratives that span 
                  portraiture, wildlife, abstract compositions, and cultural exploration.
                </p>

                <p>
                  With over fifteen years of experience, Marcus has developed a signature style 
                  characterized by emotional depth, striking compositions, and an intuitive use of light. 
                  His photographs have been featured in publications including 
                  National Geographic, The New York Times Magazine, and Aperture.
                </p>

                <p>
                  Marcus's diverse projects explore themes of identity, nature, and human resilience. 
                  His series "Quiet Moments" documents intimate portraits across cultures, 
                  while "Wild Grace" captures the raw beauty of wildlife and landscapes in their 
                  most vulnerable and powerful states.
                </p>

                

                <div className="pt-8">
                  <h3 className="text-title-3 font-serif mb-4">Select Clients</h3>
                  
                  <div className="space-y-4 text-subhead">
                    <div>
                      <p className="font-semibold mb-2">Foundations & Institutions</p>
                      <p className="text-gray-600">
                        Ford Foundation · Guggenheim Museum · MacArthur Foundation · 
                        Whitney Museum of American Art
                      </p>
                    </div>

                    <div>
                      <p className="font-semibold mb-2">Editorial</p>
                      <p className="text-gray-600">
                        The New Yorker · Vanity Fair · The New York Times Magazine · 
                        Time · National Geographic · Rolling Stone
                      </p>
                    </div>

                    <div>
                      <p className="font-semibold mb-2">Commercial</p>
                      <p className="text-gray-600">
                        Apple · Netflix · Spotify · Adobe · The Atlantic
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-8">
                  <h3 className="text-title-3 font-serif mb-4">Contact</h3>
                  <p className="text-subhead">
                    <span className="font-semibold">Email:</span> contact@marcuschen.com<br />
                    <span className="font-semibold">Phone:</span> +1 (555) 123-4567<br />
                    <span className="font-semibold">Studio:</span> New York, NY
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>;
}