import Image from "next/image";

export default function ProjectCard({
  title,
  description,
  image,
  link,
  github,
  stacks,
}) {
  return (
    <div
      className={`w-auto p-5 overflow-hidden bg-gradient-to-br from-rose-400 to-red-500 rounded-xl flex items-start space-x-2 h-96 even:from-violet-400 even:to-purple-500`}
    >
      <div className="w-1/3">
        <div className="relative w-48 h-48 md:h-60 md:w-60">
          <div className="absolute -left-24 -top-8 w-full h-full rounded-full overflow-hidden border ">
            <Image layout="fill" className="object-cover" alt="" src={image} />
          </div>
        </div>
      </div>
      <div className="w-auto flex flex-col justify-around h-full">
        <div className="space-y-1">
          <h1 className="text-base font-bold md:text-2xl">{title}</h1>
          <p className="text-xs text-white md:text-base">{description}</p>
        </div>
        <div className="space-y-1">
          <span className="font-bold text-gray-100">Tech Stack</span>
          <div className="flex flex-wrap gap-4 items-center">
            {stacks?.map((stack, i) => (
              <div className="rounded-md overflow-hidden" key={i}>
                <Image width={25} height={25} src={stack} alt="" />
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <a className="link-card" href={link}>
            Demo
          </a>
          <a className="link-card" href={github}>
            Github
          </a>
        </div>
      </div>
    </div>
  );
}
