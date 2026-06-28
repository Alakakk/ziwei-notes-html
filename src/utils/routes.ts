const meta = import.meta as ImportMeta & {
  env?: {
    BASE_URL?: string;
  };
};

const rawBasePath = meta.env?.BASE_URL || "/";

export function routeHref(path: string) {
  if (
    path.startsWith("#") ||
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("mailto:")
  ) {
    return path;
  }

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
