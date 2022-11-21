import Image from "next/image";

export default function ProjectCard() {
  return (
    <div
      className={`w-auto p-5 overflow-hidden bg-gradient-to-br from-rose-400 to-red-500 rounded-xl flex items-start space-x-2 h-96 even:from-violet-400 even:to-purple-500`}
    >
      <div className="w-1/3">
        <div className="relative w-48 h-48 md:h-60 md:w-60">
          <div className="absolute -left-24 -top-8 w-full h-full rounded-full overflow-hidden border ">
            <Image
              layout="fill"
              className="object-cover"
              alt=""
              src="https://i.pinimg.com/564x/38/85/24/388524b585e5867ab7a87ec85e61fc0f.jpg"
            />
          </div>
        </div>
      </div>
      <div className="w-auto flex flex-col justify-around h-full">
        <div className="space-y-1">
          <h1 className="text-base font-bold md:text-2xl">
            Admusic - streaming songs for free
          </h1>
          <p className="text-xs text-white md:text-base">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Voluptatem, cum deleniti? Quas blanditiis, possimus saepe
            accusantium ipsum sequi at iste quibusdam distinctio veniam delectus
            assumenda.
          </p>
        </div>
        <div className="space-y-1">
          <span className="font-bold text-gray-100">Tech Stack</span>
          <div className="flex flex-wrap gap-4 items-center">
            <div className="rounded-md overflow-hidden">
              <Image width={25} height={25} src="/images/js.svg" alt="" />
            </div>
            <div className="rounded-md overflow-hidden">
              <Image
                width={25}
                height={25}
                src="/images/nextjs-logo.svg.png"
                alt=""
              />
            </div>
            <div className="rounded-md overflow-hidden">
              <Image
                width={25}
                height={25}
                src="/images/react-icon.svg.png"
                alt=""
              />
            </div>
            <div className="rounded-md overflow-hidden">
              <Image
                width={25}
                height={25}
                src="/images/tailwind-logo.svg.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <a className="link-card" href="https://admusic-mu.vercel.app">
            Demo
          </a>
          <a className="link-card" href="https://github.com">
            Github
          </a>
        </div>
      </div>
    </div>
  );
}
