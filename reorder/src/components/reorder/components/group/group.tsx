import * as React from "react";

interface Group {
  className: string;
}

const Group: React.FC<Group & React.PropsWithChildren> = ({
  className,
  children,
}) => {
  // context
  return <ul className={className}>{children}</ul>;
};

export default Group;
