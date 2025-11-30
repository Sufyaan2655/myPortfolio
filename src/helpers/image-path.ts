/**
 * Helper function to get the correct image path for GitHub Pages
 * When basePath is set, we need to prefix relative paths with it
 * 
 * For static export, NEXT_PUBLIC_ env vars are embedded at build time.
 * We also check the window location as a fallback for runtime detection.
 */
export const getImagePath = (path: string): string => {
  // If it's already an absolute URL (http/https), return as is
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }

  // Get basePath from public env var (embedded at build time for static export)
  let basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  
  // Runtime fallback: detect basePath from current URL (client-side only)
  if (!basePath && typeof window !== 'undefined') {
    const pathname = window.location.pathname;
    // Extract base path if URL contains /myPortfolio
    const match = pathname.match(/^(\/myPortfolio)/);
    if (match) {
      basePath = match[1];
    }
  }

  // If it's already prefixed with basePath, return as is
  if (basePath && path.startsWith(basePath)) {
    return path;
  }

  // For GitHub Pages, prefix with basePath if it exists
  if (basePath) {
    // Ensure path starts with / and basePath doesn't end with /
    const cleanBasePath = basePath.endsWith('/') ? basePath.slice(0, -1) : basePath;
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    return `${cleanBasePath}${cleanPath}`;
  }

  // Otherwise return the path as is
  return path;
};

