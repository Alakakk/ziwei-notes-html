import { HomePage } from "./pages/HomePage";
import { StarsIndexPage } from "./pages/StarsIndexPage";
import { TianjiReaderPage } from "./pages/TianjiReaderPage";
import { ZiweiReaderPage } from "./pages/ZiweiReaderPage";

export function App() {
  const path = window.location.pathname;

  if (path === "/stars") {
    return <StarsIndexPage />;
  }

  if (path === "/stars/ziwei") {
    return <ZiweiReaderPage />;
  }

  if (path === "/stars/tianji") {
    return <TianjiReaderPage />;
  }

  return <HomePage />;
}
