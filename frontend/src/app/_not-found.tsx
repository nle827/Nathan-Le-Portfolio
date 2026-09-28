import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-white text-slate-900">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="text-slate-600">The page you are looking for does not exist.</p>
      <Link href="/" className="text-slate-900 underline underline-offset-4 hover:text-slate-600">
        Back home
      </Link>
    </div>
  );
}
