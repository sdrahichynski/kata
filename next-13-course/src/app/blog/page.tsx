import * as C from "@/components";

export const metadata = {
  title: "BLOG | Test Blog APP",
  description: "Mick Nep free course app",
};

const Blog = () => {
  return (
    <>
      <h1>BLOG</h1>

      <C.PostsList />
    </>
  );
};

export default Blog;
