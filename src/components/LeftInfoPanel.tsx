import { ScrollArea } from "@/components/ui/scroll-area";
export const LeftInfoPanel = () => {
  return <div className="h-auto flex flex-col p-[25px] pb-0 max-w-[900px] select-none md:h-full md:p-10 md:pr-20 md:pb-0">
      {/* Name */}
      <h2 className="text-[14vw] font-medium leading-[1em] mt-0 mb-[55px] relative left-0 md:text-[5.2rem] md:mt-[55px] md:left-[-7px]">Sam
Puri</h2>

      {/* Role */}
      <h3 className="text-2xl font-medium mt-0 mb-8 md:mb-10">
        Full Stack Product Designer
        <br />
        Research + Design + Code
      </h3>

      {/* Bio Scrollable Area */}
      <ScrollArea className="h-auto pr-10 mb-10 custom-scrollbar overflow-auto md:h-[calc(100vh-380px)]">
        <div className="text-[16px] leading-[1.5em] pr-4 [&_p]:m-0 [&_p]:mb-[25px] [&_strong]:font-bold [&_em]:italic [&_a]:text-black [&_a]:no-underline [&_a]:font-medium [&_a:hover]:opacity-50">
          <p>
            Marcus Chen is a visual artist and photographer whose work captures
            the intersection of humanity and nature through an intimate lens.
            His approach blends documentary authenticity with artistic vision,
            creating images that reveal both the extraordinary and the everyday.
          </p>

          <p>
            Chen's diverse portfolio spans portraiture, wildlife, and abstract
            compositions, each series exploring themes of connection and
            contrast. From intimate human moments to sweeping natural landscapes,
            his images have been featured in international exhibitions and
            publications. His recent work examines the delicate balance between
            stillness and motion, capturing fleeting moments that speak to
            universal human experiences across cultures and environments.
          </p>
        </div>
      </ScrollArea>

      {/* Contact Section */}
      <div className="space-y-[30px] text-2xl font-medium pl-5 -ml-[25px]">
        <div className="leading-snug">
          <p>508 W. 26th St., 7A</p>
          
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