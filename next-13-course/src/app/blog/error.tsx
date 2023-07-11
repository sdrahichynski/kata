"use client";

import * as React from "react";

interface ErrorProps {
  error: Error;
}

const Error: React.FC<ErrorProps> = ({ error }) => {
  return (
    <div>
      <h1>Smth went wrong: {error.message}</h1>
    </div>
  );
};

export default Error;
