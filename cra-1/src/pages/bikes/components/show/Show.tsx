import * as React from "react";
import * as LO from "layouts";
import { useParams } from "hooks";
import { requests } from "./duck";

interface ShowProps {}

const Show: React.FC<ShowProps> = () => {
  const { id = "" } = useParams();
  const { data, loading } = requests.useLoadBike(id);

  return (
    <LO.Primary loading={loading}>
      <div style={{ textAlign: "center" }}>
        <h1>{ data?.name }</h1>
        <h3>{ data?.price }</h3>
      </div>
    </LO.Primary>
  );
};

export default Show;
