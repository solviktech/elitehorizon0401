import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');
const isStaticExport = process.env.STATIC_EXPORT === 'true';
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] || 'elitehorizon0401';
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? (isStaticExport ? `/${repoName}` : '');

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: isStaticExport ? 'export' : undefined,
  trailingSlash: isStaticExport,
  skipTrailingSlashRedirect: isStaticExport,
  basePath,
  assetPrefix: basePath || undefined,
  images: {
    remotePatterns: [],
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
};

export default withNextIntl(nextConfig);
