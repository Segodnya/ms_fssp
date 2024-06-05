import { FullStory, init } from "@fullstory/browser";

import { Lead } from "./components/Lead/Lead";
import { Info } from "./components/Info/Info";
import { News } from "./components/News/News";
import { Team } from "./components/Team/Team";
import { Invitation } from "./components/Invitation/Invitation";
import "./App.css";

const { default: userflow } = await import("userflow.js");

// @TODO: Добавить компонент Header, который отображается на всех экранах, кроме первого
export function App() {
  userflow.init("ct_6nku5ydoofeppc2d6k52bp6fhe");
  userflow.identify(1, {});
  userflow.start("08733c64-5fda-445a-b6db-178b56fd3352");

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
