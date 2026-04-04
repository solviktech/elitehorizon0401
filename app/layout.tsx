import type { Metadata } from 'next';
import './globals.css';
import { siteUrl } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // The [locale] layout owns the <html> and <body> shell.
  // This root layout is intentionally a pass-through to avoid
  // nested document structure errors.
  return children as any;
}
