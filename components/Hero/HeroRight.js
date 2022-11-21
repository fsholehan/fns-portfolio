/* eslint-disable react/jsx-no-comment-textnodes */

import HeroRightMenu from "./HeroRightMenu";

/* eslint-disable react/no-unescaped-entities */
export default function HeroRight() {
  return (
    <div className="w-80 h-auto bg-slate-900 text-gray-50 p-5 rounded-xl mx-auto">
      <div>
        <div className="flex space-x-1 items-center">
          <span className="text-red-500 font-bold">"menu"</span>
          <span className="font-bold">=&gt;</span>
          <span className="font-bold">[</span>
        </div>
        <ul className="my-5 space-y-2">
          <HeroRightMenu title="Beranda" subtitle="Depan" info="kedepan yuk" />
          <HeroRightMenu
            title="Project"
            subtitle="Seni"
            info="lihat-lihat dulu"
          />
          <HeroRightMenu title="Tentang" subtitle="Kepo" info="kepoin dong" />
          <HeroRightMenu title="Kontak" subtitle="Kenal" info="kenalan yuk" />
        </ul>
        <div>
          <span className="font-bold">]</span>
        </div>
      </div>
    </div>
  );
}
