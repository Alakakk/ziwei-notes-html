import { HomePage } from "./pages/HomePage";
import { StarsIndexPage } from "./pages/StarsIndexPage";
import { ZiweiReaderPage } from "./pages/ZiweiReaderPage";

export function App() {
  const path = window.location.pathname;

  if (path === "/stars") {
    return <StarsIndexPage />;
  }

  if (path === "/stars/ziwei") {
    return <ZiweiReaderPage />;
  }

  return <HomePage />;
}
