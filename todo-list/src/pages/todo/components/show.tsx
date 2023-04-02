import * as React from "react";
import { useParams } from "react-router-dom";

interface ShowProps {}

const Show: React.FC<ShowProps> = () => {
  const { id } = useParams() as { id: string };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>ToDo # {id}</h1>
    </div>
  );
};

export default Show;
