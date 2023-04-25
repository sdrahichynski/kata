import * as React from "react";
import styles from "./gallery.module.scss";
import { utils } from "./duck";
import * as L from "./components";

interface GalleryProps {
  children:
    | React.ReactElement<L.SlideProps>
    | React.ReactElement<L.SlideProps>[]; // doesn't work?
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

      {React.Children.map(children, (child, i) => {
        return React.cloneElement(child, {
          style: {
            ...child.props.style,
            ...utils.getSlideStyle(i, scroll),
            zIndex: Array.isArray(children) ? children.length - i : 1,
          },
        });
      })}
    </section>
  );
};

Gallery.Slide = L.Slide;

export default Gallery;
