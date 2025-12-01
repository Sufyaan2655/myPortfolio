/**
 * Helper function to get the correct image path for GitHub Pages
 * When basePath is set, we need to prefix relative paths with it
 * 
 * For static export, we detect the basePath at runtime from the URL.
 * This works in the browser by checking the current pathname.
 */
export const getImagePath = (path: string): string => {
  // If it's already an absolute URL (http/https), return as is
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }

  // Default basePath for GitHub Pages (can be overridden by env var or runtime detection)
  let basePath = '/myPortfolio';
  
  // Try to get from env var first (embedded at build time)
  if (typeof process !== 'undefined' && process.env?.NEXT_PUBLIC_BASE_PATH) {
    basePath = process.env.NEXT_PUBLIC_BASE_PATH;
  }
  
  // Runtime detection from URL (works in browser) - this is the most reliable
  if (typeof window !== 'undefined') {
    const pathname = window.location.pathname;
    // Extract base path from URL (e.g., /myPortfolio from /myPortfolio/ or /myPortfolio/products)
    const match = pathname.match(/^(\/[^\/]+)/);
    if (match && match[1] !== '/') {
      // Only use detected path if it's not just the root
      // For GitHub Pages, the base path should be /myPortfolio
      if (pathname.startsWith('/myPortfolio')) {
        basePath = '/myPortfolio';
      } else if (match[1] && match[1] !== '/') {
        // Fallback: use first path segment as base path
        basePath = match[1];
      }
    }
  }

  // If it's already prefixed with basePath, return as is
  if (basePath && path.startsWith(basePath)) {
    return path;
  }

  // For GitHub Pages, prefix with basePath
  if (basePath) {
    // Ensure path starts with / and basePath doesn't end with /
    const cleanBasePath = basePath.endsWith('/') ? basePath.slice(0, -1) : basePath;
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    return `${cleanBasePath}${cleanPath}`;
  }

  // Otherwise return the path as is
  return path;
};

