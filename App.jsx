import Clock from "./Clock";
import Hello from "./Hello";
import Welcome from "./Welcome";
import Container from "./Container";
import LanguageContext from "./LanguageContext";
import { useState } from "react";

function App() {
  const [language, setLanguage] = useState("en");

/*   function handleSetLanguage(language) {
    setLanguage(language);
  } */

  return (
    <Container title={<Hello />}>
      <LanguageContext.Provider value={language}>
        {/* <Welcome name={"Giuseppe"} age={19} /> */}

        <div>
          <Clock />
          <select value={language} onChange={(e) => setLanguage(e.target.value)}>
            <option value='en'>EN</option>
            <option value='it'>IT</option>
          </select>
        </div>
      </LanguageContext.Provider>
    </Container>
  );
}

export default App;
