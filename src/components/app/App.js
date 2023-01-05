import { Component } from "react";
import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBoundarys from "../errorBoundary/ErrorBoundary";

import decoration from "../../resources/img/vision.png";

class App extends Component {
  state = {
    selectedChar: null,
  };

  onCharSelected = (id) => {
    this.setState({
      selectedChar: id,
    });
  };

  render() {
    return (
      <div className="app">
        <AppHeader />
        <main>
          <ErrorBoundarys>
            <RandomChar />
          </ErrorBoundarys>
          <div className="char__content">
            <ErrorBoundarys>
              <CharList onCharSelected={this.onCharSelected} />
            </ErrorBoundarys>
            <ErrorBoundarys>
              <CharInfo charId={this.state.selectedChar} />
            </ErrorBoundarys>
          </div>
          <img className="bg-decoration" src={decoration} alt="vision" />
        </main>
      </div>
    );
  }
}

export default App;
