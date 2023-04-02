import * as React from "react";
import { Routes, Route } from "react-router-dom";

interface ResourceProps {
  list?: React.ExoticComponent;
  create?: React.ExoticComponent;
  edit?: React.ExoticComponent;
  show?: React.ExoticComponent;
}

const Resource: React.FC<ResourceProps> = ({ list, create, edit, show }) =>
  // @ts-ignore
  console.log(show) || (
    <Routes>
      {list && <Route index element={React.createElement(list)} />}
      {show && <Route path=":id/*" element={React.createElement(show)} />}
      {edit && <Route path=":id/edit/*" element={React.createElement(edit)} />}
      {create && (
        <Route path="create/*" element={React.createElement(create)} />
      )}
    </Routes>
  );

export default Resource;
