import * as React from "react";
// import './App.sass';

export class App extends React.Component<{}, {}> {
  public render() {
    return (
      <div className="app">
        <header className="app-header">
          <h1 className="app-title">Hello There.</h1>
        </header>
        <p className="app-content">
          Much work needs to be done. You may start your journey to world
          domination from <code>src/components/App.tsx</code>.
        </p>
      </div>
    );
  }
}
