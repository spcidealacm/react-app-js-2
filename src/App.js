import React from "react";
import "./App.less";
import { ProjectSearchList } from "./screens/project-list";
import LocaleButton from "./screens/LocaleButton";

function App() {
  return (
    <div className="App">
      <div>Hello World</div>
      <LocaleButton />
      <ProjectSearchList />
    </div>
  );
}

export default App;
