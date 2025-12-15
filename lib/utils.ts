// Helper to get the correct asset path with basePath for static export
export function getAssetPath(path: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  // Don't add basePath if it's already there or if path is absolute URL
  if (path.startsWith('http') || path.startsWith(basePath)) {
    return path;
  }
  return `${basePath}${path}`;
}
