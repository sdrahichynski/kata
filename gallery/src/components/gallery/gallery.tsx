import * as React from "react";
import styles from "./gallery.module.scss";
import { utils } from "./duck";
import * as L from "./components";

interface GalleryProps {
  children: ReturnType<typeof L.Slide> | ReturnType<typeof L.Slide>[];
}

interface GalleryStatic {
  Slide: typeof L.Slide;
}

const Gallery: React.FC<GalleryProps> & GalleryStatic = ({ children }) => {
  const [scroll, setScroll] = React.useState(
    document.documentElement.scrollTop
  );

  React.useEffect(() => {
    const wheelHandler = (e: WheelEvent) => {
      console.log(document.documentElement.scrollTop);
      setScroll((scroll) =>
        utils.calculateScroll(
          scroll,
          e.deltaY,
          Array.isArray(children) ? children.length : 1
        )
      );
    };

    document.addEventListener("wheel", wheelHandler);
    return () => document.removeEventListener("wheel", wheelHandler);
  }, []);

  return (
    <section className={styles.wrapper}>
      <span style={{ color: "white" }}>{scroll}</span>

      {React.Children.map(children, (child, i) => (
        <div
          className={styles.slideWrapper}
          style={{
            ...utils.getSlideStyle(i, scroll),
            // backgroundColor: color,
          }}
        >
          {child}
        </div>
      ))}
    </section>
  );
};

Gallery.Slide = L.Slide;

export default Gallery;
