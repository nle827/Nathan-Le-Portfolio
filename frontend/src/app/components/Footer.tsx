import Link from "next/link";

const links = [
  { name: "About", href: "/#about" },
  { name: "Projects", href: "/#projects" },
  { name: "Contact", href: "/#contact" },
];

const Footer = () => {
  return (
    <footer className="w-full border-t border-slate-200 bg-white py-10 px-6 flex flex-col items-center gap-4">
      <span className="text-base font-semibold text-slate-900">Nathan Le</span>

      <nav>
        <ul className="flex flex-wrap items-center justify-center gap-6">
          {links.map((link) => (
            <li key={link.name}>
              <Link href={link.href} className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="text-xs text-slate-400">
        © {new Date().getFullYear()} Nathan Le. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
