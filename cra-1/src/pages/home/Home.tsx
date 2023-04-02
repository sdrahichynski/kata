import * as React from "react";
import * as LO from "layouts";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <LO.Primary>
      HOME!
    </LO.Primary>
  );
};

export default Home;
