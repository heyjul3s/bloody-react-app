import * as React from 'react';
import './app.sass';

class App extends React.Component<any, any> {
  public render() {
    return (
      <div className="app">
        <header className="app-header">
          <h1 className="app-title">Would you look at this Bloody React App</h1>
        </header>
        <p className="app-content">
          Much work needs to be done. You may start your journey to world domination from <code>src/App.tsx</code>.
        </p>
      </div>
    );
  }
}

export default App;
