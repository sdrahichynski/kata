import * as React from "react";
import { Routes, Route } from "react-router-dom";

interface ResourceProps {
  list?: React.FC;
  show?: React.FC;
  edit?: React.FC;
  create?: React.FC;
}

const Resource: React.FC<ResourceProps> = ({
  list: List,
  show: Show,
  edit: Edit,
  create: Create,
}) => {
  return (
    <Routes>
      {List && <Route index element={<List />} />}
      {Show && <Route path={":id/*"} element={<Show />} />}
      {Edit && <Route path={":id/edit/*"} element={<Edit />} />}
      {Create && <Route path={"/create/*"} element={<Create />} />}
    </Routes>
  );
};

export default Resource;
