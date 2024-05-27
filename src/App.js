import { FullStory, init } from "@fullstory/browser";
import { Lead } from "./components/Lead/Lead";
import { Info } from "./components/Info/Info";
import { News } from "./components/News/News";
import { Team } from "./components/Team/Team";
import { Invitation } from "./components/Invitation/Invitation";
import "./App.css";

// @TODO: Добавить компонент Header, который отображается на всех экранах, кроме первого
export function App() {
  // This is an example script - don't forget to change it!
  init("setIdentity", {
    uid: 1,
    properties: {
      displayName: "<DISPLAY_NAME_HERE>",
      email: "<EMAIL_HERE>",
    },
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
