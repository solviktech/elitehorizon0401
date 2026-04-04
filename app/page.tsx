'use client';

import { useEffect } from 'react';

export default function RootPage() {
  useEffect(() => {
    window.location.replace('./en/');
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center bg-surface-warm text-primary-dark">
      <p className="text-sm font-medium">Redirecting...</p>
      <noscript>
        <meta httpEquiv="refresh" content="0; url=./en/" />
      </noscript>
    </main>
  );
}
