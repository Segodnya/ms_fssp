import LogRocket from 'logrocket';
import { Lead } from "./components/Lead/Lead";
import { Info } from "./components/Info/Info";
import { News } from "./components/News/News";
import { Team } from "./components/Team/Team";
import { Invitation } from "./components/Invitation/Invitation";
import "./App.css";

// @TODO: Добавить компонент Header, который отображается на всех экранах, кроме первого
export function App() {
  LogRocket.init('pxfeie/kommo-test');
  LogRocket.identify('ms', {
    name: 'Example Person',
  });

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
