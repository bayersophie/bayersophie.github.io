import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";

type Language = "en" | "de";

type AppProps = {
  language: Language;
};

function App({ language }: AppProps) {
  return (
    <>
      <Header language={language} />
      <Home language={language} />
      <Footer language={language} />
    </>
  );
}

export default App;
