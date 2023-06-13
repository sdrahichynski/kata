import * as React from "react";

export const useFetch = (callback: Function, deps: React.DependencyList) => {
  const didFetchRef = React.useRef(false);

  React.useEffect(() => {
    if (!didFetchRef.current) {
      const cleanUp = callback();
      didFetchRef.current = true;

      return cleanUp;
    }
  }, [...deps]);
};
