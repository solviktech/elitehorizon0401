const DEFAULT_SITE_URL = 'https://elitehorizoncatering.com';

const repoBasePath =
  process.env.STATIC_EXPORT === 'true'
    ? `/${process.env.GITHUB_REPOSITORY?.split('/')[1] || 'elitehorizon0401'}`
    : '';

export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? repoBasePath;

export function withBasePath(path: string) {
  if (!path.startsWith('/')) {
    return path;
  }

  return `${basePath}${path}`;
}

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || DEFAULT_SITE_URL;
