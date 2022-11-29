/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */

export default function HeroRightMenu({ subtitle, title, info, onClick }) {
  return (
    <li onClick={onClick} className="flex h-12 space-x-2 md:space-x-6 group">
      <div className="space-y-1">
        <div className="w-1 h-full bg-slate-800 rounded-3xl group-hover:bg-blue-500" />
      </div>
      <div className="flex flex-col cursor-pointer group-hover:bg-blue-500 transition duration-200 ease-in-out h-auto flex-1 rounded-md px-2">
        <span className="text-gray-400 text-xs font-semibold group-hover:text-gray-50">
          // {info}
        </span>
        <div className="space-x-2">
          <span className="font-bold">"{title}"</span>
          <span className="font-bold">=&gt;</span>
          <span className="font-bold text-blue-500 group-hover:text-gray-50">
            {subtitle}
          </span>
          <span className="font-bold text-xl">,</span>
        </div>
      </div>
    </li>
  );
}
