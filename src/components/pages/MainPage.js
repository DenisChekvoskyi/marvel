import { useState } from "react";

import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBoundarys from "../errorBoundary/ErrorBoundary";
import decoration from "../../resources/img/vision.png";

const MainPage = () => {
  const [selectedChar, setChar] = useState(null);

  const onCharSelected = (id) => {
    setChar(id);
  };
  return (
    <>
      <ErrorBoundarys>
        <RandomChar />
      </ErrorBoundarys>
      <div className="char__content">
        <ErrorBoundarys>
          <CharList onCharSelected={onCharSelected} />
        </ErrorBoundarys>
        <ErrorBoundarys>
          <CharInfo charId={selectedChar} />
        </ErrorBoundarys>
      </div>
      <img className="bg-decoration" src={decoration} alt="vision" />
    </>
  );
};

export default MainPage;
