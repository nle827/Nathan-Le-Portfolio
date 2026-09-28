import Link from "next/link";

const links = [
  { name: "About", href: "/#about" },
  { name: "Work", href: "/#work" },
  { name: "Impact", href: "/#impact" },
  { name: "Contact", href: "/#contact" },
];

const Footer = () => {
  return (
    <footer className="relative w-full py-10 px-6 flex flex-col items-center gap-4">
      <span className="text-base font-semibold text-[var(--olive-800)]">Nathan Le</span>

      <nav>
        <ul className="flex flex-wrap items-center justify-center gap-6">
          {links.map((link) => (
            <li key={link.name}>
              <Link href={link.href} className="text-sm text-stone-600 hover:text-[var(--olive-700)] transition-colors">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="text-xs text-stone-400">
        © {new Date().getFullYear()} Nathan Le. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
