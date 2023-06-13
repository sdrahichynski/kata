import * as React from "react";
import * as LC from "./components";

interface Reorder {
  Group: typeof LC.ReorderGroup;
  Item: typeof LC.ReorderItem;
}

const Reorder: Reorder = {
  Group: LC.ReorderGroup,
  Item: LC.ReorderItem,
};

export default Reorder;
