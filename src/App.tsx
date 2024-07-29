import { useState } from "react";
import "./App.css";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [okayPressed, setokayPressed] = useState(false);
  const okayButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "Serious ah va?",
      "Think again!",
      "Enakku vera yaru irukanga!",
      "please",
      "Ego va ahhh",
      "Please purinjiko!",
      "Adingu ",
      "You're breaking my heart ;(",
      "pretty please",
      "i am going to die",
      "yup im dead",
      "un vettuku vanthuduvan",
      "No :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="centered-container">
      <div className="valentine-container">
        {okayPressed ? (
          <>
            <img src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif" />
            <div className="text-container">Ok yay!!!</div>
          </>
        ) : (
          <>
            <img
              className="h-[200px]"
              style={{ width: "400x", height: "240px" }}
              src=""
            />
            <h1 className="text-container">
              I'm sorry for not being able to speak :(
            </h1>
            <div>
              <button
                className={"okay-button"}
                style={{ fontSize: okayButtonSize }}
                onClick={() => setokayPressed(true)}
              >
                Yes
              </button>

              <button onClick={handleNoClick} className="no-button">
                {noCount === 0 ? "No" : getNoButtonText()}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
