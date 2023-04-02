import * as React from "react";

interface Bike {
  id: string;
  name: string;
  price: number;
}

export const useLoadBike = (id: string) => {
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState<Bike | null>(null);

  React.useEffect(() => {
    const promise = new Promise<Bike | null>((resolve) => {
      setLoading(true);

      setTimeout(() => {
        resolve({
          id: id,
          name: "CLASH " + id,
          price: 3600,
        });
      }, 300);
    });

    promise.then((data) => {
      setLoading(false);
      setData(data);
    });
  }, [id]);

  return { data, loading };
};
