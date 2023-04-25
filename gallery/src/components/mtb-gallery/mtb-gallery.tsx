import * as React from "react";
import Gallery from "../gallery";
import * as LA from "./assets";
import styles from "./mtb-gallery.module.scss";

const MtbGallery: React.FC = () => {
  return (
    <Gallery>
      <Gallery.Slide type={"left"} className={styles.imgSlide}>
        <img src={LA.IMG_7311} alt="" />
      </Gallery.Slide>

      <Gallery.Slide type={"right"} className={styles.imgSlide}>
        <img src={LA.IMG_6562} alt="" />
      </Gallery.Slide>

      <Gallery.Slide type={"left"} className={styles.imgSlide}>
        <img src={LA.IMG_6493} alt="" />
      </Gallery.Slide>

      <Gallery.Slide type={"right"} className={styles.imgSlide}>
        <img src={LA.IMG_7007} alt="" />
      </Gallery.Slide>

      <Gallery.Slide type={"center"} style={{ fontSize: "44px" }}>
        MTB - one love!
      </Gallery.Slide>
    </Gallery>
  );
};

export default MtbGallery;
