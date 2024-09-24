import { Suspense } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./components/ui/languageSwitcher";
import Routes from "./routes";


function App() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <LanguageSwitcher/>
      <div className="App">
        <h1>{t('title')}</h1>
      </div>

      <Routes/>
    </>
  );
}

export default App;
