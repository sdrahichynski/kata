import * as React from "react";
import { Outlet } from "react-router-dom";

interface PrimaryProps {}

const Primary: React.FC<PrimaryProps> = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Primary;
