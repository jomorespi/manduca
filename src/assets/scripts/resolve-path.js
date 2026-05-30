export function resolveAssetUrl(path) {
  if (typeof window !== 'undefined') {
    const pathname = window.location.pathname;
    const match = pathname.match(/^\/[^\/]+/);
    const base = (match && match[0] !== '') ? match[0] : '';
    const cleanBase = base.replace(/\/$/, '');
    const cleanPath = path.replace(/^\//, '');
    return cleanBase ? `${cleanBase}/${cleanPath}` : `/${cleanPath}`;
  }
  return `/${path.replace(/^\//, '')}`;
}

// Links
export function resolveLinkUrl(path) {
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('//')) {
    return path;
  }
  
  if (path.startsWith('./') || path.startsWith('../')) {
    return path;
  }
  
  return resolveAssetUrl(path);
}

// Images
export function initDynamicImages() {
  const images = document.querySelectorAll('[data-dynamic-src]');
  images.forEach((img) => {
    const originalPath = img.dataset.dynamicSrc;
    if (originalPath) {
      img.src = resolveAssetUrl(originalPath);
      img.onerror = () => {
        if (img.dataset.fallback) {
          img.src = resolveAssetUrl(img.dataset.fallback);
        }
      };
    }
  });
}

// Dynamic Links
export function initDynamicLinks() {
  const links = document.querySelectorAll('[data-dynamic-href]');
  links.forEach((link) => {
    const originalPath = link.dataset.dynamicHref;
    if (originalPath) {
      link.href = resolveLinkUrl(originalPath);
    }
  });
}