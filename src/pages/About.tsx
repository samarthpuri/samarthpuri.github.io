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
                <p>I’m a full-stack product designer working across research, strategy, design, and engineering. I enjoy building systems where design decisions shape how people think, trust, and scale with technology.</p>

                <p>
                  I grew up in a household of designers—my mom an interior designer, my dad an architect—which taught me to value structure, craft, and how environments influence behavior. Today, that shows up in my work designing developer platforms: clear mental models, strong foundations, and experiences that feel predictable in production.
                </p>

                <p>
                  I'm happiest working on complex products where design is a core part of the system—not a layer added at the end.
                </p>

                

                <div className="pt-8">
                  <h3 className="text-title-3 font-serif mb-4">Work history</h3>
                  
                  <div className="space-y-4 text-subhead">
                    <div>
                      <p className="font-semibold mb-2">Twilio</p>
                      <p className="text-gray-600">
                        Senior Product Designer · February 2024 – Present
                      </p>
                    </div>

                    <div>
                      <p className="font-semibold mb-2">Twilio</p>
                      <p className="text-gray-600">
                        Product Designer · February 2022 – February 2024
                      </p>
                    </div>

                    <div>
                      <p className="font-semibold mb-2">Twilio</p>
                      <p className="text-gray-600">
                        Product Design Intern · May 2021 – August 2021
                      </p>
                    </div>

                    <div>
                      <p className="font-semibold mb-2">University of Michigan</p>
                      <p className="text-gray-600">
                        UX Researcher · February 2020 – August 2020
                      </p>
                    </div>

                    <div>
                      <p className="font-semibold mb-2">University of Arizona</p>
                      <p className="text-gray-600">
                        UX Researcher · August 2018 – May 2019
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-8">
                  <h3 className="text-title-3 font-serif mb-4">Education</h3>
                  
                  <div className="space-y-4 text-subhead">
                    <div>
                      <p className="font-semibold mb-2">University of Michigan</p>
                      <p className="text-gray-600">
                        Master of Science in Information · Human-Computer Interaction (HCI) emphasis · 2021
                      </p>
                    </div>

                    <div>
                      <p className="font-semibold mb-2">University of Arizona</p>
                      <p className="text-gray-600">
                        Bachelor of Science in Information Science & Technology · 2019
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-8">
                  <h3 className="text-title-3 font-serif mb-4">Contact</h3>
                  <p className="text-subhead">
                    <span className="font-semibold">Email:</span> samarth.ak.puri@gmail.com<br />
                    <span className="font-semibold">Phone:</span> (408) 386-7786<br />
                    <span className="font-semibold">LinkedIn:</span> <a href="https://linkedin.com/in/samarth-puri" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">linkedin.com/in/samarth-puri</a>
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