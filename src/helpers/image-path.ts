/**
 * Helper function to get the correct image path for GitHub Pages
 * When basePath is set, we need to prefix relative paths with it
 * Uses NEXT_PUBLIC_ prefix so it's available in client components
 */
export const getImagePath = (path: string): string => {
  // If it's already an absolute URL (http/https), return as is
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }

  // Get basePath from public env var (available in client components)
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  
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

