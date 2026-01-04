import { ScrollArea } from "@/components/ui/scroll-area";
export const LeftInfoPanel = () => {
  return <div className="h-auto flex flex-col p-[25px] pb-0 max-w-[900px] select-none md:h-full md:p-10 md:pr-20 md:pb-0">
      {/* Name */}
      <h2 className="text-[14vw] font-medium leading-[1em] mt-0 mb-[55px] relative left-0 md:text-[5.2rem] md:mt-[55px] md:left-[-7px]">Sam
Puri</h2>

      {/* Role */}
      <div className="mb-8 md:mb-10">
        <h3 className="text-2xl font-medium leading-tight">Full Stack Product Designer</h3>
        <h3 className="text-2xl font-medium leading-tight text-muted-foreground">Research + Design + Code</h3>
      </div>

      {/* Bio Scrollable Area */}
      

      {/* Contact Section */}
      <div className="space-y-[30px] text-2xl font-medium pl-5 -ml-[25px]">
        <div className="leading-snug">
          <p>Currently at <a href="https://twilio.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-50 transition-opacity duration-300">Twilio</a></p>
        </div>

        <a href="mailto:studio@marcuschen.com" className="block font-medium hover:opacity-50 transition-opacity duration-300">
          studio@marcuschen.com
        </a>

        <a href="http://instagram.com/marcuschen" target="_blank" rel="noopener noreferrer" className="block font-medium hover:opacity-50 transition-opacity duration-300">
          Instagram
        </a>
      </div>
    </div>;
};