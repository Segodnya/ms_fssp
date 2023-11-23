import { Lead } from "./components/Lead/Lead";
import { Info } from "./components/Info/Info";
import { News } from "./components/News/News";
import { Team } from "./components/Team/Team";
import { Invitation } from "./components/Invitation/Invitation";
import "./App.css";

export function App() {
  return (
    <div className="app">
      <Lead />
      <Info />
      <News />
      <Team />
      <Invitation />
    </div>
  );
}
