import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 text-stone-900 px-4">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="text-stone-600">The page you are looking for does not exist.</p>
      <Link href="/" className="text-[var(--olive-700)] underline underline-offset-4 hover:text-[var(--olive-600)]">
        Back home
      </Link>
    </div>
  );
}
