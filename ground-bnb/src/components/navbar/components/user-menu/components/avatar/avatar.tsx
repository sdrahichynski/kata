import Image from "next/image";
import * as React from "react";

interface AvatarProps {}

const Avatar: React.FC<AvatarProps> = () => {
  return (
    <Image
      className="rounded-full"
      alt=""
      width="30"
      height="30"
      src="/images/user-pic-ph.jpeg"
    />
  );
};

export default Avatar;
