/* eslint-disable react/jsx-no-comment-textnodes */
import Link from "next/link";

export default function NavbarMenu({ isActive, title, subtitle }) {
  return (
    <li className="flex flex-col space-y-1 text-center group">
      <Link
        className={`text-4xl font-medium group-hover:text-blue-500 ${
          isActive ? "text-blue-500" : ""
        }`}
        href="#home"
      >
        {title}
      </Link>
      <span className="text-xs text-gray-400">{subtitle}</span>
    </li>
  );
}
