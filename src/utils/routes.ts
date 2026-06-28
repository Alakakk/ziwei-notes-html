function getBasePath() {
  const scriptSrc =
    document
      .querySelector<HTMLScriptElement>('script[type="module"][src]')
      ?.getAttribute("src") || "";
  const assetsSegment = "/assets/";

  if (scriptSrc.startsWith("/") && scriptSrc.includes(assetsSegment)) {
    return scriptSrc.slice(0, scriptSrc.indexOf(assetsSegment));
  }

  return "";
}

export function routeHref(path: string) {
  if (
    path.startsWith("#") ||
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("mailto:")
  ) {
    return path;
  }

  const rawBasePath = getBasePath();
  const basePath = rawBasePath.endsWith("/")
    ? rawBasePath.slice(0, -1)
    : rawBasePath;

  if (!basePath) {
    return path;
  }

  if (path === "/") {
    return `${basePath}/`;
  }

  return `${basePath}${path.startsWith("/") ? path : `/${path}`}`;
}

export function getCurrentRoutePath() {
  const rawBasePath = getBasePath();
  const basePath = rawBasePath.endsWith("/")
    ? rawBasePath.slice(0, -1)
    : rawBasePath;
  const pathname = window.location.pathname;

  if (basePath && pathname === basePath) {
    return "/";
  }

  if (basePath && pathname.startsWith(`${basePath}/`)) {
    return pathname.slice(basePath.length) || "/";
  }

  return pathname;
}
