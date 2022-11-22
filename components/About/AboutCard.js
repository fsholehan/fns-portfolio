import Image from "next/image";
import { SocialIcon } from "react-social-icons";

export default function AboutCard() {
  return (
    <div className="w-full flex flex-col md:flex-row bg-gray-900 h-auto md:h-96 rounded-2xl overflow-hidden py-5 px-9">
      <div className="w-full md:w-3/4 flex flex-col space-y-5 md:space-y-0 md:justify-around h-full">
        <div>
          <span className="text-xs uppercase font-medium">kepo ya?</span>
          <h1 className="text-xl md:text-3xl font-semibold">
            Kenalan dengan Fuad
          </h1>
        </div>
        <div className="space-y-3 w-full md:w-2/4">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae a
            molestiae, fugiat, qui magni modi blanditiis, soluta corrupti
            assumenda odio nostrum. Iste, exercitationem rerum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
            atque?
          </p>
        </div>
        <div className="w-full md:w-1/2 space-x-3">
          <SocialIcon url="https://twitter.com/sholehanfuad" fgColor="white" />
          <SocialIcon url="https://github.com/fsholehan" fgColor="white" />
          <SocialIcon url="https://facebook.com/fsholehan" fgColor="white" />
          <SocialIcon
            url="https://id.linkedin.com/in/fuad-nur-sholehan-6421661b8/"
            fgColor="white"
          />
        </div>
      </div>
      <div className="w-1/4 hidden md:block relative">
        <div className="w-[90%] h-full relative rounded-xl overflow-hidden mx-auto z-50">
          <Image
            src="/images/fnd.jpg"
            alt=""
            layout="fill"
            className="object-cover"
          />
        </div>
        <div className="absolute w-[90%] h-[96%] bg-gray-800 -left-1 rounded-xl top-2 z-40"></div>
        <div className="absolute w-[90%] h-[92%] bg-gray-800/70 -left-4 rounded-xl top-4 z-30"></div>
        <div className="absolute w-[90%] h-[88%] bg-gray-800/40 -left-7 rounded-xl top-6 z-20"></div>
      </div>
    </div>
  );
}
