import "./App.css";
import { About } from "./components/About";
import { Contacts } from "./components/Contacts";
import { Education } from "./components/Education";
import { Skills } from "./components/Skills";

function App() {
  return (
    <div className="flex mt-5 flex-col items-center space-x-1.5">
      <About></About>
      <Education></Education>
      <Skills></Skills>
      <Contacts></Contacts>
    </div>
  );
}

export default App;
