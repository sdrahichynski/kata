import * as React from "react";
import * as C from "components";

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <div>
      <C.Gallery>
        <C.Gallery.Slide style={{ backgroundColor: "blanchedalmond" }}>
          "HELLO!"
        </C.Gallery.Slide>

        <C.Gallery.Slide style={{ backgroundColor: "olivedrab" }}>
          "HELLO!"
        </C.Gallery.Slide>

        <C.Gallery.Slide style={{ backgroundColor: "darkturquoise" }}>
          "HELLO!"
        </C.Gallery.Slide>

        <C.Gallery.Slide style={{ backgroundColor: "cadetblue" }}>
          "HELLO!"
        </C.Gallery.Slide>

        <C.Gallery.Slide style={{ backgroundColor: "deeppink" }}>
          "HELLO!"
        </C.Gallery.Slide>
      </C.Gallery>
    </div>
  );
};

export default App;
