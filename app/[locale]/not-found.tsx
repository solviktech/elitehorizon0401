import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-primary-dark flex items-center justify-center text-center px-4">
      <div>
        <div className="text-accent text-7xl font-bold mb-4">404</div>
        <h1 className="text-white text-2xl font-bold mb-3">Page Not Found</h1>
        <p className="text-white/60 text-base mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/en"
          className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-6 py-3 rounded transition-colors duration-200"
        >
          Return to Homepage
        </Link>
      </div>
    </div>
  );
}
